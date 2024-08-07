/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UnAuthImport } from './routes/_unAuth'
import { Route as MainImport } from './routes/_main'
import { Route as AuthImport } from './routes/_auth'
import { Route as UnAuthRegisterVerifyImport } from './routes/_unAuth.register/verify'
import { Route as UnAuthRegisterSendImport } from './routes/_unAuth.register/send'

// Create Virtual Routes

const MainIndexLazyImport = createFileRoute('/_main/')()
const UnAuthLoginLazyImport = createFileRoute('/_unAuth/login')()
const MainSupportLazyImport = createFileRoute('/_main/support')()
const MainSubscriptionLazyImport = createFileRoute('/_main/subscription')()
const UnAuthRegisterIndexLazyImport = createFileRoute('/_unAuth/register/')()
const UnAuthForgetPasswordIndexLazyImport = createFileRoute(
  '/_unAuth/forget-password/',
)()
const MainShowsIndexLazyImport = createFileRoute('/_main/shows/')()
const MainMoviesIndexLazyImport = createFileRoute('/_main/movies/')()
const AuthDashboardIndexLazyImport = createFileRoute('/_auth/dashboard/')()
const UnAuthForgetPasswordVerifyLazyImport = createFileRoute(
  '/_unAuth/forget-password/verify',
)()
const MainShowsShowIdLazyImport = createFileRoute('/_main/shows/$showId')()
const MainMoviesMovieIdLazyImport = createFileRoute('/_main/movies/$movieId')()
const AuthDashboardWalletLazyImport = createFileRoute(
  '/_auth/dashboard/wallet',
)()
const AuthDashboardTicketsLazyImport = createFileRoute(
  '/_auth/dashboard/tickets',
)()
const AuthDashboardSubscriptionLazyImport = createFileRoute(
  '/_auth/dashboard/subscription',
)()
const AuthDashboardPaymentsLazyImport = createFileRoute(
  '/_auth/dashboard/payments',
)()
const AuthDashboardEditInfoLazyImport = createFileRoute(
  '/_auth/dashboard/editInfo',
)()
const AuthDashboardCommentsLazyImport = createFileRoute(
  '/_auth/dashboard/comments',
)()

// Create/Update Routes

const UnAuthRoute = UnAuthImport.update({
  id: '/_unAuth',
  getParentRoute: () => rootRoute,
} as any)

