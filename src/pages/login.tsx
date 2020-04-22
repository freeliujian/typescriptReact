import * as React from "react"
import {connect} from 'react-redux'
import { ISLOGINACCOUNT ,ISLOGINPSD,ISLOGIN} from '../constants/Login'
import {LoginActions,IsLoginActions} from '../actions/Login'
import {LoginSatteType,} from '../reducers/Login'
import { Input ,Button,message} from 'antd';
import { UserOutlined,KeyOutlined } from '@ant-design/icons';
import Logo from '../assets/logo.png'
import {Route,Switch,Link} from 'react-router-dom'
import Register from './Register'
import './Login.scss'

interface PathType { 
    path:string
}
interface LoginHistroyType {
    push:(pathname:string)=>void
}
interface Logintypes {
    Login:LoginSatteType
}
interface FristLoginProp extends Logintypes{
    match:PathType,
    history:LoginHistroyType,
    LoginAccountActions:(AccountActions:LoginActions)=>void,
    LoginPwdActions:(PwdAcions:LoginActions)=>void,
    IsloginActions:(Actions:IsLoginActions)=>void,
}



class FristLogin extends React.Component<FristLoginProp> {
    constructor(props:FristLoginProp){
        super(props)
 
    }
    render(){
        return (
            <div className='Login'>
                            
                <div className='input-box'>
                    <Input size='large' placeholder="请输入你的账号"  prefix={<UserOutlined />}  onChange={this.isinput.bind(this,'account')}/>
                </div>
                <div className='input-box'>
                    <Input.Password  size='large' placeholder="请输入你的密码"  prefix={<KeyOutlined />}  onChange={this.isinput.bind(this,'pwd')}/>
                </div>
            </div> 
        )
    }
    isinput(name:string,e:React.ChangeEvent<HTMLInputElement>){
        e.persist();
        const {LoginAccountActions,LoginPwdActions} =  this.props;
        console.log(e,name)
        if(name==='account'){
            LoginAccountActions({
                type:ISLOGINACCOUNT,
                info:e.target.value.trim()
            })
        }else{
            LoginPwdActions({
                type:ISLOGINPSD,
                info:e.target.value.trim()
            })
        }
        

    }


}
const FristLoginmapStateToProps = (state: Logintypes): object => {
    return {}
}
const FristLoginmapDispatchToProps = (dispatch: any) => {
    return {
        LoginAccountActions: (AccountActions:LoginActions)=>{
            dispatch(AccountActions)
        },
        LoginPwdActions:(PwdAcions:LoginActions)=>{
            dispatch(PwdAcions)
        },
    }
}

const FristLogins =connect(
    FristLoginmapStateToProps,
    FristLoginmapDispatchToProps
)(FristLogin)

class Login extends React.Component<FristLoginProp> {
    constructor(props:FristLoginProp){
        super(props)
    }

    render(){
        const {path} = this.props.match;
        return (
            <div className="jinghe_Vodsystem_warpper">
                <div className="jinghe_Vodsystem">
                    <img src={Logo} alt=""/>
                    <p>
                        年卡会员点播系统
                    </p>
                    <div className="login-planel">
                        <div className="title">
                            <Link to={`${path}/loginPanel`}>
                                登录
                            </Link>
                            |
                            <Link to={`${path}/register`}>
                                注册
                            </Link>
                        </div>
                        <Switch>
                            <Route exact path={`${path}/register`} component={Register}></Route>
                            <Route exact path={`${path}/loginPanel`} component={FristLogins}></Route>
                        </Switch>
                        <div className='login-btn-warpper'>
                        <Button type="primary" onClick={this.hanleClickLogin.bind(this)}>登录</Button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
    
    hanleClickLogin(){
        const {IsloginActions,Login} = this.props
    
        if(Login.username===''){
            message.info('请输入你的账号')
            return
        }
        if(Login.password===''){
            message.info('请输入你的密码')
            return
        }
        let data = {
            info:Login,
            type:ISLOGIN
        }
       
        IsloginActions(data)
    }
 
}

const mapStateToProps = (state: Logintypes): object => {
    return {
        Login :state.Login
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        IsloginActions:(Actions:IsLoginActions)=>{
           
            dispatch(Actions)
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

