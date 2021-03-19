import Login from './Login';
import SignUp from './SignUp';
import Chat from './Chat';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const UI = () => {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
                <Redirect to="/join" />
            </Route>
            <Route path="/join">
                <Login />
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>
            <Route path="/chat">
                <Chat />
            </Route>
          </Switch>
      </Router>
    )
}

export default UI;