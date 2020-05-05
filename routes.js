import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from '../src/pages/Home/home'
import Works from '../src/pages/Works/works'
import AboutMe from '../src/pages/About me/about_me'
import CV from '../src/pages/CV/cv'

const Routes = () =>  {

  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/works' component={Works}/>
        <Route path='/cv' component={CV}/>
        <Route path='/about_me' component={AboutMe} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default Routes
