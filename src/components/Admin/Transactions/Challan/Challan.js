import React, { useState } from 'react'
import classes from './Challan.module.css'
import { ClickCard } from '../../../UI/ClickCard'
import { MonthlyChallan } from './MonthlyChallan'
import { UnutilizedChallan } from './UnutilizedChallan'

export const Challan = (props) => {
    const [unutilizedChallan, setUnutilizedChallan] = useState(false)
    const [monthlyChallan, setMonthlyChallan] = useState(false)

    const unutilizedChallanVisibilityToggler = () => {
        setUnutilizedChallan((prevState => {return !prevState}))
    }

    const monthlyChallanVisibilityToggler = () => {
        setMonthlyChallan((prevState)=> {return !prevState})
    }
  return (
    <div className={classes.challan}>
        {!unutilizedChallan && !monthlyChallan && <><h3><p onClick={props.breadcrumb}>Transactions{'>'}</p>Challan{'>'}</h3>
        <section>
            <ClickCard onClick={monthlyChallanVisibilityToggler} title='Monthly Challan' />
            <ClickCard onClick={unutilizedChallanVisibilityToggler} title='Unutilized Challan' />
        </section></>}
        {!unutilizedChallan&& monthlyChallan && <MonthlyChallan breadcrumb={monthlyChallanVisibilityToggler} superbreadcrumb={props.breadcrumb}/>}
        {unutilizedChallan && !monthlyChallan && <UnutilizedChallan breadcrumb={unutilizedChallanVisibilityToggler} superbreadcrumb={props.breadcrumb}/>}
    </div>
  )
}
