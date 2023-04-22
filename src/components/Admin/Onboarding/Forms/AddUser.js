import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import classes from "./AddUser.module.css";

export const AddUser = () => {
  const [numberoftan, setNumberoftan] = useState([1]);

  const numberoftanIncrementer = () => {
    setNumberoftan((prevState) => {
      return [...prevState, 1];
    });
  };

  const numberoftanDecrementer = () => {
    // setNumberoftan((prevState)=>{return [...prevState,1]})

    setNumberoftan((prevState) => {
      return prevState.slice(0, -1);
    });
  };
  return (
    <div className={classes.adduser}>
      <h2 className={classes.h2}>Add Client</h2>

      <section>
        <div>
          <span>
            <label htmlFor="">First Name</label>
            <input type="text" name="" id="" />
          </span>
          <span>
            {/* <label htmlFor="">Auditor address</label>
            <input type="text" name="" id="" /> */}
            <label htmlFor="">Choose Client</label>
            <select name="" id="">
              <option value="">Select Client</option>
              <option value="">Value 1</option>
              <option value="">Value 2</option>
              <option value="">Value 3</option>
              <option value="">Value 4</option>
              <option value="">Value 5</option>
            </select>
          </span>

          
        </div>
        <div>
          <span>
            <label htmlFor="">Last Name</label>
            <input type="text" name="" id="" />
          </span>

          <span>
            {/* <label htmlFor="">Auditor address</label>
            <input type="text" name="" id="" /> */}
            <label htmlFor="">PAN</label>
            <select name="" id="">
              <option value="">Select PAN</option>
              <option value="">Value 1</option>
              <option value="">Value 2</option>
              <option value="">Value 3</option>
              <option value="">Value 4</option>
              <option value="">Value 5</option>
            </select>
          </span>
        </div>
        <div>
          <span>
            <label htmlFor="">Email Address</label>
            <input type="email" name="" id="" />
          </span>
          <span>
            <label htmlFor="">Group Name</label>
            <select name="" id="">
              <option value="">Select Group</option>
              <option value="">Value 1</option>
              <option value="">Value 2</option>
              <option value="">Value 3</option>
              <option value="">Value 4</option>
              <option value="">Value 5</option>
            </select>
          </span>
        </div>
      </section>
      {numberoftan.map((val, idx) => {
        return (
          <section id={idx}>
            <div>
              <span>
                <label htmlFor="">Choose TAN</label>
                <select name="" id="">
                  <option value="">Select TAN</option>
                  <option value="">Value 1</option>
                  <option value="">Value 2</option>
                  <option value="">Value 3</option>
                  <option value="">Value 4</option>
                  <option value="">Value 5</option>
                </select>
              </span>
            </div>
            <div>
              <span>
                <label htmlFor="">Choose Role</label>
                <select name="" id="">
                  <option value="">Select Role</option>
                  <option value="">Value 1</option>
                  <option value="">Value 2</option>
                  <option value="">Value 3</option>
                  <option value="">Value 4</option>
                  <option value="">Value 5</option>
                </select>
              </span>
            </div>
          </section>
        );
      })}
      <button className={classes.button} onClick={numberoftanIncrementer}> Another TAN</button>
      <DeleteForeverIcon className={classes.deleteicon} onClick={numberoftanDecrementer}/>
      

      <button className={classes.button}>Submit</button>
    </div>
  );
};
