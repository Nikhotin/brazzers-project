import MainLayout from "./views/layouts/main/MainLayout";
import {Route, Switch, withRouter} from "react-router";
import signIn from './views/pages/signIn/signIn';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/sign-in" component={signIn} />
      </Switch>
    </MainLayout>
  );
}

export default withRouter(App);
