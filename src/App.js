import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Playfind from "./container/Playfind/Playfind"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Playfind></Playfind>
        </Layout>
        </div>
    );
  }
}

export default App;
