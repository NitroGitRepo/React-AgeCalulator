import React, { useState } from "react";
import"./AgeCalculator.css";
const AgeCalculator = ()=>{

    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(0);

    function calculateAge(){
        const today = new Date();
        console.log(today)
        const birthdateDate = new Date(birthdate);
        console.log(birthdate);
        const monthDiff = today.getMonth() - birthdateDate.getMonth();
    
        let age = today.getFullYear() - birthdateDate.getFullYear();
        console.log(age);
        console.log( birthdateDate.getFullYear());
        if(monthDiff <0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())){
            age--;
        }
        setAge(age);
    }

    function resetDate(){
           setBirthdate(' ');
    }
    console.log(age);
    return(

        <div className="container">
             <h2 className="heading container_title">Age Calculator</h2>
             <p className="para container_title">This is Age Calculator can deterine the age or interval</p>
              <div className="container_middle">
                  <div className="right">
                      <h4>Date of birth</h4>
                      <input className="date" type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)}/>
                      <div className="button_dev">
                           <button className="button-65" onClick={calculateAge}>Calculate</button>
                           <button className="button-65" onClick={resetDate}>Reset</button>
                      </div>
                  </div>
                  <div className="left">
                        <div className="container_middle_para">
                             <h1>Your Age Is</h1>
                        </div>
                        <h1 className="age_heading">{age>0 ? age : ''}</h1>
                  </div>
              </div>
        </div>
    );
}
export default AgeCalculator;