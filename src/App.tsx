import React, { useState } from "react";
import "./App.css";
import { MainBlock } from "./components/MainBlock/MainBlock";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "./redux/slices/auth";
import { CookiesProvider } from "react-cookie";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    console.log(window.localStorage.getItem("session_id"));
    dispatch<any>(fetchAuth());
  }, []);

  return (
    <CookiesProvider>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<MainBlock />} />

        {/* protected routes */}
      </Routes>
    </CookiesProvider>
  );
}

export default App;
