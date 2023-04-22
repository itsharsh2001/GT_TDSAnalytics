import React, { useState } from 'react'
import { Navbar } from '../components/UI/Navbar'
import classes from './AdminPanel.module.css'
import { Home } from '../components/Admin/Home'
import { Onboarding } from '../components/Admin/Onboarding'
import { Masters } from '../components/Admin/Masters'
import { Transactions } from '../components/Admin/Transactions'
import { Validations } from '../components/Admin/Validations'
import { Other } from '../components/Admin/Other'
import { MIS } from '../components/Admin/MIS'
import { Sidebar } from '../components/UI/Sidebar'

export const AdminPanel = () => {
    const [home, setHome] = useState(true)
    const [onboarding, setOnboarding] = useState(false)
    const [masters, setMasters] = useState(false)
    const [transactions, setTransactions] = useState(false)
    const [validations, setValidations] = useState(false)
    const [other, setOther] = useState(false)
    const [mis, setMis] = useState(false)

    const pageHandler = (page) => {
        let flag1 = page==='home';
        let flag2 = page==='onboarding';
        let flag3 = page==='masters';
        let flag4 = page==='transactions';
        let flag5 = page==='validations';
        let flag6 = page==='other';
        let flag7 = page==='mis';

        setHome(flag1);
        setOnboarding(flag2);
        setMasters(flag3)
        setTransactions(flag4);
        setValidations(flag5);
        setOther(flag6);
        setMis(flag7);
    }
  return (
    <div className={classes.admin}>
        {/* <Navbar navigation={pageHandler}/> */}
        <Sidebar navigation={pageHandler}/>
        {home && <Home/>}
        {onboarding && <Onboarding/>}
        {masters && <Masters/>}
        {transactions && <Transactions/> }
        {validations && <Validations/>}
        {other && <Other/>}
        {mis && <MIS/>}
    </div>
  )
}
