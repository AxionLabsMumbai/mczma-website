import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollToTop />
      <NavBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  ),
});
