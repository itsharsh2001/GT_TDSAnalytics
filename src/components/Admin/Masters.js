import React, { useState } from 'react'
import classes from './Masters.module.css'

import {Card} from '../UI/Card'
import {ClickCard} from '../UI/ClickCard'
import { ClientLevel } from './Masters/ClientLevel'

export const Masters = () => {
  const [showApplicationLevelMasters, setShowApplicationLevelMasters] = useState(false)
  const [showClientLevelMasters, setShowClientLevelMasters] = useState(false)

  const applicationLevelMastersHandler = () => {
    setShowApplicationLevelMasters((prevState=>{return !prevState}))
  }
  const clientLevelMastersHandler = () => {
    setShowClientLevelMasters((prevState=>{return !prevState}))
  }
  return (
    <div className={classes.masters}>
      {/* <h1>Masters</h1> */}

      <span className={classes.headingdiv}>
        <h1>Masters</h1>
      </span>
      {!showApplicationLevelMasters && !showClientLevelMasters &&<span>
        <ClickCard onClick={applicationLevelMastersHandler} title='Application Level Masters'/>
        <ClickCard onClick={clientLevelMastersHandler} title='Client Level Masters'/>
        <ClickCard title='Other Masters'/>
        {/* <ClickCard onClick={clientLevelMastersHandler} title='Client Level Masters'/> */}
      </span>}
        
        {showApplicationLevelMasters &&<>
          <h3><p onClick={applicationLevelMastersHandler}>Masters{'>'}</p>Application Level Masters{'>'}</h3>
         <section>
            {/* <Card heading='Client on-boarding - Tenant level' button='View' section='Add New'/>
            <Card heading='Client on-boarding - Entity (PAN-TAN) level' button='View' section='Add New'/>
            <Card heading='TDS Configuration Setup' button='View' section='Add New'/>
            <Card heading='User Management' button='View' section='Add New'/>
            <Card heading='Role Management' button='View' section='Add New'/> */}
            <Card heading='Nature of Payment - To - Section Master' button='View' section='Add New'/>
            <Card heading='Setion - to - TDS Rate Master' button='View' section='Add New'/>
            <Card heading='Cess Master' button='View' section='Add New'/>
            <Card heading='Surcharge Master' button='View' section='Add New'/>
            <Card heading='HSN/SAC Master' button='View' section='Add New'/>
            <Card heading='Keyword Repository' button='View' section='Add New'/>
            <Card heading='Thresholds Master' button='View' section='Add New'/>
        </section></>}

        {showClientLevelMasters && <ClientLevel breadcrumb={clientLevelMastersHandler}/>}
    </div>
  )
}
