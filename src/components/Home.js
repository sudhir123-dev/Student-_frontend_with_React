import React,{useEffect}from 'react';
import { Jumbotron,Button,Container, Card, CardBody } from 'reactstrap';

const Home=()=>{
    useEffect(()=>{
        document.title="Home";
    },[]);
    return(
     <div>
         
         <Card className="text-center my-3" style={{background:"violet"}}>
             <CardBody>
             <Jumbotron >
             <h3 className="display-7">Welcome to student registration portal</h3>
             <p>this application is useful to store students details where students have to register first</p>
            <Container >
                 <Button color="primary" outline>start</Button>
            </Container>
         </Jumbotron>
             </CardBody>
         </Card>
        
                
          
     </div>
    );
}
export default Home;