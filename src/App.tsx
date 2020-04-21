import * as React from "react"
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ConnectRoute from './components/Hoc/connectRoute'
import  LoadingComponent from './Router/loadingComponent'
import Loadable from 'react-loadable';
import 'antd/dist/antd.css';
import Login from './pages/login'

const RouterList:any[]=[
  {
    path:'/',
    component:()=>import('./pages/home'),
    name:'index',
    exact:true,
    
  },
  {
    path:'/login',
    component:()=>import('./pages/login'),
    name:'login',
    exact:false,
  }
]

function App() {
 
  return (
    <div className="App">
      <Router>
          <Switch>
            {RouterList.map((item,index)=>{
              const Component = Loadable({
                  loader:item.component,
                  loading:LoadingComponent
              });
              
              return (
                <Route path={item.path} component={ConnectRoute(Component)} exact={item.exact} key={item.name}></Route>
              )
            })}
            
          </Switch>
      </Router>
     
    </div>
  );
}

export default App;
