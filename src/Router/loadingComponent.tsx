import * as React from 'react'
import { Spin } from 'antd'

import './loadingComponents.scss'

const loadingComponent = () => (
    <div className="spin">
        <Spin size="large" />
    </div>
)

export default loadingComponent;