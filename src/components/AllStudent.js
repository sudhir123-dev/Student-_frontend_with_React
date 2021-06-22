import React, {useState,useEffect} from 'react';
import Student from './Student';
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllStudent=()=>{

    useEffect(()=>{
        document.title="All Student";
    },[]);

    //function to call server
    const getAllStudentFromServer=()=>{
        axios.get(`${base_url}/read`).then(
            (Response)=>{
                // for succes
                console.log(Response.data);
                toast.success("Students has been loaded",{position:'bottom-right'});
                setStudent(Response.data);

            },(error)=>{
                // for error
                console.log(error);
                toast.error("something went wrong",{position:'bootom-right'})
            }
            
        );
    }
     
    //calling loading student function

    useEffect(()=>{
        getAllStudentFromServer();
    },[]);

    const [students,setStudent]=useState([
   // {title:"1",username:"sudhir",password:"1234",mobile:"9516927623"},
   // {title:"2",username:"arvind",password:"12343",mobile:"9516976456"},
   // {title:"3",username:"vinod",password:"7846",mobile:"95169276909"},
 ]);
 // for delete 
 const updateStudent=(mobile)=>{
     setStudent(students.filter((c)=>c.mobile!=mobile));

 }
    return(
    <div>
        <h3 className="front-weight-bold text-center">List of students details</h3>
            {students.length >0 
            ? students.map((item)=><Student key={item.id} student={item}  update={updateStudent}/>
              )
            :"No student"}
        
        
    </div>
    
    );
}
export default AllStudent;