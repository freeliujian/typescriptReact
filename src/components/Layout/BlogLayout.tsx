import * as React from "react"
import BlogHeader from './Header'
import {Link} from 'react-router-dom'
import {Layout} from 'antd'
import './BlogLayout.scss'
import {PathType,PushHistroyType} from '../../pages/history'

interface Prop extends PathType,PushHistroyType{
    //传入组件
    children:Children,
}

interface Children {
    content?:React.ReactNode
}





class BlogLayout extends React.Component<Prop>{
    constructor(props:Prop){
        super(props);
    }


    render(){
        const {children} = this.props
        console.log(this.props)
        return (
            <Layout>
                {/* <BlogHeader push={this.props.push}  path={this.props.path/> */}
                {children.content}
                
            </Layout>
        )
    }

    
}

 


export default BlogLayout


