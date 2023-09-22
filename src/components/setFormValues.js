import React, { useState } from 'react';

const FormValues = () => {
    const [formValues, setFormValues] = useState({email:"", password:"",favClass:"1"})

    const handleEmailChange = ((e) => {
        setFormValues({...formValues, email: e.target.value})
    });
    const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value})
    });
    const handleSelectChange = ((e) => {
        setFormValues({...formValues, favClass: e.target.value})
    });
}
    

export default FormValues;