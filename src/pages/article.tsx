import * as React from "react"

interface Prop {
    index:Number
}

class Article extends React.Component<Prop> {
    constructor(prop:Prop){
        super(prop)
    }

    render(){
        return (
            <div>
                1111
            </div>
        )
    }
}