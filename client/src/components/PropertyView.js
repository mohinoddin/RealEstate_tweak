import "./PropertyView.css"
// import PropertyList from "./propertylist/PropertyList";
import SideNavBar from "./sidenavbar/SideNavBar";
import Header from "./headerpage/Header";
import React, { useState, useEffect } from 'react';
import SearchRes from './SerachRes';
const PropertyView = ()=>{

    const [property, setProperty] = useState([]);
    const authToken = localStorage.getItem("authorization");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://realestate-backends.herokuapp.com/getProperty/",{
        headers: {
            authorization: authToken
        }}); 
      // console.log(response)
      const data = await response.json(); 
      setProperty(data);
      // console.log(data);
    }
    fetchData()
  }, [authToken])
   
  //console.log(property)

    return(
        <>
       <div  className="maincontainer">
       <div  className="sidenav">
        <SideNavBar />
       </div>

       <div  className="subpart">
       <div className="headerpart">
       <Header />
       </div>

       <div className="searchpart"><SearchRes property={property} /></div> 
      
       </div>

       </div>
        </>
    )
}
export default PropertyView