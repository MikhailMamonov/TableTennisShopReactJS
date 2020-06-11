import React from "react";
import "./App"
import { BrowserRouter} from "react-router-dom";
import Root from './components/Root/Root'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});


const App = (props) => {
  return (
    // <div className="app-wrapper">
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Root/>
      </BrowserRouter>
      </ApolloProvider>
  );
};

export default App;
