import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Task1 from "./Components/Task1";
import LoginForm from "./Components/Task2/LoginForm";
import Template from "./Components/Task2Template/Template";
import Layout from "./Layout";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Task1} />
          <Route path="/task2" exact component={LoginForm} />
          <Route path="/template" exact component={Template} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
