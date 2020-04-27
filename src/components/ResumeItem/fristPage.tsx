import * as React from "react"

import Texty from 'rc-texty';

import QueueAnim from 'rc-queue-anim';

interface Shehuizhuyi {
    text: string
}

const List: Shehuizhuyi[] = [
    {
        text: '富强'
    },
    {
        text: '民主'
    },
    {
        text: '文明'
    },
    {
        text: '和谐'
    },
    {
        text: '自由'
    },
    {
        text: '平等'
    },
    {
        text: '公正'
    },
    {
        text: '法治'
    },
    {
        text: '爱国'
    },
    {
        text: '敬业'
    },
    {
        text: '诚信'
    },
    {
        text: '友善'
    },
]


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
                            {List.map(item => {
                                return (
                                    <li key={item.text}>
                                        {item.text}
                                    </li>
                                )
                            })}
                        </QueueAnim>

                    </ul>

                </div>
            </div>
        </div>
    )
}


export default FristResume


