import React, { useState } from 'react';


// Functional Component

function Student(props) {

  return (

    <div className="card">

      <h2>Name: {props.name}</h2>

      <h3>Course: {props.course}</h3>

    </div>

  );

}


function App() {

  // useState Hook

  const [count, setCount] = useState(0);


  // Function for Increment

  const increase = () => {

    setCount(count + 1);

  };


  return (

    <div style={{padding:'20px'}}>

      <h1>ReactJS Components and Hooks</h1>


      {/* Component Usage */}

      <Student
        name="Navya"
        course="Computer Engineering"
      />

      <Student
        name="Rahul"
        course="Information Technology"
      />


      <hr />


      {/* Hook Example */}

      <h2>Counter: {count}</h2>

      <button onClick={increase}>

        Increment

      </button>

    </div>

  );

}


export default App;