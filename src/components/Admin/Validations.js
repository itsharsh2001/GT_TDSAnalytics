import React from 'react'
import {ClickCard} from '../UI/ClickCard'

import classes from './Validations.module.css'

export const Validations = () => {
  return (
    <div className={classes.validations}>
      {/* <h1>Validations</h1> */}
      <span className={classes.headingdiv}>
        <h1>Validations</h1>
      </span>
        <section> 
            <ClickCard title='PAN Validation'/>
            <ClickCard title='Specified person check'/>
            <ClickCard title='GSTIN Validation'/>
        </section>
    </div>
  )
}
