import * as React from "react"

import FristResume from '../components/ResumeItem/fristPage'
import SecondResume from '../components/ResumeItem/secondPage'
import ThirdResume from '../components/ResumeItem/thirdPage'
import FourthResume from '../components/ResumeItem/fourthPage'
import { Carousel } from 'antd';
import {Link} from 'react-router-dom'
import './resume.scss'





interface IE {
    deltaY:number
}
const bannerList:any[] =[
   
{
    component:<FristResume/>,
   
   
},{
    component:<SecondResume/>,
   
    
},{
    component:<ThirdResume/>,
   
    
},
{
    component:<FourthResume/>,
   
},
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
        console.log(1)
        
        return (
            <div onWheel={this.handleWheel.bind(this)}>
                <Link to='/'>
                <div className="resume-comebackindex"></div>
                </Link>
                
                <Carousel 
                dotPosition= 'right'
                ref={(c) => { this.banner = c; }}>
                    {bannerList.map((item,index)=>{
                        console.log(item.background)
                        return (
                            <div className={[`carousel-warpper carousel-warpper-${index}`].join()} key={index}>
                                   {item.component}
                            </div>
                        )
                    })}
                </Carousel>
               
            </div>
                

        )
    }


    
}

export default Resume


