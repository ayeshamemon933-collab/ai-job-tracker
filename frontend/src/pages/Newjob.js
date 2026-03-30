import React,{useState} from "react";
function NewJob(){
    const [company, setCompany]= useState("");
    const [role, setRole]= useState("");
    const handleSubmit=(e)=> {
        e.preventDefault();
        alert(`Job Added: ${company}-${role}`);
};
return(
    <div>
        <h2>
            Add Job
        </h2>
        <form onSubmit= {handleSubmit}><input type="text"
        placeholder="Company"
        value={company}
        onChange = {(e)=> setCompany(e.target.value)}/>
        <br></br>
        <input 
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e)=> setRole(e.target.value)}/>
        <br></br>
        <button type="submit">Add Job</button>
        </form>
    </div>
);
}
export default NewJob;

