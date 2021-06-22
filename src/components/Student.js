import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Container, CardBody, Card, Button , CardSubtitle, CardText} from 'reactstrap';


import base_url from '../api/bootapi';

const Student=({student,update})=>{

    //delete from server
    const deleteStudent=(mobile)=>{
        axios.delete(`${base_url}/delete/${mobile}`).then(
            (Response)=>{
                toast.success("student deleted successfully",{position:'bottom-right'});
                update(mobile);

            },(error)=>{
                toast.error("student not deleted !! server error",{position:'bottom-right'});

            }
        );
    }

//update in server
const history=useHistory();
const routeChange=(id)=>{
console.log(id);
    let path=`/update`;
    history.push(path);
}

    return(
       <Card>
           <CardBody className="text-center">
             <p>{student.title}</p>
             <p>UserName : {student.username} </p>
             <p>Password : {student.password}</p>
             <p>Mobile No : {student.mobile}</p>

           <Container>
               <Button color="warning" onClick={()=>{routeChange(student.id);}}>Update</Button>{' '}
              
               <Button color="danger" onClick={()=>{
                   deleteStudent(student.mobile);
            }}>Delete</Button>
           </Container>
        
           </CardBody>
       </Card>
        
    );
}
export default Student;