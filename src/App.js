import Home from "./pages/Home";
import { Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import { useDispatch } from "react-redux";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route>
        <Home path={["/game/:id", "/"]} />
      </Route>
    </div>
  );
}

export default App;
