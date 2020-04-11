import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


import './App.css'
import ToDoList from './components/todolist/ToDoList'
import Hooks from './components/reacthooks/Hooks'
import ShoppingCart from './components/shopping-cart/ShoppingCart'

function App() {
  const images = require.context('./images', true)

  const menus = [
    { exact: true, activeClassName: 'active huhu',  to: '/', name: 'Shopping Cart'},
    { exact: false, activeClassName: 'active hehe',  to: '/hooks', name: 'Hooks'},
    { exact: false, activeClassName: 'active haha',  to: '/todo-list', name: 'Todo List'}
  ]
  console.log('menus ta', menus)

  function showMenu (array) {
    let xhtml = null
    console.log('Menus', array)
    xhtml = array.map((menu, index) => (
    <NavLink key={index} exact={menu.exact} type="button" className="btn btn-secondary" activeClassName={menu.activeClassName} to={menu.to}>{menu.name}</NavLink>
    ));
    return xhtml
  }
  return (
    <Router>
    <div className="App">
        <header className="App-header">
          <img src={images('./logo.svg')} className="App-logo" alt="logo" style={{width: 100}} />
        </header>
        <div className="btn-group" role="group" aria-label="Basic example">
          {showMenu(menus)}
        </div>
        <div style={{marginTop: 20}}>
          <Switch>
            <Route exact path="/"><ShoppingCart /></Route>
            <Route path="/hooks" component={Hooks}></Route>
            <Route path="/todo-list"><ToDoList /></Route>
            {/* route not found phai dat cuoi cung */}
            <Route><h1>Page not found</h1></Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App