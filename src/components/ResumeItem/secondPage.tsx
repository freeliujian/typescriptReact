import * as React from "react"

import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';





const SecondResume = ()=>{
    return (
        <div className="frist-img middle">
            <div className="one resume-page">
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
                </div>
            </div>
        </div>
    )
}


export default SecondResume


