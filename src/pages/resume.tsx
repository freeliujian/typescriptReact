import * as React from "react"
import BannerAnim, { Element } from 'rc-banner-anim';
import FristResume from '../components/ResumeItem/fristPage'
import SecondResume from '../components/ResumeItem/secondPage'
import ThirdResume from '../components/ResumeItem/thirdPage'
import './resume.scss'
const BgElement = Element.BgElement;



interface IE {
    deltaY:number
}
const bannerList:any[] =[
{
    component:<FristResume/>,
    bg:"#364D79"
},{
    component:<SecondResume/>,
    bg:"#E6A23C"
},{
    component:<ThirdResume/>,
    bg:"#64CBCC"
}
]
class Resume extends React.Component {
    banner: any

    handleWheel(e: IE){
        if (e.deltaY > 0) {
            this.banner.next()
        } else {
            this.banner.prev()
        }
    }
    
    render() {
        return (
            <div onWheel={this.handleWheel.bind(this)}>
                <BannerAnim
                    prefixCls="banner-user"
                    ref={(c) => { this.banner = c; }}
                >
                    {bannerList.map((item,index)=>{
                        return (
                            <Element
                                prefixCls="banner-user-elem"
                                key={index}
                            >
                                <BgElement
                                    key="bg"
                                    className="bg"
                                    style={{
                                        background: item.bg,
                                    }}
                                />
                                {item.component}
                                
                            </Element>
                        )
                    })}
                </BannerAnim>
            </div>
                

        )
    }


    componentDidMount() {

    }
}

export default Resume


