import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
