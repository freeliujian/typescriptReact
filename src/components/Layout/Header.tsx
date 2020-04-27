import * as React from "react"
import { Layout, Row, Col } from 'antd'
import {
    HomeOutlined,
    CopyOutlined 
  } from '@ant-design/icons';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one'
import { Link } from 'react-router-dom'


const Header = Layout.Header

const geInterval = (e: any) => {

    switch (e.index) {
        case 0:
            return 0
        case 1:
            return 150
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 150 + 450 + (e.index - 2) * 10
        default:
            return 150 + 450 + (e.index - 6) * 150
    }
}
const getEnter = (e: any) => {
    const t = {
        opacity: 0,
        scale: 0.8,
        y: '-100%'
    }
    if (e.index >= 2 && e.index <= 6) {
        return { ...t, y: '-30%', duration: 150 }
    }
    return t
}

const getSplit = (e: any) => {
    const t = e.split(' ')
    const c: any[] = []
    t.forEach((str: string, i: number) => {
        c.push(<span key={`${str}-${i}`}>{str}</span>)
        if (i < t.length - 1) {
            c.push(<span key={` -${i}`} />)
        }
    })
    return c
}



export interface RouterTitle<T> {
    router: T
    title?: T
    icon?:React.ReactNode
}
const headerlist: RouterTitle<string>[] = [{
    router: '/',
    title: '主页',
    icon: <HomeOutlined />
}, 
// {
//     router: '/article',
//     title: '详情',
//     icon: <CopyOutlined />
// }
]

const BlogHeader = () => (
    <React.Fragment>
        <Header className='blog-header'>
            <div className='blog-wrapper'>
                <Row>
                    <Col span={24}>
                        <Texty
                            className="title"
                            type="mask-top"
                            delay={400}
                            enter={getEnter}
                            interval={geInterval}
                    
                            componentProps={{
                                animation: [
                                    { x: 130, type: 'set' },
                                    { x: 100, delay: 500, duration: 450 },
                                    {
                                        duration: 300,
                                        ease: 'easeOutQuart',
                                        x: 0
                                    },
                                    {
                                        delay: -300,
                                        duration: 1000,
                                        ease: 'easeInOutQuint',
                                        letterSpacing: 0,
                                        scale: 0.9
                                    },
                                    {
                                        delay: -300,
                                        duration: 1000,
                                        ease: 'easeInOutQuint',
                                        scale: 1,
                                        width: '100%'
                                    },

                                ]
                            }}>
                            人生只若初见，何事秋风悲画扇
            </Texty>
                        <TweenOne
                            className="combined-bar"
                            animation={{
                                delay: 2000,
                                ease: 'easeInOutExpo',
                                type: 'from',
                                width: 0,
                                x: 158
                            }}
                        />
                        <Texty
                            className="content"
                            type="bottom"
                            split={getSplit}
                            delay={2200}
                            interval={30}>
                            经和
            </Texty>

                    </Col>
                </Row>

            </div>

        </Header>
        <div className="blog-header-nav">
            <div className="blog-header-nav-wrapper">
                <Row>
                    <Col span={12}>
                        <ul className='blog-header-nav-list'>
                            {headerlist.map(item => {
                                return (
                                    <Link to={item.router} key={item.title}>
                                        <li key={item.title}>
                                            {item.icon} {item.title}
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </Col>

                </Row>
            </div>

        </div>
    </React.Fragment>
)


export default BlogHeader


