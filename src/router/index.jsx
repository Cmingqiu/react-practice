import { lazy } from 'react';
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
const CompUseContext = lazy(() => import('@/usage-hooks/useContext'));
const CompValtio = lazy(() => import('@/views/valtio-demo'));
const CompRedux = lazy(() => import('@/views/redux-demo'));
const CompUseState = lazy(() => import('@/usage-hooks/useState'));
const CompSyncCallback = lazy(() => import('@/views/useSyncCallback'));
const ClassComponent = lazy(() => import('@/views/classComponent'));
const CompTailwind = lazy(() => import('@/views/tailwind'));

export const routes = [
  {
    path: '/',
    element: <Navigate to='/home' /> //根目录自动渲染home页面
  },
  { path: '/home', name: '首页', element: <Home /> },
  { path: '/useState', name: 'useState', element: <CompUseState /> },
  {
    path: '/useRef',
    name: 'useRef',
    element: <CompUseRef /> /* 必须以组件形式调用？？？ {CompUseRef} */
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
    element: <CompUseReducer />
  },
  {
    path: '/useContext',
    name: 'useContext',
    element: <CompUseContext />
  },
  {
    path: '/valtio-demo',
    name: 'valtio-demo',
    element: <CompValtio />
  },
  {
    path: '/redux-demo',
    name: 'redux-demo',
    element: <CompRedux />
  },
  {
    path: '/synCallback',
    name: 'synCallback',
    element: <CompSyncCallback />
  },
  {
    path: '/classComponent',
    name: 'classComponent',
    element: <ClassComponent />
  },
  {
    path: '/tailwind',
    name: 'tailwind',
    element: <CompTailwind />
  },
  { path: '*', element: <ErrorPage /> }
];
