import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {observer} from 'mobx-react'
import './App.scss';
import { Footer, Header, HomeBody, LeftSidebar, PostPage} from './components';

const App = observer(() => {

  const sidebarBody = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                       Integer aliquet, orci in bibendum luctus, 
                       turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.`

  return (
    <Router>
      <div className='container'>  
      <Header></Header>      
        <div className='container-fluid p-0 d-flex justify-content-between align-content-center flex-wrap-reverse'>
          <LeftSidebar title='What I do!' body={sidebarBody}/>
          <Switch>
            <Route exact path='/'>
              <HomeBody />
            </Route>
            <Route exact path='/blog/'>
              <HomeBody />
            </Route>
            <Route exact path='/blog/:id'>
                <PostPage></PostPage>
            </Route>
            <Route exact path='/search/:search'>
                <HomeBody />
            </Route>
            <Route exact path='/tag/:tag'>
                <HomeBody />
            </Route>
            <Route exact path='/contact-us'>
                <h1>Contact us </h1>
            </Route>
          </Switch>   
        </div>
      </div>
      <Footer></Footer>
    </Router>
  )
})


export default App

