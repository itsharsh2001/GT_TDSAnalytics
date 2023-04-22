
import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';

import classes from "./TDSConfiguration.module.css";

export const TDSConfiguration = () => {
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
  return (
    // <div className={classes.tdsconfiguration}>
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
              <button
                onClick={popupToggler}
                style={{ width: "90%", marginTop: "2.25rem" }}
                className={classes.button}
              >
                Add New Group
              </button>
            </span>
          </div>
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
          </div>
          <div>
            <span>
              <label htmlFor="">Deductor PAN</label>
              <input type="text" name="" id="" />
            </span>
          </div>
          <div>
            <span>
              <label htmlFor="">Residential Status</label>
              <input type="text" name="" id="" />
            </span>
          </div>
        </section>

        <h5>BRANCH/TAN Details</h5>
        {numberoftan.map((val, idx) => {
          return (
            <>
              <section id={idx}>
                <div>
                  <span>
                    <label htmlFor="">TAN</label>
                    <input type="text" name="" id="" />
                  </span>
                </div>
              </section>
              <h5>Responsible Person's Details</h5>

              <section style={{ marginBottom: "6rem" }} id={-idx}>
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
          );
        })}
        <button className={classes.button} onClick={numberoftanIncrementer}>
          {" "}
          Another TAN
        </button>
        <DeleteForeverIcon
          className={classes.deleteicon}
          onClick={numberoftanDecrementer}
        />

        <br />
        <button className={classes.button}>Submit</button>
      </div>
    // </div>
  );
};
