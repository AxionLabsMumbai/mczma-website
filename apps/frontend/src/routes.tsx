import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import NotificationsCirculars from './pages/NotificationsCirculars';

const RootComponent = () => (
  <>
    <NavBar />
    <main className="min-h-screen">
      <Outlet />
    </main>
    <Footer />
  </>
);

const rootRoute = createRootRoute({
  component: RootComponent,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const notificationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/notifications',
  component: NotificationsCirculars,
});

const routeTree = rootRoute.addChildren([indexRoute, notificationsRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
