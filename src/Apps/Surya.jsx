import React from "react";
import Myheader from "./Myheader";
import Sidebar from "./Sidebar";
import '../App.css'

function Surya() {
    return (
        <div>
            <div className="heds">
                <Myheader />
            </div>
            <div className="parent">
                <div className="siding">
                    <Sidebar/>
                </div>
                <div className="Content">
                     <h1 style={{textAlign:'center'}}>Welcome to Surya</h1>
                </div>
            </div>
        </div>
    )
}
export default Surya;