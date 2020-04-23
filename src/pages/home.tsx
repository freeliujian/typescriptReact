import * as React from "react"
import {Link} from 'react-router-dom'
import BlogLayout from '../components/Layout/BlogLayout'
import {PathType,PushHistroyType} from './history'
import './home.scss'


interface HomeProp extends PathType,PushHistroyType{

}



  
// type HomeProp = {
//     Prop: any;
//     Home:
// }


class HomeContent extends React.Component<HomeProp>{

  
    constructor(props:HomeProp){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <div>
                    首页
                    <Link to='/login/loginPanel'>
                        跳转
                    </Link>
                   
                </div>
            </React.Fragment>
        )
    }

    
}


class Home extends React.Component<HomeProp>{
    
    constructor(props:HomeProp){
        super(props);
    }

    render(){
        
        let content = {
            content :<HomeContent {...this.props}/>
        }
        console.log({...this.props})
        return (
            <BlogLayout {...this.props}></BlogLayout>
            
        )
    }

}



export default Home


