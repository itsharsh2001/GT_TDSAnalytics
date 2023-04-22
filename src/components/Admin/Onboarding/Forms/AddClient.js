import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';

import classes from "./AddClient.module.css";

export const AddClient = () => {
  const [numberoftan, setNumberoftan] = useState([1])
  const [popup, setPopup] = useState(false)

  const popupToggler = () => {
    setPopup((prevState)=>{return !prevState})
  }
  const numberoftanIncrementer = () => {
    setNumberoftan((prevState)=>{return [...prevState,1]})
  }

  const numberoftanDecrementer = () => {
    // setNumberoftan((prevState)=>{return [...prevState,1]})


    setNumberoftan((prevState)=>{return prevState.slice(0, -1)});
  }

  return (<>
    {popup && <div className={classes.popup}>
      <CloseIcon onClick={popupToggler} style={{cursor: 'pointer',position:'absolute', top:'25px', right:'25px', fontSize:'3rem'}}/>
      <section>
        <label htmlFor="">Group Name</label>
        <input type="text" name="" id="" />
      </section>
      <button className={classes.button}>Submit</button>
    </div>}
    <div className={classes.form}>
      <h2 className={classes.h2}>Add Client</h2>

      <h5>Group Details</h5>
      <section>
        <div>
          <span>
            <label htmlFor="">Group Name</label>
            <select name="" id="">
              <option value="">Select Group</option>
              <option value="">Value 1</option>
              <option value="">Value 2</option>
            </select>
          </span>   
        </div>
        <div>
          <span>  
            <button onClick={popupToggler} style={{width:'90%', marginTop:'2.25rem'}} className={classes.button}>Add New Group</button>
          </span>
        </div>
        {/* <div>
          <span>
            <label htmlFor="">Residential Status</label>
            <input type="text" name="" id="" />
          </span>
        </div> */}
      </section>

      <h5>Client Details</h5>

      <section>
        <div>
          <span>
            <label htmlFor="">Deductor Name</label>
            <input type="text" name="" id="" />
          </span>
          <span>
            <label htmlFor="">Email Address</label>
            <input type="text" name="" id="" />
          </span>
          {/* <span>
            <label htmlFor="">Name of engagement behaviour</label>
            <input type="text" name="" id="" />
          </span> */}
          {/* <span>
            <label htmlFor="">Confirmation date</label>
            <input type="text" name="" id="" />
          </span>
          <span>
            <label htmlFor="">Auditor address</label>
            <input type="text" name="" id="" />
          </span> */}
          {/* <button>Submit</button> */}
        </div>
        <div>
          <span>
            <label htmlFor="">Deductor PAN</label>
            <input type="text" name="" id="" />
          </span>
          {/* <span>
            <label htmlFor="">Name of engagement partner</label>
            <input type="text" name="" id="" />
          </span>
          <span>
            <label htmlFor="">Contact detail of engagement manager</label>
            <input type="number" name="" id="" />
          </span> */}
          {/* <span>
            <p htmlFor="">
              Is name and designation of authorized person needs to be mention
              in the confirmations(Y/N)*
            </p>
            <div>

            
            <span>
              <input type="radio" name="radiogroup1" id="" />
              <label htmlFor="">Yes</label>
            </span>
            <span>
              <input type="radio" name="radiogroup1" id="" />
              <label htmlFor="">No</label>
            </span>
            </div>
          </span>
          <span>
            <label htmlFor="">Email remainder frequency(In Days)</label>
            <input type="number" name="" id="" />
          </span> */}
        </div>
        <div>
          <span>
            <label htmlFor="">Residential Status</label>
            <input type="text" name="" id="" />
          </span>
          {/* <span>
            <label htmlFor="">NAme of engagement director (if any)</label>
            <input type="text" name="" id="" />
          </span>
          <span>
            <label htmlFor="">Email id of engagement manager</label>
            <input type="email" name="" id="" />
          </span> */}
          {/* <span>
            <label htmlFor="">Name of auditor</label>
            <input type="text" name="" id="" />
          </span> */}
        </div>
      </section>

      <h5>BRANCH/TAN Details</h5>
      {numberoftan.map((val,idx)=>{
        return (<>
      <section id={idx}> 
        <div>
          <span>
            <label htmlFor="">TAN</label>
            <input type="text" name="" id="" />
          </span>
        </div>
        {/* <div>
          <span>
            <label htmlFor="">Residential Status</label>
            <input type="text" name="" id="" />
          </span>
          
        </div>

        <div>
          <span>
            <label htmlFor="">Residential Status</label>
            <input type="text" name="" id="" />
          </span>
          
        </div> */}
        
      </section>
      <h5>Responsible Person's Details</h5>

      <section style={{marginBottom:'6rem'}}  id={-idx}>
        <div>
          <span>
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" />
          </span>          
        </div>
        <div>
          <span>
            <label htmlFor="">PAN</label>
            <input type="text" name="" id="" />
          </span>
        </div>
        <div>
          <span>
            <label htmlFor="">Designation</label>
            <input type="text" name="" id="" />
          </span>
         
        </div>
      </section>
</>
        )
      })}
      <button className={classes.button} onClick={numberoftanIncrementer}> Another TAN</button>
      <DeleteForeverIcon className={classes.deleteicon} onClick={numberoftanDecrementer}/>
      {/* <button >Delete TAN</button> */}

      <br/>
      <button className={classes.button}>Submit</button>
    </div>
    </>
  );
};
