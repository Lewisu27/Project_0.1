import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="text-light" >Welcome to My Personal React Website</h1>
      <h2 className="text-light" >Explore my website,About me,Education,Contact,and Hobbies.</h2>



    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"/>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?semt=ais_hybrid" />
      </Card>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/premium-photo/cup-coffee-that-says-coffee-side_1319560-58194.jpg?semt=ais_hybrid" />
      </Card>
    </CardGroup>

</div>

  );
};

export default Home;