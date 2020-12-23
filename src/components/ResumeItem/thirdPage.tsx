import * as React from "react"

interface Shehuizhuyi {
    text: string
}


const ThirdResume = ()=>{
    return (
        <div className="frist-img middle">
            <div className="three resume-page">
                <h1>经历</h1>
                <div className="cards">
                    <div className="item">
                        <div className="card-title">
                            陶梦自媒体有限公司
                        </div>
                        <div className="card-time">
                            2018年3月-2019年一月
                        </div>
                        <div className="card-post">
                            前端工程师
                            <p>
                                使用“Electron”，“Electron-builder”，“Layui”等库
                            </p>
                        </div>
                        <ul className="card-content">
                            <li>
                            负责公司桌面软件项目开发，技术栈采用Electron和Layui
                            </li>
                            <li>
                            使用electron-updater进行自动更新
                            </li>
                            <li>
                            使用ajax完成页面交互
                            </li>
                        </ul>

                    </div>
                    <div className="item">
                        <div className="card-title">
                            上海经和数据科技有限公司
                        </div>
                        <div className="card-time">
                            2019年3月-至今
                        </div>
                        <div className="card-post">
                            前端工程师
                            <p>
                                使用“React”，“Antd”，“node”，“vue”等
                            </p>
                        </div>
                        <ul className="card-content">
                            <li>
                            独自负责公司所有前端项目的维护和开发
                            </li>
                            <li>
                            使用node和vue快速开发小工具
                            </li>
                            <li>
                            同期学习Flutter和dart，了解手机app混合开发模式
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default ThirdResume


