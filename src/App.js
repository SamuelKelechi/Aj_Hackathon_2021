import Report from "./component/Report"
import ReportInput from "./component/ReportInput"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./component/Header/Header"

function App() {
  return (
    <>

      <Router>

        <Switch>
          <Route exact path="/" component={Report} />
          <Route exact path="/ReportInput" component={ReportInput} />

        </Switch>
      </Router>

    </>
  );
}

export default App;
