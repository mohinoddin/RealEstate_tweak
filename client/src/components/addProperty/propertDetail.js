import '../assets/styles/style.css';

const PropertDetail = ({formData, setFormData}) => {

    console.log(formData);
    const handleFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(previousData => {
            return {...previousData, [name]: value}
        });
        console.log(formData);
    }

    return (
        <form class='form-container'>
            <label className='input-box' for='length'> Length <br/>
                <input type='text' id='length' name='length' placeholder='Example: 1000' 
                onChange={(e) => {handleFormData(e)}} class='input' value={'' || formData.length} />
            </label><br/>

            <label className='input-box' for='breadth'> Breadth <br/>
                <input type='text' id='breadth' name='breadth' placeholder='Example: 1000' 
                onChange={(e) => {handleFormData(e)}} class='input' value={'' || formData.breadth}/>
            </label><br/>

            <label className='input-box' for='totalArea'>Total Area <br/>
                <input type='text' id='totalArea' name='totalArea' placeholder='Example: 7500' 
                onChange={(e) => {handleFormData(e)}} class='input' value={'' || formData.totalArea}/>
            </label><br/>

            <label className='input-box' for='areaUnit'>Area Unit <br/>
                <input type='text' id='areaUnit' name='areaUnit' placeholder='Area Unit' 
                onChange={(e) => {handleFormData(e)}} class='input' value={'' || formData.areaUnit}/>
            </label><br/>
            
            <label className='input-box' for='noOfBHK'>No Of BHK <br/>
                <select id='noOfBHK' name='noOfBHK' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.noOfBHK === "" ? <option value='Select No Of BHK'>Select No Of BHK</option> : 
                    <option value={formData.noOfBHK}>{formData.noOfBHK}</option>}
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='More Than 3'>More Than 3</option>
                </select>
            </label><br/>

            <label className='input-box' for='noOfFloor'>No Of Floor <br/>
                <select id='noOfFloor' name='noOfFloor' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.noOfFloor === "" ? <option value='Select No Of Floor'>Select No Of Floor</option> : 
                    <option value={formData.noOfFloor}>{formData.noOfFloor}</option>}
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='More Than 3'>More Than 3</option>
                </select>
            </label><br/>

            <label className='input-box' for='attached'>Attached <br/>
                <select id='attached' name='attached' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.attached === "" ? <option value='Select Attached'>Select Attached</option> : 
                    <option value={formData.attached}>{formData.attached}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' for='westernToilet'>Western Toilet <br/>
                <select id='westernToilet' name='westernToilet' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.westernToilet === "" ? <option value='Select Western Toilet'>Select Western Toilet</option> : 
                    <option value={formData.westernToilet}>{formData.westernToilet}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' for='furnished'>Furnished <br/>
                <select id='furnished' name='furnished' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.furnished === "" ? <option value='Select Furnished'>Select Furnished</option> : 
                    <option value={formData.furnished}>{formData.furnished}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' for='carParking'>Car Parking <br/>
                <select id='carParking' name='carParking' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.carParking === "" ? <option value='Select Car Parking'>Select Car Parking</option> : 
                    <option value={formData.carParking}>{formData.carParking}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' for='lift'>Lift <br/>
                <select id='lift' name='lift' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.lift === "" ? <option value='Select Lift'>Select Lift</option> : 
                    <option value={formData.lift}>{formData.lift}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' for='electricity'>Electricity <br/>
                <input type='text' id='electricity' name='electricity' placeholder='Example: 3 Phase' 
                onChange={(e) => {handleFormData(e)}} class='input' value={'' || formData.electricity}/>
            </label><br/>

            <label className='input-box' for='facing'>Facing <br/>
                <select id='facing' name='facing' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.facing === "" ? <option value='Select Facing'>Select Facing</option> : 
                    <option value={formData.facing}>{formData.facing}</option>}
                    <option value='North'>North</option>
                    <option value='South'>South</option>
                    <option value='East'>East</option>
                    <option value='West'>West</option>
                </select>
            </label><br/>
        </form>
    )
}

export default PropertDetail;