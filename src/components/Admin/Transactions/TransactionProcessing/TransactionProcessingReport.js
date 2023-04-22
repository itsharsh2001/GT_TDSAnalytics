import React, { useState } from 'react'
import classes from './TransactionProcessingReport.module.css'
import { MonthlyChallan } from '../Challan/MonthlyChallan'

export const TransactionProcessingReport = (props) => {
  const [isTransactionProcessingReportPage, setIsTransactionProcessingReportPage] = useState(true)
  return (
    <div className={classes.transactionprocessingreport}>
        <MonthlyChallan superbreadcrumb={props.superbreadcrumb} isTransactionProcessingReportPage={isTransactionProcessingReportPage}/>
    </div>
  )
}