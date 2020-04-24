import * as React from "react"
import {Link} from 'react-router-dom'
import BlogLayout from '../components/Layout/BlogLayout'
// import {PushHistroyType} from './history'
import {connect} from 'react-redux'
import {HomeActions} from '../actions/Home'
import './home.scss'
import { Row } from "antd"


interface HomeProp  {
    // history:PushHistroyType
    pageSize:number,
    pageIndex:number,
}

interface HomeType { 
    home:HomeActions
}

  
// type HomeProp = {
//     Prop: any;
//     Home:
// }

// 首页
// <Link to='/login/loginPanel'>
//     跳转
// </Link>


class HomeContent extends React.Component<HomeProp>{

  
    

    render(){
        console.log(this.props)
        return (
            <React.Fragment>
                
                <div className="blog-article">
                   <Row>

                   </Row>
                </div>
            </React.Fragment>
        )
    }

}
const mapStateToProps = (state: HomeType): object => {
    return {
        home:state.home
    }
}

const HomeContents =connect(
    mapStateToProps,
    null
)(HomeContent)

class Home extends React.Component<HomeProp>{
    
    constructor(props:HomeProp){
        super(props);
    }
    render(){
        const content = {
            content :<HomeContents {...this.props}/>
        }
        return (
            <BlogLayout children={content}></BlogLayout>
        )
    }
}



export default Home


