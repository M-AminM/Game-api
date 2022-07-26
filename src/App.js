import Home from "./pages/Home";
import { Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      <Route>
      <Home path={["/game/:id", "/"]}/>
      </Route>
    </div>
  );
}

export default App;
