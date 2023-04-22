import React, { useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import { AddClient } from './Onboarding/Forms/AddClient'
import { Card } from '../UI/Card'

import classes from "./Onboarding.module.css";
import { ViewClient } from "./Onboarding/ViewClient";
import { ViewUser } from "./Onboarding/ViewUser";
import { AddUser } from "./Onboarding/Forms/AddUser";

export const Onboarding = () => {
  const [formVisible, setFormVisible] = useState(false)
  const [tableVisible, setTableVisible] = useState(false)
  const [viewClient, setViewClient] = useState(false)
  const [viewUser, setViewUser] = useState(false)
  const [addClient, setAddClient] = useState(false)
  const [addUser, setAddUser] = useState(false)
  const formVisibilityHandler = () => {
    setFormVisible(prevState=>{return !prevState})
  }
  const tableVisibilityHandler = () => {
    setTableVisible(prevState=>{return !prevState})
  }

  const viewClientToggler = () => {
    setViewClient((prevState)=>{return !prevState})
  }

  const viewUserToggler = () => {
    setViewUser((prevState)=>{return !prevState})
  }

  const addClientToggler = () => {
    setAddClient((prevState)=>{return !prevState})
  }

  const addUserToggler = () => {
    setAddUser((prevState)=>{return !prevState})
  }

  return (
    <div className={classes.onboarding}>
      {/* <h1>Onboarding/Application Form</h1> */}
      <span className={classes.headingdiv}>
        <h1>Onboarding/Application Form</h1>
      </span>
     {!viewClient && !viewUser && !addClient && !addUser && <> 
      <span>
        <Card buttonAction={viewClientToggler} sectionAction={addClientToggler} heading='Client Onboarding' button='View' section='Add New'/>
        <Card buttonAction={viewUserToggler} sectionAction={addUserToggler} heading='User Onboarding' button='View' section='Add New'/>
        <Card heading='Role Management' button='View' section='Add New'/>
        {/* <button onClick={formVisibilityHandler}>Client Onboarding</button>
        <button onClick={formVisibilityHandler}>User Onboarding</button> */}
      </span> </>}
      {viewClient && <ViewClient breadcrumb={viewClientToggler}/>}
      {viewUser && <ViewUser breadcrumb={viewUserToggler}/> }
      {addClient && <>
        <h3><p onClick={addClientToggler}>Client Onboarding{'>'}</p>Add CLient{'>'}</h3>
        <AddClient/>
      </>}
      {addUser && <>
        <h3><p onClick={addUserToggler}>User Onboarding{'>'}</p>Add User{'>'}</h3>
        <AddUser/>
      </>}
     {/* {formVisible && <Form/>} */}
    </div>
  );
};
