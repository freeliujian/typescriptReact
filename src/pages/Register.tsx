import * as React from "react"




interface Prop { 
    index:Number
}


class Register extends React.Component<Prop> { 
    constructor(props:Prop){
        super(props)
    }


    render(){
       
        return (
            <div>
                注册
            </div>
        )
    }
}


export default Register