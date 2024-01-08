import React from 'react';
import './App.scss';
import {Layout} from 'antd';
import Router from './Router';
import CustomHeader from './features/header/Header';

const { Header, Content } = Layout

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <CustomHeader />
        </Header>
        <Content>
          <Router />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
