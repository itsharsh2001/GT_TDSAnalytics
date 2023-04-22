import React,{useState} from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import { AddUser } from './Forms/AddUser';

import classes from './ViewUser.module.css'

export const ViewUser = (props) => {
    const [addUser, setAddUser] = useState(false)

    const addUserToggler = () =>{
        setAddUser((prevState)=>{return !prevState})
    }
  return (
    <div className={classes.viewuser}>
        {!addUser && <><h3><p onClick={props.breadcrumb}>User Onboarding{'>'}</p>View Users{'>'}</h3>
        <button onClick={addUserToggler} className={classes.button}>Add User</button>
        <table>
        <tbody>
        <tr>
          <th>Name of Client</th>
          <th>PAN</th>
          <th>TAN</th>
          <th>GSTIN</th>
          <th>Other</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>Casino Park</td>
          <td>BEhdbn45</td>
          <td>2345</td>
          <td>4y9415y591</td>
          <td>bviaivorebvoe</td>
          <td><RemoveRedEyeIcon className={classes.icon}/><EditIcon className={classes.icon}/></td>
        </tr>
        </tbody>
      </table></>}



      {addUser && <>
        <h3><p onClick={props.breadcrumb}>User Onboarding{'>'}</p>Add User{'>'}</h3>
        <AddUser/>
      </>}
    </div>
  )
}
