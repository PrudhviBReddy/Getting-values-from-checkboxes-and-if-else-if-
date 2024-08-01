import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let mobilenumberInputRef = useRef();
    let maleRBRef = useRef();
    let femaleRBRef = useRef();
    let stateSelectRef = useRef();
    let resultParaRef = useRef();
    let selectedGender;
    let selectedMS;
    let capital;
    let languageKnown = {
        telugu:false,
        hindi:false,
        english:false,
    };

    


    







    let onCreateAccount = ()=>{
        if(stateSelectRef.current.value == "Select State"){
            alert("Please select your state");
        }else{

             let salutation = "";

            if(selectedGender == "male"){
                salutation = "Mr.";
            }

            if(selectedGender == "female"){
                if(selectedMS == "single"){
                    salutation = "Miss.";
                }else{
                    salutation = "Mrs.";
                }
            }



            resultParaRef.current.innerHTML = ` ${salutation} ${firstNameInputRef.current.value} ${lastNameInputRef.current.value} you konwn ${languageKnown.telugu?"Telugu":""}, ${languageKnown.hindi?"Hindi":""}, ${languageKnown.english?"English":""}  from ${capital}, ${stateSelectRef.current.value}, your account has been created.`;
        }
    }

  return (
    <div className='App'>
        <form>
            <h2>SIGNUP</h2>
            <div>
                <label>First Name</label>
                <input type="text"  ref={firstNameInputRef}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" ref={lastNameInputRef}></input>
            </div>
            <div>
                <label>Gender</label>
                <input type="radio" name="gender" ref={maleRBRef} onChange={()=>{
                    if(maleRBRef.current.checked == true){
                        selectedGender = "male";
                    }
                }}></input>
                <label style={{width:"auto"}}>Male</label>
                <input type="radio" name="gender" ref={femaleRBRef} onChange={()=>{
                    if(femaleRBRef.current.checked == true){
                        selectedGender = "female";
                    }  
                }}></input>
                <label style={{width:"auto"}}>Female</label>
            </div>
            <div>
                <label>Marital Status</label>
                <input type="radio" name="ms" onChange={(eventObj)=>{
                    console.log(eventObj);
                    if(eventObj.target.checked == true){
                        selectedMS = "single";
                    }
                }}></input>
                <label style={{width:"auto"}}>Single</label>
                <input type="radio" name="ms" onChange={(eventObj)=>{
                    console.log(eventObj);
                    if(eventObj.target.checked == true){
                        selectedMS = "married";
                    }
                }}></input>
                <label style={{width:"auto"}}>Married</label>
            </div>
            <div>
                <label>Age</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Email</label>
                <input ref={emailInputRef} type="text" ></input>
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordInputRef} type="text" ></input>
            </div>
            <div>
                <label>Mobile No.</label>
                <input ref={mobilenumberInputRef} type="text" ></input>
            </div>
            <div>
            <label>State</label>
            <select ref={stateSelectRef} onChange={()=>{

                let selectState = stateSelectRef.current.value;
                if(selectState == "Telangana"){
                    capital = "Hyderabad";
                    console.log("Hyderabad");
                }else if(selectState == "Andhra Pradesh"){
                    capital = "Amaravati";
                    console.log("Amaravati")
                }else if(selectState == "Jammu and Kashmir"){
                    capital = "Sri Nagar";
                    console.log("Sri Nagar")
                }else if(selectState == "Ladakh"){
                    capital = "Leh";
                    console.log("Leh")
                }else if(selectState == "Uttar Pradesh"){
                    capital = "Lucknow";
                    console.log("Lucknow")
                }else if(selectState == "Assam"){
                    capital = "Sikkim";
                    console.log("Sikkim")
                }else if(selectState == "West Bengal"){
                    capital = "Kolkata";
                    console.log("Kolkata")
                }else if(selectState == "Meghalaya"){
                    capital = "Shillong";
                    console.log("Shillong")
                }else if(selectState == "Goa"){
                    capital = "Panaji";
                    console.log("Panaji")
                }else if(selectState == "Gujarat"){
                    capital = "Gandhi Nagar";
                    console.log("Gandhi Nagar")
                }else if(selectState == "Maharastra"){
                    capital = "Mumbai";
                    console.log("Mumbai")
                }else if(selectState == "Tamil Nadu"){
                    capital = "Chennai";
                    console.log("Chennai")
                }
                else{
                    console.log("Select Proper Valve");
                }
            }}>
                <option>Select State</option>
                <option>Jammu and Kashmir</option>
                <option>Delhi</option>
                <option>Uttar Pradesh</option>
                <option>Assam</option>
                <option>Kolkata</option>
                <option>Meghalaya</option>
                <option>Gujarat</option>
                <option>Goa</option>
                <option>Maharastra</option>
                <option>Telangana</option>
                <option>Andhra Pradesh</option>
                <option>Tamil Nadu</option>
            </select>
            </div>
            <div>
                <label>Langauges Known</label>
                <input type="checkbox" onChange={(eventObj)=>{
                    languageKnown.telugu = eventObj.target.checked;
                }}></input>
                <label style={{width:"auto"}}>Telugu</label>
                <input type="checkbox" onChange={(eventObj)=>{
                    languageKnown.hindi = eventObj.target.checked;
                }}></input>
                <label style={{width:"auto"}}>Hindi</label>
                <input type="checkbox" onChange={(eventObj)=>{
                    languageKnown.english = eventObj.target.checked;
                }}></input>
                <label style={{width:"auto"}}>English</label>
            </div>
            <div>
                <button type="button" onClick={()=>{
                    onCreateAccount();
                }}>Create Account</button>
            </div>
            <p ref={resultParaRef}></p>
        </form>
        <br></br>
        <Link to="/">Login</Link>
    </div>
  )
}

export default Signup