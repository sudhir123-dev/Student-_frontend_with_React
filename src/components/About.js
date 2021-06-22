import React,{useEffect} from 'react';

const About=()=>{
    useEffect(()=>{
        document.title="About";
    },[]);
    return(
        <div>
            <h2>student portal</h2>
            <p>Student portal delivers digital transformation and technology services from ideation to execution, enabling Global 2000 clients to outperform the competition. “Born digital,” Student portal takes an agile, collaborative approach to creating customized solutions across the digital value chain. Our deep expertise in infrastructure and applications management turns IT into a strategic asset. Whether you need to run your business more efficiently or accelerate revenue growth, Student portal can get you there.

</p>
        </div>
    );
}
export default About;