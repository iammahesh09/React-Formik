import { BrowserRouter } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import MainRouting from "./MainRouting";

function App () {
  return (
    <div className="App">

      <BrowserRouter>
        <Navigation />
        <div className="container">
          <MainRouting />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
