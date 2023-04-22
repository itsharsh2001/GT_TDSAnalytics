import React, { useState } from "react";
import classes from "../Admin/Trnsactions.module.css";
import { ClickCard } from "../UI/ClickCard";
import { UploadData } from "./Transactions/UploadData/UploadData";
import { Challan } from "./Transactions/Challan/Challan";
import { TransactionProcessingReport } from "./Transactions/TransactionProcessing/TransactionProcessingReport";
import {Reports} from './Transactions/Reports/Reports'

export const Transactions = () => {
    const [uploadData, setUploadData] = useState(false)
    const [challanVisible, setChallanVisible] = useState(false)
    const [reports, setReports] = useState(false)
    const [transactionProcessingReport, setTransactionProcessingReport] = useState(false)

    const uploadDataVisibilityHandler = () => {
        setUploadData((prevState)=>{return !prevState})
    }

    const challanVisibilityToggler = () => {
        setChallanVisible((prevState)=>{return !prevState})
    }

    const reportsVisibilityToggler = () => {
        setReports((prevState)=>{return !prevState})
    }

    const transactionProcessingReportToggler = () => {
      setTransactionProcessingReport((prevState)=>{return !prevState})
    }
  return (
    <div className={classes.transactions}>
      {/* <h1>Transactions</h1> */}
      <span className={classes.headingdiv}>
        <h1>Transactions</h1>
      </span>
      {
      !reports && !uploadData && !challanVisible && !transactionProcessingReport &&<>
        {/* <h3>Transactions{'>'}</h3> */}

      <div>
        <select name="" id="">
          <option value="">Select Client PAN</option>
          <option value="">1234567890</option>
          <option value="">1234567890</option>
          <option value="">1234567890</option>
          <option value="">1234567890</option>
        </select>
        <select name="" id="">
          <option value="">Select TAN</option>
          <option value="">1234567890</option>
          <option value="">1234567890</option>
          <option value="">1234567890</option>
          <option value="">1234567890</option>
        </select>
        <select name="" id="">
          <option value="">Select Financial Year</option>
          <option value="">1234567890</option>
          <option value="">1234567890</option>
          <option value="">1234567890</option>
          <option value="">1234567890</option>
        </select>
      </div>

      <h2>Monthly Compliances</h2>
      <section>
        <ClickCard onClick={uploadDataVisibilityHandler} title="Upload Data" />
        <ClickCard title="Client Position Report" />
        {/* <ClickCard title="Data Repository" /> */}
        <ClickCard title="Data Transformation Module" />
        {/* <ClickCard title="Detailed Error Logs in Data Ingestion Module" /> */}
        {/* <ClickCard title="Interim Reports" /> */}
        <ClickCard onClick={transactionProcessingReportToggler} title="Transaction processing centre" />
        <ClickCard onClick={reportsVisibilityToggler} title="BI Reports" />
        <ClickCard title="GL Reconciliations" />
        <ClickCard onClick={challanVisibilityToggler} title="Chalan generations" />
        {/* <ClickCard title="Control Centre" />
        <ClickCard title="Other Reports"/> */}
      </section>

      <h2>Quarterly Compliances</h2>
      <section>
        <ClickCard title="Return Ready Reports" />
        <ClickCard title="TDS return filing via Independent Module" />
        <ClickCard title="TDS return filing via Integrated Module" />
        <ClickCard title="Challan tracking from TRACES" />
        <ClickCard title="Revised Return Module for all type of corrections" />
      </section>

      <h2>Annual Compliances</h2>
      <section>
        <ClickCard title="26AS Reconcillations" />
        <ClickCard title="34a Reconcillations" />
      </section></>}
     {transactionProcessingReport && <TransactionProcessingReport  superbreadcrumb={transactionProcessingReportToggler}/>}
     {reports && <Reports breadcrumb={reportsVisibilityToggler}/>}
     {challanVisible && !uploadData && <Challan breadcrumb={challanVisibilityToggler}/> }
     {uploadData && !challanVisible && <UploadData breadcrumb={uploadDataVisibilityHandler}/>}
    </div>
  );
};
