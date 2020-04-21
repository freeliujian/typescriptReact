import * as React from "react"
import {connect} from 'react-redux'
import {ISLOGIN} from '../constants/Login'
import {LoginSatteType} from '../reducers/Login'
import { Input } from 'antd';
import { UserOutlined,KeyOutlined } from '@ant-design/icons';
import Logo from '../assets/logo.png'
import {Route,Switch,Link} from 'react-router-dom'
import Register from './Register'

import './Login.scss'

interface PathType { 
    path:string
}

interface LoginProp {
    match:PathType
}

interface Prop { 
    index:Number
}

interface Logintypes {
    Login:LoginSatteType
}



class FristLogin extends React.Component<LoginProp> { 
    constructor(props:LoginProp){
        super(props)
    }


    render(){
        const {path} = this.props.match;
        return (
           
            <div className="jinghe_Vodsystem">
                <img src={Logo} alt=""/>
                <p>
                    年卡会员点播系统
                </p>
                <div className="Register">
                    <div className="title">
                        <Link to={`${path}`}>
                            登录
                        </Link>
                        |
                        <Link to={`${path}/register`}>
                            注册
                        </Link>
                    </div>
                    <div className="Login">
                        <div className='Login-box'>
                        
                            <div className='input-box'>
                                <Input size='large' placeholder="账号" prefix={<UserOutlined />} />
                            </div>
                            <div className='input-box'>
                                <Input size='large' placeholder="密码" prefix={<KeyOutlined />} />
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            
            
        )
    }
}


class Login extends React.Component<LoginProp> {
    constructor(props:LoginProp){
        super(props)
    }

    render(){
       
       const {path} = this.props.match;
       console.log(path)
        return (
            <div className="jinghe_Vodsystem_warpper">
                {/* <Route exact path={`${path}`} component={FristLogin}></Route>
                
                <Switch>
                    <Route exact path={`${path}/register`} component={Register}></Route>
                    
                </Switch> */}
                111
            </div>
        )
    }
}

const mapStateToProps = (state: Logintypes): object => {
    return { Login: state.Login }
}

export const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchArticle: (Id: string) => dispatch({ type: ISLOGIN, Id })
    }
}

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Login)

export default Login