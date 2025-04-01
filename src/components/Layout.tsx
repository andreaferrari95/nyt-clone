import Navbar from "./Navbar";
import Logo from "./Logo";
import Footer from "./Footer";
import { ReactNode } from "react";
import ScrollToTop from "./ScrollToTop";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-100 text-gray-900">
      {/* Logo */}
      <div className="py-6 border-b border-gray-200 px-4 sm:px-6 lg:px-8">
        <Logo />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-xl border-b border-zinc-200 px-4 sm:px-6 lg:px-8">
        <Navbar />
      </header>

      {/* Main content */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-6">{children}</main>

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
