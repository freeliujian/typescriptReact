import * as React from "react"
import {connect} from 'react-redux'
import {ISLOGIN} from '../constants/Login'
import {LoginSatteType} from '../reducers/Login'

interface Prop {
    index:Number
}

interface Logintypes {
    Login:LoginSatteType
}

class Login extends React.Component<Prop> {
    constructor(props:Prop){
        super(props)
    }

    render(){
        console.log(this.props)
        return (
            <div>
                1111
            </div>
        )
    }
}

const mapStateToProps = (state: Logintypes): object => {
    return { Login: state.Login }
}

export const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchArticle: (Id: string) => dispatch({ type: ISLOGIN, Id })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)