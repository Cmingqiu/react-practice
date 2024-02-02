import { Fragment, Suspense } from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
import { routes } from '@/router';

function App() {
  const GetRoutes = useRoutes(routes); // hook最好在顶层调用
  return (
    <>
      <nav>
        {routes.map((route, index) => (
          <Fragment key={index}>
            {route.name && (
              <NavLink
                to={route.path}
                className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                {route.name} | &nbsp;&nbsp;
              </NavLink>
            )}
          </Fragment>
        ))}
      </nav>
      <br />
      <hr />
      <br />
      <Suspense fallback='Loading...'> {GetRoutes}</Suspense>
    </>
  );
}

export default App;
