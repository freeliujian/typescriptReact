import * as React from "react"
import {Link} from 'react-router-dom'

interface Prop {
    index:Number,
    history:IHistory
}

interface IHistory {
push: (pathname: string) => void
}

class Home extends React.Component<Prop>{
    constructor(props:Prop){
        super(props);
    }


    render(){
        return (
            <React.Fragment>
                <div>

                    首页
                    <Link to='/login'>
                        跳转
                    </Link>
                   
                </div>
            </React.Fragment>
        )
    }

    
}




export default Home


