import React, { useEffect } from 'react';
import { Layout } from 'antd';
import './App.css';
import Schedule from './components/schedule';
import Resources from './components/resources';
import { Switch, Route, useLocation } from "react-router-dom";

import  { useGA4React } from "ga-4-react";

const { Footer } = Layout;
 
function App() {
  const ga = useGA4React();
  const location = useLocation();
  
  useEffect(()=> {
    if(ga){
      ga.pageview(location.pathname)
    }
  }, [location, ga])

  return (
    <>
      <Layout className="layout">
        <Switch>
          <Route exact path="/">
            <Schedule />
          </Route>
          <Route path="/Resources">
            <Resources />
          </Route>
        </Switch>
        <Footer>
          <div style={{textAlign:'center'}}>
            50th+1 Anniversary Party - July 2-7th, 2021
          </div>
        </Footer>
      </Layout>
    </>
  );
}

export default App;