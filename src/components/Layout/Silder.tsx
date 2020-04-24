import * as React from "react"
import { Card, Tooltip } from 'antd'
import {
    FormOutlined,
    GithubOutlined,
    WechatOutlined
} from '@ant-design/icons';
import tianqizhizi from '../../assets/images/tianqizhizi.jpg'
import { Link } from 'react-router-dom'



const { Meta } = Card;

const CardIcon = [
    <Link to='jianli' key='jianli'>
        <FormOutlined/>
    </Link>,
    <a href="https://github.com/freeliujian" key='github'>
        <GithubOutlined/>
    </a>,
    <Tooltip
    title={
        <div className='wx'></div>
    }>
    <WechatOutlined/>
  </Tooltip>,
  
]

class BlogSlider extends React.Component {

    state = {
        loading:true
    }

    // onChange = (checked:React.ChangeEvent<HTMLElement>) => {
    //     this.setState({ loading: !checked });
    // };

    render(){
        const {loading}=this.state;
        return (
            <React.Fragment>
                <div className='blog-slider'>
                    <div className="blog-silider-notice">
                        <Card
                            style={{ width: 250 }}
                            loading={loading}
                            hoverable
                            bordered={true}
                            cover={
                                <img alt="example" src={tianqizhizi} />
                            }
                            actions={CardIcon}
                        >
                            <Meta
                            
                                title="little-forest"
                                description="前端工程师"
                            />
                        </Card>
                    </div>
                    <div className='blog-silider-label blog-silider-notice'>
                        <Card title="我的标签" 
                      
                        style={{ width: 250 }}
                        hoverable
                        bordered={true}
                        >
                            <p>javescript</p>
                            <p>Vue</p>
                            <p>React</p>
                        </Card>
                    </div>
                    <div className='blog-silider-article blog-silider-notice'>
                        <Card title="文章列表" 
                        bordered={true}
                        style={{ width: 250 }}
                        hoverable
                        >
                            <p>文章1</p>
                            <p>文章2</p>
                            <p>文章3</p>
                        </Card>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}




export default BlogSlider


