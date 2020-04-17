import * as React from "react"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import  loadingComponent from './Router/loadingComponent'
import Loadable from 'react-loadable';


const RouterList:any[]=[
  {
    path:'/',
    component:()=>import('./pages/home'),
    name:'index'
  },
  {
    path:'/login',
    component:()=>import('./pages/login'),
    name:'login'
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
                  loading:loadingComponent
              });
              
              return (
                <Route path={item.path} component={Component} exact key={item.name}></Route>
              )
            })}
            
          </Switch>
      </Router>
    </div>
  );
}

export default App;
