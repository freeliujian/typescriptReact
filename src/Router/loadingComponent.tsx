import { Spin } from 'antd'
import * as React from 'react'


const loadingComponent = () => (
    <div className="spin">
        <Spin size="large" />
    </div>
)

export default loadingComponent;