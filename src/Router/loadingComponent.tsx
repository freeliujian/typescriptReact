import * as React from 'react'
import { Spin } from 'antd'

import './loadingComponents.scss'

const loadingComponent:React.SFC = () => (
    <div className="spin">
        <Spin size="large" />
    </div>
)

export default loadingComponent;