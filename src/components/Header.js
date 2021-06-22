import React from 'react';
import { Card, CardBody } from 'reactstrap';

const Header=()=>{
    return(
        <div>
            <Card className="text-center" style={{background:"lightblue"}}>
                <CardBody>

                <h1 >Welcome to student Application</h1>
                </CardBody>
            </Card>
        </div>
    );
}
export default Header;