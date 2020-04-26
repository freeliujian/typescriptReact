import * as React from "react"
import {Link} from 'react-router-dom'
import BlogLayout from '../components/Layout/BlogLayout'
// import {PushHistroyType} from './history'
import {connect} from 'react-redux'
import {HomeActions} from '../actions/Home'
import './home.scss'
import { Row,Col } from "antd"
import {LikeOutlined,LoadingOutlined} from '@ant-design/icons'


interface HomeProp  {
    // history:PushHistroyType
    pageSize:number,
    pageIndex:number,
    loading:boolean
}

interface HomeType { 
    home:HomeActions
}

  


// 首页
// <Link to='/login/loginPanel'>
//     跳转
// </Link>


class HomeContent extends React.Component<HomeProp>{

    state={
        loading:true
    }

    render(){
       
        return (
            <React.Fragment>
                
                <div className="blog-article">
                   <Row>
                        <Col span={24} className='blog-article-col'>
                            <div className="blog-article-list">
                                <div className="article-list-content">
                                    <div className="article-list-title">
                                        Ts + React +Antd搭建项目
                                    </div>
                                    <div className="article-list-summary oneline">
                                        使用ts开发React项目首先得搭建环境，react官方专门为ts提供一套新的脚手架来使开发者更快的搭建Ts+React的环境
                                    </div>
                                    <div className="article-list-footer">
                                        <div className="articles-footer-item">
                                            start:2019/5/20
                                        </div>
                                        <div className="articles-footer-item">
                                        <LikeOutlined /> 赞 11
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={24} className='blog-article-col'>
                            <div className="blog-article-list">
                                <div className="article-list-content">
                                    <div className="article-list-title">
                                        Ts + React +Antd搭建项目
                                    </div>
                                    <div className="article-list-summary oneline">
                                        使用ts开发React项目首先得搭建环境，react官方专门为ts提供一套新的脚手架来使开发者更快的搭建Ts+React的环境
                                    </div>
                                    <div className="article-list-footer">
                                        <div className="articles-footer-item">
                                            start:2019/5/20
                                        </div>
                                        <div className="articles-footer-item">
                                            <LikeOutlined /> 赞 11
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="blog-article-col" span={24}>
                            <div className="blog-article-list-loading">
                                {this.state.loading?'没有更多了':<LoadingOutlined />}
                            </div>
                        </Col>
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


