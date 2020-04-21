import * as React from "react"




interface Prop { 
    index:Number
}


class Register extends React.Component<Prop> { 
    constructor(props:Prop){
        super(props)
    }


    render(){
        console.log(111111)
        return (
            <div>
                注册
            </div>
        )
    }
}


export default Register