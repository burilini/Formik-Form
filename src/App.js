import React from "react";
// TODO: import useFormik from formik library

import { useFormik } from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  function App() {
    const formik = useFormik({
      initialValues: {
        email: '',
        password: ''           
      },
      onSubmit: values =>{
        console.log('form:',values);
      },
      validate: values =>{
        let errors = {};
        if(!values.name) errors.name = 'Field required';
        if(!values.email) errors.email = 'Field required';
        if(!values.password) errors.password = 'Field required';
        return errors;
      }
    });
  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name:</div>
        <input type="text" name="name" id ="name" 
        onChange={formik.handleChange} 
        value={formik.values.name}/>
        {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div> : null}
        
        <div>Email:</div>
        <input type="text" name="email" id="emailField" 
        onChange={formik.handleChange} 
        value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}        
        
        <div>Password:</div>
        <input type="text" name="password" id="pswField" 
        onChange={formik.handleChange} 
        value={formik.values.password}/><br/>
        {formik.errors.password ? <div id='pswError'style={{color:'red'}}>{formik.errors.password}</div> : null}                
       
        <button type="submit" id="submitBtn">Submit</button>
      </form>      
    </div>
  );
}
    </div>
  );
}

export default App;
