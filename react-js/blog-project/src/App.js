import { Route, Routes } from "react-router-dom";
import Login from "./components/author/Login";
import Home from "./components/customer/Home";
import Contact from "./components/customer/Contact";
import About from "./components/customer/About";
import Header from "./components/Header";
import PageNotFound from "./components/Page-Not-Found";
import CreateBlog from "./components/author/CreateBlog";
import { useState } from "react";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/write-blog" element={<CreateBlog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
