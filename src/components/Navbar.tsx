import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { sections } from "../constants/sections";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50  border-zinc-200 ">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="md:hidden font-semibold text-green-600">Menu</span>

        <div className="hidden md:flex gap-4">
          {sections.map(({ label, value }) => (
            <NavLink
              key={value}
              to={`/${value === "home" ? "" : value}`}
              className={({ isActive }) =>
                `px-2 py-2 text-sm font-medium rounded hover:bg-green-100 ${
                  isActive ? "text-green-600" : "text-gray-800"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/*Search (DSKTP) + Hamburger (MBL) */}
        <div className="flex items-center gap-4">
          <form onSubmit={handleSubmit} className="hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-3 py-1 rounded-md text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </form>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-green-600"
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="relative w-5 h-4 flex flex-col justify-between items-center cursor-pointer"
              >
                <motion.span
                  variants={{
                    open: { rotate: 45, y: 6 },
                    closed: { rotate: 0, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-[2px] bg-green-600 block"
                />
                <motion.span
                  variants={{
                    open: { opacity: 0 },
                    closed: { opacity: 1 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-[2px] bg-green-600 block"
                />
                <motion.span
                  variants={{
                    open: { rotate: -45, y: -8 },
                    closed: { rotate: 0, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-[2px] bg-green-600 block"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden flex flex-col gap-4 px-4 pb-4"
          >
            {sections.map(({ label, value }) => (
              <NavLink
                key={value}
                to={`/${value === "home" ? "" : value}`}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium py-2 border-b border-gray-200 text-gray-800 hover:text-green-600"
              >
                {label}
              </NavLink>
            ))}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-3 py-2 rounded-md text-sm border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
