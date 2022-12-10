import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/index";

const MainLoyout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default MainLoyout;
