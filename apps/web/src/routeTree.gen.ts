/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthImport } from './routes/_auth'
import { Route as IndexImport } from './routes/index'
import { Route as AuthSignupImport } from './routes/_auth/signup'
import { Route as AuthResetpasswordImport } from './routes/_auth/reset_password'
import { Route as AuthLoginImport } from './routes/_auth/login'
import { Route as AuthForgotpasswordImport } from './routes/_auth/forgot_password'

// Create/Update Routes

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => AuthRoute,
} as any)

const AuthResetpasswordRoute = AuthResetpasswordImport.update({
  id: '/reset_password',
  path: '/reset_password',
  getParentRoute: () => AuthRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRoute,
} as any)

const AuthForgotpasswordRoute = AuthForgotpasswordImport.update({
  id: '/forgot_password',
  path: '/forgot_password',
  getParentRoute: () => AuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_auth/forgot_password': {
      id: '/_auth/forgot_password'
      path: '/forgot_password'
      fullPath: '/forgot_password'
      preLoaderRoute: typeof AuthForgotpasswordImport
      parentRoute: typeof AuthImport
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthImport
    }
    '/_auth/reset_password': {
      id: '/_auth/reset_password'
      path: '/reset_password'
      fullPath: '/reset_password'
      preLoaderRoute: typeof AuthResetpasswordImport
      parentRoute: typeof AuthImport
    }
    '/_auth/signup': {
      id: '/_auth/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthForgotpasswordRoute: typeof AuthForgotpasswordRoute
  AuthLoginRoute: typeof AuthLoginRoute
  AuthResetpasswordRoute: typeof AuthResetpasswordRoute
  AuthSignupRoute: typeof AuthSignupRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthForgotpasswordRoute: AuthForgotpasswordRoute,
  AuthLoginRoute: AuthLoginRoute,
  AuthResetpasswordRoute: AuthResetpasswordRoute,
  AuthSignupRoute: AuthSignupRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/forgot_password': typeof AuthForgotpasswordRoute
  '/login': typeof AuthLoginRoute
  '/reset_password': typeof AuthResetpasswordRoute
  '/signup': typeof AuthSignupRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/forgot_password': typeof AuthForgotpasswordRoute
  '/login': typeof AuthLoginRoute
  '/reset_password': typeof AuthResetpasswordRoute
  '/signup': typeof AuthSignupRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_auth': typeof AuthRouteWithChildren
  '/_auth/forgot_password': typeof AuthForgotpasswordRoute
  '/_auth/login': typeof AuthLoginRoute
  '/_auth/reset_password': typeof AuthResetpasswordRoute
  '/_auth/signup': typeof AuthSignupRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/forgot_password'
    | '/login'
    | '/reset_password'
    | '/signup'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/forgot_password' | '/login' | '/reset_password' | '/signup'
  id:
    | '__root__'
    | '/'
    | '/_auth'
    | '/_auth/forgot_password'
    | '/_auth/login'
    | '/_auth/reset_password'
    | '/_auth/signup'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/forgot_password",
        "/_auth/login",
        "/_auth/reset_password",
        "/_auth/signup"
      ]
    },
    "/_auth/forgot_password": {
      "filePath": "_auth/forgot_password.tsx",
      "parent": "/_auth"
    },
    "/_auth/login": {
      "filePath": "_auth/login.tsx",
      "parent": "/_auth"
    },
    "/_auth/reset_password": {
      "filePath": "_auth/reset_password.tsx",
      "parent": "/_auth"
    },
    "/_auth/signup": {
      "filePath": "_auth/signup.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
