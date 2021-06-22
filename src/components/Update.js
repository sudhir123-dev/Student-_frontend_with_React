import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Label, Input, FormText,Container } from 'reactstrap';
import base_url from '../api/bootapi';

const Update= (id) => {

const [student,setStudent]=useState({});
//form handler function
const handleForm=(e)=>{
  console.log(student);
  postDataToServer(student);
  e.preventDefault();
}
//creating function to post data on server
const postDataToServer=(data)=>{
  axios.post(`${base_url}/create`,data).then(
    (response)=>{
     console.log(response);
     console.log("success");
     toast.success("student updated",{position:'bottom-right'});
    },(error)=>{
     console.log(error);
     console.log("error");
     toast.error("something went wrong",{position:'bottom-right'});
    }
  );
}


/*useEffect(()=>{
    getDataFromServer(id);
},[]);

const getDataFromServer=(id)=>{
    axios.get(`${base_url}/read/${id}`).then(
        (response)=>{
            console.log(response);
            setStudent(response);
        }
    );
}*/


  return (
    <Form className="my-2" onSubmit={handleForm}>
      <h3 className="text-center ">Update Details</h3>
      <FormGroup>
        <Label for="id">ID</Label>
        <Input type="text" name="id" id="id" placeholder="Enter here" onChange={(e)=>{setStudent({
          ...student,id:e.target.value });}} />
      </FormGroup>
        <FormGroup>
        <Label for="username">userName</Label>
        <Input type="text" name="userName" id="userName" placeholder="Enter here" onChange={(e)=>{
          setStudent({...student,username:e.target.value});
        }}/>
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="password" name="password" id="Password" placeholder="Enter here" onChange={(e)=>{
          setStudent({...student,password:e.target.value});
      }} />
      </FormGroup>
      <FormGroup>
        <Label for="mobile">Mobile No.</Label>
        <Input type="text" name="mobile" id="mobile" placeholder="Enter here " onChange={(e)=>{
          setStudent({...student,mobile:e.target.value});
        }
        } />
      </FormGroup>
      <Container className=" text-center my-3">
        <Button type="submit" color="success " >Update</Button>{' '}
      </Container>
      
    </Form>
  );
}

export default Update;