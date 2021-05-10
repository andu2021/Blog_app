import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.scss';
import { Footer, Header, HomeBody, LeftSidebar} from './components';

const App = () => {

  const sidebarBody = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                       Integer aliquet, orci in bibendum luctus, 
                       turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.`

  return (
    <Router>
      <div className='container'>  
      <Header></Header>    
        <Switch>
          <Route exact path='/'>
            <div className='container-fluid p-0 d-flex justify-content-between align-content-center flex-wrap-reverse'>
              <LeftSidebar title='What I do!' body={sidebarBody}/>
              <HomeBody />
            </div>
           
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>

  )
}

export default App

