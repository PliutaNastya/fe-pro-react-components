import React from 'react';
import {Header} from "./components/Header";
import {Content} from "./components/Content";
import {Footer} from "./components/Footer";

const Application = () => {
  return <div className="wrapper">
    <Header logoName='My logo' />
    <Content title='Posts' />
    <Footer logoName='Logo' text='Small static blog @ 2022' />
  </div>;
};

export default Application;
