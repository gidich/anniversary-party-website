import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Schedule from './components/schedule';
import Resources from './components/resources';
import { Switch, Route } from "react-router-dom";

const { Footer } = Layout;

function App() {
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
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;