import React from "react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
