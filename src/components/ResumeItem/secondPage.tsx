import * as React from "react"
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';

const SecondResume = ()=>{
    return (
        <div className="frist-img middle">
            <div className="two resume-page">
                <TweenOne className="banner-user-title" 
                    animation={{ y: 30, opacity: 0, type: 'from' }}
                    id="title"
                >
                    经和技术部
                </TweenOne>
                <TweenOne className="banner-user-text" 
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    id="content"
                >
                    Technology stack
                </TweenOne>
                <div className="animation-box">
                    <div className="frist-round">
                        <div className="round-item zhongxin">
                            前端
                        </div>
                        <div className="round-item round-JS">
                            JS
                        </div>
                        <div className="round-item round-CSS">
                            CSS
                        </div>
                    </div>
                    <div className="second-round">
                        <div className="round2-item  round-Ts">
                            Ts
                        </div>
                        <div className="round2-item round-Node">
                            Node
                        </div>
                        <div className="round2-item round-Vue">
                            Vue
                        </div>
                        <div className="round2-item round-React">
                            React
                        </div>
                        <div className="round2-item round-Flutter">
                            Flutter
                        </div>
                        <div className="round2-item round-LESS">
                            LESS
                        </div>
                        <div className="round2-item round-Express">
                            Express
                        </div>
                        <div className="round2-item round-Webpack">
                            Webpack
                        </div>
                    </div>
                </div>
                <QueueAnim>
                    <div key="1">
                    熟练使用HTML/CSS技术，熟悉Javascript/Typescript编程,能够熟练使用reactjs等框架进行模块开发，
                  
                    </div>
                    <div key="2">
                    熟练的使用webpack等前端工具，了解less，sass等前端新技术,
                    </div>
                    <div key="3">
                    熟悉Flutter开发手机APP
                    </div>
                </QueueAnim>
               
            </div>
        </div>
    )
}


export default SecondResume


