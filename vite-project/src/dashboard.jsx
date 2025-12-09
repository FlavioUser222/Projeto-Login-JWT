import React, { useEffect, useState } from "react";
import axios from 'axios'
import TabLateral from './components/tabDashboard'
import HeaderDashboard from "./components/headerDashboard";


export default function Dashboard() {
    
    return (<>
        <HeaderDashboard />

        <TabLateral />

        <div className="container-dashboard">
           
        </div>
    </>)
}