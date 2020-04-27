import * as React from "react"
import BannerAnim, { Element } from 'rc-banner-anim';
import FristResume from '../components/ResumeItem/fristPage'
import SecondResume from '../components/ResumeItem/secondPage'
import './resume.scss'
const BgElement = Element.BgElement;


interface Prop {
    index: Number
}



class Resume extends React.Component<Prop> {
    banner: any

    constructor(prop: Prop) {
        super(prop)
    }

    render() {
        return (
                <BannerAnim
                    prefixCls="banner-user"
                    ref={(c) => { this.banner = c; }}
                >
                   
                    <Element
                        prefixCls="banner-user-elem"
                        key="1"
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                            style={{
                                background: '#64CBCC',
                            }}
                        />
                        <SecondResume/>
                    </Element>
                    <Element
                        prefixCls="banner-user-elem"
                        key="0"
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                            style={{
                                background: '#364D79',
                            }}
                        />
                        <FristResume/>
                    </Element>
                </BannerAnim>

        )
    }


    componentDidMount() {

    }
}

export default Resume


