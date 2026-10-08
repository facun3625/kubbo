import { useEffect } from "react";

const Tienda = () => {
  useEffect(() => {
    window.location.replace("/tienda-manual.html");
  }, []);

  return null;
};

export default Tienda;
