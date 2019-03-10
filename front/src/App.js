// src/App.js
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Ranking from "./containers/Ranking";
import Nav from "./containers/Nav"; // 追加
import Reboot from "material-ui/Reboot";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

//import "../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
//import "../node_modules/react-bootstrap-table/dist/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ paddingLeft: 240 }}>
        {/* 差し替え */}
        <Reboot />
        <AppBar style={{ left: 240 }}>
          <Toolbar>
            <Typography type="title" color="inherit">
              Yahoo!ショッピングランキング
            </Typography>
          </Toolbar>
        </AppBar>
        <Nav />

        <div style={{ marginTop: 64, padding: 30 }}>
          <Switch>
            <Route path="/all" component={Ranking} />
            <Route path="/category/1" render={() => <Redirect to="/all" />} />
            <Route
              path="/category/:id"
              render={({ match }) => <Ranking categoryId={match.params.id} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
