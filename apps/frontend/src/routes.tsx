import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';

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

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
