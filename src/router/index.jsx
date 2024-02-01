import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Home from '@/views/home';
// import CompUseRef from '@/usage-hooks/useRef';
import CompUseImpera from '@/usage-hooks/useImperativeHandle';
import CompUseMemo from '@/usage-hooks/useMemo';
import CompUseEffect from '@/usage-hooks/useEffect';
import CompUseCallback from '@/usage-hooks/useCallback';
import ErrorPage from '@/views/404';

const CompUseRef = lazy(() => import('@/usage-hooks/useRef'));
const CompUseReducer = lazy(() => import('@/usage-hooks/useReducer'));

export const routes = [
  {
    path: '/',
    element: <Navigate to='/home' /> //根目录自动渲染home页面
  },
  { path: '/home', name: '首页', element: <Home /> },
  {
    path: '/useRef',
    name: 'useRef',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <CompUseRef /> {/* 必须以组件形式调用？？？ {CompUseRef} */}
      </Suspense>
    )
  },
  {
    path: '/useImpera',
    name: 'useImperativeHandle',
    element: <CompUseImpera />
  },
  { path: '/useMemo', name: 'useMemo', element: <CompUseMemo /> },
  { path: '/useEffect', name: 'useEffect', element: <CompUseEffect /> },
  { path: '/useCallback', name: 'useCallback', element: <CompUseCallback /> },
  {
    path: '/useReducer',
    name: 'useReducer',
    element: (
      <Suspense>
        <CompUseReducer />
      </Suspense>
    )
  },
  { path: '*', element: <ErrorPage /> }
];
