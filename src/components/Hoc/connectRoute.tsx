import * as React from "react"


interface WrappedComponentType{
    WrappedComponent:React.ElementType,
    
}

interface Props { 
    location:string
}

export default function connectRoute(WrappedComponent:any) {
   
    return class extends React.Component<Props> {
        shouldComponentUpdate(nextProps:Props) {
            
            return nextProps.location !== this.props.location;
        }

        render() {
          
            return <WrappedComponent {...this.props} />;
        }
    };
}

