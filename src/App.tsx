import React, { useState } from "react";
import "./App.css";
import { MainBlock } from "./components/MainBlock/MainBlock";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "./redux/slices/auth";
import { CookiesProvider } from "react-cookie";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch<any>(fetchAuth());
  }, []);

  return (
      <Routes>
        <Route path="/" element={<MainBlock />} />
      </Routes>
  );
}

export default App;
