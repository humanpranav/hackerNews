import "./App.css";
import Nav from "./components/Nav";
import Search from "./components/Search";
import History from "./components/History";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import { createContext, useState } from "react";

export const HistoryContext = createContext();

function App() {
  const [history, sethistory] = useState([]);
  return (
    <HistoryContext.Provider value={{ history, sethistory }}>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/history" exact component={History} />
            <Route path="/search" exact component={Search} />
          </Switch>
        </div>
      </Router>
    </HistoryContext.Provider>
  );
}
export default App;
