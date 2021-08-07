import { VFC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HeaderLayout } from '../components/templete/HeaderLayout';
import { Login } from '../components/pages/Login';
import { Page404 } from '../components/pages/Page404';
import { HomeBase } from './HomeBase';
import { LoginUserProvider } from '../providers/LoginUserProvider';

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
        <Route exact path="/">
          <Login />
        </Route>

        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {HomeBase.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <HeaderLayout> {route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>

      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
