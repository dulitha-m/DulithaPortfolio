import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LogOut, LayoutDashboard } from "lucide-react";

export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (url, name) => {
    setActiveTab(name);
    if (url.startsWith('#')) {
      const sectionId = url.substring(1);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(url);
    }
  };

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 250;

      const sections = items
        .map((item) => {
          if (item.url.startsWith('#')) {
            const el = document.getElementById(item.url.substring(1));
            if (el) return { name: item.name, element: el };
          }
          return null;
        })
        .filter(Boolean);

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        if (sections.length > 0) {
          setActiveTab(sections[sections.length - 1].name);
          return;
        }
      }

      for (let i = 0; i < sections.length; i++) {
        const { name, element } = sections[i];
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveTab(name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [items, location.pathname]);

  return (
    <div className={`tubelight-nav-container ${className || ""}`}>
      <div className="tubelight-nav-bar">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.url, item.name)}
              className={`tubelight-nav-link ${isActive ? "active" : ""}`}
              style={{ background: 'none', border: 'none' }}
            >
              <span className="desktop-text" style={{ display: 'none' }}>
                <style>{`
                  @media (min-width: 768px) {
                    .desktop-text { display: inline !important; }
                    .mobile-icon { display: none !important; }
                  }
                `}</style>
                {item.name}
              </span>
              <span className="mobile-icon">
                <Icon size={18} strokeWidth={2.2} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="tubelight-lamp-container"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="tubelight-lamp-line">
                    <div className="tubelight-lamp-glow-1" />
                    <div className="tubelight-lamp-glow-2" />
                  </div>
                </motion.div>
              )}
            </button>
          );
        })}

        {/* Dynamic Admin Actions (only visible when logged in) */}
        {token && (
          <>
            <Link
              to="/admin"
              className="tubelight-nav-link"
              title="Dashboard"
            >
              <LayoutDashboard size={18} strokeWidth={2.2} />
            </Link>
            <button
              onClick={logout}
              className="tubelight-nav-link"
              style={{ background: 'none', border: 'none' }}
              title="Logout"
            >
              <LogOut size={18} strokeWidth={2.2} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