const MainRoute = MainImport.update({
  id: '/_main',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const MainIndexLazyRoute = MainIndexLazyImport.update({
  path: '/',
  getParentRoute: () => MainRoute,
} as any).lazy(() => import('./routes/_main.index.lazy').then((d) => d.Route))

const UnAuthLoginLazyRoute = UnAuthLoginLazyImport.update({
  path: '/login',
  getParentRoute: () => UnAuthRoute,
} as any).lazy(() => import('./routes/_unAuth.login.lazy').then((d) => d.Route))

const MainSupportLazyRoute = MainSupportLazyImport.update({
  path: '/support',
  getParentRoute: () => MainRoute,
} as any).lazy(() => import('./routes/_main.support.lazy').then((d) => d.Route))

const MainSubscriptionLazyRoute = MainSubscriptionLazyImport.update({
  path: '/subscription',
  getParentRoute: () => MainRoute,
} as any).lazy(() =>
  import('./routes/_main.subscription.lazy').then((d) => d.Route),
)

const UnAuthRegisterIndexLazyRoute = UnAuthRegisterIndexLazyImport.update({
  path: '/register/',
  getParentRoute: () => UnAuthRoute,
} as any).lazy(() =>
  import('./routes/_unAuth.register/index.lazy').then((d) => d.Route),
)

const UnAuthForgetPasswordIndexLazyRoute =
  UnAuthForgetPasswordIndexLazyImport.update({
    path: '/forget-password/',
    getParentRoute: () => UnAuthRoute,
  } as any).lazy(() =>
    import('./routes/_unAuth.forget-password/index.lazy').then((d) => d.Route),
  )

const MainShowsIndexLazyRoute = MainShowsIndexLazyImport.update({
  path: '/shows/',
  getParentRoute: () => MainRoute,
} as any).lazy(() =>
  import('./routes/_main.shows/index.lazy').then((d) => d.Route),
)

const MainMoviesIndexLazyRoute = MainMoviesIndexLazyImport.update({
  path: '/movies/',
  getParentRoute: () => MainRoute,
} as any).lazy(() =>
  import('./routes/_main.movies/index.lazy').then((d) => d.Route),
)

const AuthDashboardIndexLazyRoute = AuthDashboardIndexLazyImport.update({
  path: '/dashboard/',
  getParentRoute: () => AuthRoute,
} as any).lazy(() =>
  import('./routes/_auth.dashboard/index.lazy').then((d) => d.Route),
)

const UnAuthForgetPasswordVerifyLazyRoute =
  UnAuthForgetPasswordVerifyLazyImport.update({
    path: '/forget-password/verify',
    getParentRoute: () => UnAuthRoute,
  } as any).lazy(() =>
    import('./routes/_unAuth.forget-password/verify.lazy').then((d) => d.Route),
  )

const MainShowsShowIdLazyRoute = MainShowsShowIdLazyImport.update({
  path: '/shows/$showId',
  getParentRoute: () => MainRoute,
} as any).lazy(() =>
  import('./routes/_main.shows/$showId.lazy').then((d) => d.Route),
)

const MainMoviesMovieIdLazyRoute = MainMoviesMovieIdLazyImport.update({
  path: '/movies/$movieId',
  getParentRoute: () => MainRoute,
} as any).lazy(() =>
  import('./routes/_main.movies/$movieId.lazy').then((d) => d.Route),
)

const AuthDashboardWalletLazyRoute = AuthDashboardWalletLazyImport.update({
  path: '/dashboard/wallet',
  getParentRoute: () => AuthRoute,
} as any).lazy(() =>
  import('./routes/_auth.dashboard/wallet.lazy').then((d) => d.Route),
)

const AuthDashboardTicketsLazyRoute = AuthDashboardTicketsLazyImport.update({
  path: '/dashboard/tickets',
  getParentRoute: () => AuthRoute,
} as any).lazy(() =>
  import('./routes/_auth.dashboard/tickets.lazy').then((d) => d.Route),
)

const AuthDashboardSubscriptionLazyRoute =
  AuthDashboardSubscriptionLazyImport.update({
    path: '/dashboard/subscription',
    getParentRoute: () => AuthRoute,
  } as any).lazy(() =>
    import('./routes/_auth.dashboard/subscription.lazy').then((d) => d.Route),
  )

const AuthDashboardPaymentsLazyRoute = AuthDashboardPaymentsLazyImport.update({
  path: '/dashboard/payments',
  getParentRoute: () => AuthRoute,
} as any).lazy(() =>
  import('./routes/_auth.dashboard/payments.lazy').then((d) => d.Route),
)

const AuthDashboardEditInfoLazyRoute = AuthDashboardEditInfoLazyImport.update({
  path: '/dashboard/editInfo',
  getParentRoute: () => AuthRoute,
} as any).lazy(() =>
  import('./routes/_auth.dashboard/editInfo.lazy').then((d) => d.Route),
)

const AuthDashboardCommentsLazyRoute = AuthDashboardCommentsLazyImport.update({
  path: '/dashboard/comments',
  getParentRoute: () => AuthRoute,
} as any).lazy(() =>
  import('./routes/_auth.dashboard/comments.lazy').then((d) => d.Route),
)

const UnAuthRegisterVerifyRoute = UnAuthRegisterVerifyImport.update({
  path: '/register/verify',
  getParentRoute: () => UnAuthRoute,
} as any)

const UnAuthRegisterSendRoute = UnAuthRegisterSendImport.update({
  path: '/register/send',
  getParentRoute: () => UnAuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_main': {
      id: '/_main'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof MainImport
      parentRoute: typeof rootRoute
    }
    '/_unAuth': {
      id: '/_unAuth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof UnAuthImport
      parentRoute: typeof rootRoute
    }
    '/_main/subscription': {
      id: '/_main/subscription'
      path: '/subscription'
      fullPath: '/subscription'
      preLoaderRoute: typeof MainSubscriptionLazyImport
      parentRoute: typeof MainImport
    }
    '/_main/support': {
      id: '/_main/support'
      path: '/support'
      fullPath: '/support'
      preLoaderRoute: typeof MainSupportLazyImport
      parentRoute: typeof MainImport
    }
    '/_unAuth/login': {
      id: '/_unAuth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof UnAuthLoginLazyImport
      parentRoute: typeof UnAuthImport
    }
    '/_main/': {
      id: '/_main/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof MainIndexLazyImport
      parentRoute: typeof MainImport
    }
    '/_unAuth/register/send': {
      id: '/_unAuth/register/send'
      path: '/register/send'
      fullPath: '/register/send'
      preLoaderRoute: typeof UnAuthRegisterSendImport
      parentRoute: typeof UnAuthImport
    }
    '/_unAuth/register/verify': {
      id: '/_unAuth/register/verify'
      path: '/register/verify'
      fullPath: '/register/verify'
      preLoaderRoute: typeof UnAuthRegisterVerifyImport
      parentRoute: typeof UnAuthImport
    }
    '/_auth/dashboard/comments': {
      id: '/_auth/dashboard/comments'
      path: '/dashboard/comments'
      fullPath: '/dashboard/comments'
      preLoaderRoute: typeof AuthDashboardCommentsLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/dashboard/editInfo': {
      id: '/_auth/dashboard/editInfo'
      path: '/dashboard/editInfo'
      fullPath: '/dashboard/editInfo'
      preLoaderRoute: typeof AuthDashboardEditInfoLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/dashboard/payments': {
      id: '/_auth/dashboard/payments'
      path: '/dashboard/payments'
      fullPath: '/dashboard/payments'
      preLoaderRoute: typeof AuthDashboardPaymentsLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/dashboard/subscription': {
      id: '/_auth/dashboard/subscription'
      path: '/dashboard/subscription'
      fullPath: '/dashboard/subscription'
      preLoaderRoute: typeof AuthDashboardSubscriptionLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/dashboard/tickets': {
      id: '/_auth/dashboard/tickets'
      path: '/dashboard/tickets'
      fullPath: '/dashboard/tickets'
      preLoaderRoute: typeof AuthDashboardTicketsLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/dashboard/wallet': {
      id: '/_auth/dashboard/wallet'
      path: '/dashboard/wallet'
      fullPath: '/dashboard/wallet'
      preLoaderRoute: typeof AuthDashboardWalletLazyImport
      parentRoute: typeof AuthImport
    }
    '/_main/movies/$movieId': {
      id: '/_main/movies/$movieId'
      path: '/movies/$movieId'
      fullPath: '/movies/$movieId'
      preLoaderRoute: typeof MainMoviesMovieIdLazyImport
      parentRoute: typeof MainImport
    }
    '/_main/shows/$showId': {
      id: '/_main/shows/$showId'
      path: '/shows/$showId'
      fullPath: '/shows/$showId'
      preLoaderRoute: typeof MainShowsShowIdLazyImport
      parentRoute: typeof MainImport
    }
    '/_unAuth/forget-password/verify': {
      id: '/_unAuth/forget-password/verify'
      path: '/forget-password/verify'
      fullPath: '/forget-password/verify'
      preLoaderRoute: typeof UnAuthForgetPasswordVerifyLazyImport
      parentRoute: typeof UnAuthImport
    }
    '/_auth/dashboard/': {
      id: '/_auth/dashboard/'
      path: '/dashboard/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof AuthDashboardIndexLazyImport
      parentRoute: typeof AuthImport
    }
    '/_main/movies/': {
      id: '/_main/movies/'
      path: '/movies/'
      fullPath: '/movies/'
      preLoaderRoute: typeof MainMoviesIndexLazyImport
      parentRoute: typeof MainImport
    }
    '/_main/shows/': {
      id: '/_main/shows/'
      path: '/shows/'
      fullPath: '/shows/'
      preLoaderRoute: typeof MainShowsIndexLazyImport
      parentRoute: typeof MainImport
    }
    '/_unAuth/forget-password/': {
      id: '/_unAuth/forget-password/'
      path: '/forget-password/'
      fullPath: '/forget-password/'
      preLoaderRoute: typeof UnAuthForgetPasswordIndexLazyImport
      parentRoute: typeof UnAuthImport
    }
    '/_unAuth/register/': {
      id: '/_unAuth/register/'
      path: '/register/'
      fullPath: '/register/'
      preLoaderRoute: typeof UnAuthRegisterIndexLazyImport
      parentRoute: typeof UnAuthImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  AuthRoute: AuthRoute.addChildren({
    AuthDashboardCommentsLazyRoute,
    AuthDashboardEditInfoLazyRoute,
    AuthDashboardPaymentsLazyRoute,
    AuthDashboardSubscriptionLazyRoute,
    AuthDashboardTicketsLazyRoute,
    AuthDashboardWalletLazyRoute,
    AuthDashboardIndexLazyRoute,
  }),
  MainRoute: MainRoute.addChildren({
    MainSubscriptionLazyRoute,
    MainSupportLazyRoute,
    MainIndexLazyRoute,
    MainMoviesMovieIdLazyRoute,
    MainShowsShowIdLazyRoute,
    MainMoviesIndexLazyRoute,
    MainShowsIndexLazyRoute,
  }),
  UnAuthRoute: UnAuthRoute.addChildren({
    UnAuthLoginLazyRoute,
    UnAuthRegisterSendRoute,
    UnAuthRegisterVerifyRoute,
    UnAuthForgetPasswordVerifyLazyRoute,
    UnAuthForgetPasswordIndexLazyRoute,
    UnAuthRegisterIndexLazyRoute,
  }),
})

/* prettier-ignore-end */
