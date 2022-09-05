import "./PropertyList.css"
import {FaRegImages} from 'react-icons/fa'
import {AiFillEye} from 'react-icons/ai';
import {MdEdit} from 'react-icons/md';
import Modal from "../Modals/Modal";
import { useState } from 'react'
const PropertyList = ( {propertydetails} )=>{

  const [isOpen,setIsOpen] = useState(false);
  const [isImage,setIsImage]=useState("");
  const [userData , setUserData]=useState([]);
  const [isEnabled,setIsEnabled]=useState(false);
  const [selected,setSelected]=useState(false);

 console.log(userData)



  const handleChangeFilter = (e)=>{
    let filterToApply = e.target.value
   
 
      if(filterToApply==="Residential"){
     
       let res= propertydetails.filter((val)=>val.propertyType===filterToApply)
      console.log(res)
      setSelected(true)
      setUserData(res) 
    } else if(filterToApply==="Commercial"){
      let res= propertydetails.filter((val)=>val.propertyType===filterToApply)
      console.log(res)
      setSelected(true)
      setUserData(res) 
    }
    // if(allData===null){
    //   setAllData(users)
    //   if(filterToApply === "Unsold"){
    //         const result= users.filter((val)=>val.status===filterToApply);
    //         setUsers(result);
    //         console.log(result)
    //     }else{
    //         const result= users.filter((val)=>val.property_type===filterToApply)
    //         setUsers(result)
    //     }
      
    // }else if(users.length!==allData.length){
    //   setUsers(allData)
    //   if(filterToApply === "Unsold"){
    //     const result= allData.filter((val)=>val.status===filterToApply);
    //     setUsers(result);
    //     }else{
    //         const result= allData.filter((val)=>val.property_type===filterToApply)
    //         setUsers(result)
    //         // console.log(users)
    //     }
      
    // }else{
    //     if(filterToApply === "Unsold"){
    //         const result= users.filter((val)=>val.status===filterToApply);
    //         setUsers(result);
    //         }else{
    //             const result= users.filter((val)=>val.property_type===filterToApply)
    //             setUsers(result)
    //         }
      

    // }
  }

    return(
        <>
        <div className='propertycontainer'>
       
       <table>
       <thead>     
        <tr className='tablehead' >
            <th className="thtext ppdidhead">PPD Id</th>
        
            <th className="thtext">Image</th>
       
            <th className="thtext" onClick={()=>setIsEnabled(true)}>Property
            <div>
            <select  style={isEnabled ?{ display:'block'}:{display:'none'}}
            onChange={handleChangeFilter}
            defaultValue={"default"}
            >
              {/* {propertydataArr.map((propertytypedata,index)=>{
                console.log(index,{propertytypedata});
                <option key={index} value='propertytypedata.propertytypedata'>
                   propertytypedata.propertytypedata
                </option>
              })} */}

<option value={"default"} disabled>
          Choose an option
        </option>
       
              <option key={2} value="Residential">
                   Residential
                </option>
                <option key={3} value="Commercial">
                Commercial
                </option>

            </select>
            </div>

            </th>
            
        
            <th className="thtext">Contact</th>
     
            <th className="thtext">Area</th>
        
            <th className="thtext">Views</th>
        
            <th className="thtext">Status</th>
      
            <th className="thtext thdayleft">Days Left</th>
       
            <th className="thtext actiontxt">Action</th>
        </tr>
        </thead>
                
        {
        
       propertydetails.map((propertydata) => (
          <tbody>
          <tr className='tabledata'>
        {/* <td className="tdtext">{propertydata._id.substr(propertydata._id.length - 7)}</td> */}
        <td className="tdtext ppdidtxt">{propertydata._id}</td>
        <td className="tdtext property_column_two"><FaRegImages onClick={()=>{setIsOpen(!isOpen);setIsImage(propertydata.image)}} className="image"/>
        
        
        </td>
        <td className="tdtext">{propertydata.propertyType}</td>
        <td className="tdtext tdmobile">{propertydata.mobile}</td>
        <td className="tdtext">{propertydata.totalArea}</td>
        <td className="tdtext">{propertydata.views}</td>
        <td className="tdtext tdstatus" style={soldstyle}>{propertydata.Status}</td>
        <td className="tdtext tddays">{propertydata.daysLeft}</td>
        <td className="tdtext">

          <div className="actionbtn">
          <AiFillEye />
          <MdEdit />
          </div>               
          </td>
        </tr>
        </tbody>
      ))}      
      <Modal open={isOpen} onClose={()=>setIsOpen(!isOpen)}>
                        <img src={isImage} style={{width:"500px",height:'400px',marginTop:'200px',borderRadius:'20.5px'}} alt="the property"/>
                        {/* hello */}
                    </Modal>
       </table>
       </div>
       
        </>
    )
}
export default PropertyList


const soldstyle={
  color: '#416899',
  background: '#F5FAF5',

}