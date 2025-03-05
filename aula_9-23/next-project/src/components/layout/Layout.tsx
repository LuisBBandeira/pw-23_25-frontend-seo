"use client";

import React from "react"
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (<div>
        <NavBar />
        {children}
        <Footer />
    </div>)
}

export default Layout