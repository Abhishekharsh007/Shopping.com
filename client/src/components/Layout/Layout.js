import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { Toaster } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
  return (
    <div>
        <Helmet>
          <meta charset="utf-8" />
          <meta name="description" content={props.description} />
          <meta name="keywords" content={props.keywords} />
          <meta name="author" content={props.author} />
          <title>{props.title}</title>
        </Helmet>
        <Header/>
        <main style={{minHeight: "79vh"}}>
            <Toaster/>
            {props.children}
        </main>
        <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title: "Shopping.com",
  description: "mern stack project",
  keywords: "mern, mongodb, react, express, node",
  author: "Abhishek Harsh",
};

export default Layout;