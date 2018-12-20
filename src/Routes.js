import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import styled from "styled-components";

import Header from "./layouts/header";

import Home from "./containers/Home";
import Projects from "./containers/Projects";
import Project from "./containers/Project/ProjectData";

const client = new ApolloClient({
  uri: "http://localhost:5555"
});

const Main = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 70px;
  padding-right: 10px;
  padding-left: 10px;
`;

const FourOhFour = () => <h1>404</h1>;

const Routes = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/project/:id" component={Project} />
          <Redirect from="/home" to="/" />
          <Route component={FourOhFour} />
        </Switch>
      </Main>
    </ApolloProvider>
  </BrowserRouter>
);

export default Routes;
