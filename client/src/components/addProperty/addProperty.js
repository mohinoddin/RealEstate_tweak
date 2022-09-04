import Header from "../headerpage/Header";
import SideNavBar from "../sidenavbar/SideNavBar";
import Form from "./form";

const AddProperty = () => {
    return (
        <>
        <div  className="maincontainer">
       <div  className="sidenav">
        <SideNavBar />
       </div>

       <div  className="subpart">
       <div className="headerpart">
       <Header />
       </div>

       
       
       
       <div className="propertylstpart"> <Form /></div>
       
       </div>

       </div>
        </>
    )
}

export default AddProperty;