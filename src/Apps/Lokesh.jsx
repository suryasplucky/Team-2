import React from "react";
import Myheader from "./Myheader";
import Sidebar from "./Sidebar";


function Lokesh(){

     return(
        <div className="lok">
              <div className="heds">
                  <Myheader/>
              </div>
              <div className="parent">
                  <div className="siding">
                       <Sidebar/>
                  </div>
                  <div className="Content">
                  <h1 style={{textAlign:'center'}}>Welcome to Lokesh</h1>
                  </div>
              </div>
        </div>
     )
}

export default Lokesh;