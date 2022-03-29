import React from "react";
import Banner from "../../components/user/Banner";
import Course from "../../components/user/Course";
import MainLayout from "../../MainLayout";

const Home = () => {
  return (
    <div className="bg-light">
      <MainLayout>
        <Banner />
        <Course />
      </MainLayout>
    </div>
  );
};

export default Home;
