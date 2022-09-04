import "./propertylist/PropertyList.css"
import PropertyList from "./propertylist/PropertyList";
import { BsSearch ,BsPlus} from "react-icons/bs";
import AddProperty from "./addProperty/addProperty";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const SearchRes = ({property})=>{
  // const navigate = useNavigate()
  const [addinput, setAddInput] = useState();
  const [submitted,setSubmitted]=useState(false)
  const isEnabled = (addinput !== undefined)
  const issubmitted= isEnabled && submitted
  const handleInputChange = (e) => {
    setAddInput(e.target.value )
       //console.log(e.target.value)
}

 // console.log({property})
  const [updatedproperty, setProperty] = useState([...property]);

  const handleDown=()=>{
    setSubmitted(false)
  }
   
 // console.log(updatedproperty)

  const handleSearch = () => {
    // likecount=likecount+1
    // setLikeCount(likecount)
    fetch(`https://realestate-backends.herokuapp.com/getProperty/search/${addinput}`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      },
    }).then(res =>
      res.json()).then(result =>{
        // console.log(result[0])
        setSubmitted(true)
        setProperty(result)
      }).catch(err => console.log(err))
       
        
      
  }
 
    return(
        <>

<div className='seracharea'>
        
 <div class="searchbtn">
   <input type="text" placeholder="Search ppd id" className="isearch" name='id' id='id' onKeyDown={handleDown} onChange={(e) => { handleInputChange(e) }}/>
   <button type="submit" className="isearchbtn" disabled={!isEnabled} onClick={() => handleSearch()} ><BsSearch className="btncolor"/>
     
   </button>
 </div>
        <Link to='/addproperty'><button type='sumbit' className='addbtn' onClick={AddProperty}> 
        <BsPlus /> Add Property
        </button></Link>
        </div>
        
        <div className="propertylstpart"> <PropertyList propertydetails= {issubmitted ?  updatedproperty : property} /></div>
        {/* <div className="propertylstpart"> <PropertyList propertydetails= {updatedproperty} /></div> */}
        
        </>
    )
}
export default SearchRes