// import { Outlet } from "react-router-dom";
// import NavBar from "../NavBar/NavBar";
// import Footer from "../Footer/Footer";

// const Root = () => {
//     return (
//         <div>
//             <NavBar></NavBar>
//             <Outlet></Outlet>
//             <Footer></Footer>
//         </div>
//     );
// };

// export default Root;



import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Root = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/project";

  return (
    <div>
      {!hideHeaderFooter && <NavBar />}
      
      <Outlet /> {/* Child Component Render */}

      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default Root;
