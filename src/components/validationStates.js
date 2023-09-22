import React from 'react';

const validationStates = () => {

    const emailState = (email) => {
        // Expresión regular para validar un correo electrónico
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        
        // Comprueba si el correo cumple con el patrón
        if (emailRegex.test(email)) {
            return true;
        } else {
            return false;
        }
    };
    
    const passwordState = (password) => {
        // Expresión regular para validar una contraseña
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        
        // Comprueba si la contraseña cumple con el patrón
        if (passwordRegex.test(password)) {
            return true;
        } else {
            return false;
        }
    };

}
    

export default validationStates;