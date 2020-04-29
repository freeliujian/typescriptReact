import * as React from "react"
import BlogHeader from './Header'
import BlogSilder from './Silder'
import {Layout,Row,Col} from 'antd'
import './BlogLayout.scss'

// const Sider = Layout.Sider;
// const Content = Layout.Content;
const Footer = Layout.Footer;
interface Prop {
    //传入组件
    children:any,
}




class BlogLayout extends React.Component<Prop>{
    constructor(props:Prop){
        super(props);
    }
    render(){
        const {children} = this.props
        return (
            <Layout>
                <BlogHeader/>
                <div className="blog-content-warpper">
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={14}>
                            {children.content}
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} offset={1} xl={6} xxl={6}>
                            <BlogSilder></BlogSilder>
                        </Col>
                    </Row>
                </div>
                
        
                <Footer>
                    <div className='fot-char'>
                        文字居中
                    </div>
                    
                </Footer>
            </Layout>
        )
    }

    
}

 


export default BlogLayout


