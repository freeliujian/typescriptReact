import * as React from "react"

import Texty from 'rc-texty';

import QueueAnim from 'rc-queue-anim';



const FristResume = ()=>{
    return (
        <div className="frist-img middle">
            <div className="one resume-page">
                <h1>
                    <Texty>Little Forest</Texty>
                </h1>
                <div>
                    <Texty>前端工程师</Texty>
                </div>
                <div>
                    <Texty>670177821@qq.com</Texty>
                </div>
                <div className="line"></div>
                <div className="char">
                    <ul>
                        <QueueAnim delay={300} className="queue-simple">
                            
                        </QueueAnim>

                    </ul>

                </div>
            </div>
        </div>
    )
}


export default FristResume


