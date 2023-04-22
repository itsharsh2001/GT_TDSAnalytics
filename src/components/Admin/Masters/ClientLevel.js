import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';

import classes from './ClientLevel.module.css'
import { AddClientMaster } from './AddClientMaster';
import { ClickCard } from '../../UI/ClickCard';

export const ClientLevel = (props) => {
    const [showAddMaster, setShowAddMaster] = useState(false)
    const showAddMasterHandler = () => {
        setShowAddMaster((prevState=>{return !prevState}))
    }
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return (
    <div className={classes.clientlevel}>
        {!showAddMaster &&<> <h3><p onClick={props.breadcrumb}>Masters{'>'}</p>Client Level Masters{'>'}</h3>
        <span>
            Client List
            {/* <button onClick={showAddMasterHandler}>Add Master</button> */}
        </span>

        <table>
        <tbody>
        <tr>
          <th>Name of Client</th>
          <th>PAN</th>
          <th>TAN</th>
          <th>GSTIN</th>
          <th>Other</th>
          <th>Add Master</th>
        </tr>
        {arr.map((val,idx)=>{
                return(<tr id={idx}>
                <td>Casino Park</td>
                <td>BEhdbn45</td>
                <td>2345</td>
                <td>4y9415y591</td>
                <td>bviaivorebvoe</td>
                <td>
                  {/* <RemoveRedEyeIcon className={classes.icon} />
                  <EditIcon className={classes.icon} /> */}
                  <button className={classes.button} onClick={showAddMasterHandler}>Add Master</button>
                </td>
              </tr>)
              })}
        </tbody>
      </table>
      {/* <section>
        <ClickCard title='Vendor Master (PAN Level)'/>
        <ClickCard title='Keyword Repository' />
        <ClickCard title='GL Master'/>
        <ClickCard title='HSN/SAC Master' />
        <ClickCard title='LDC Master' />
        <ClickCard title='Vendor Declarations'/>
      </section> */}
      </>}

      {showAddMaster && <AddClientMaster masterbreadcrumb={props.breadcrumb} breadcrumb={showAddMasterHandler}/> }
    </div>
  )
}
