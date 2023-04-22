import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { ClickCard } from "../../../UI/ClickCard";

import classes from "./MonthlyChallan.module.css";

export const MonthlyChallan = (props) => {
  const [openPopup, setOpenPopup] = useState(false)
  const [closePopup, setClosePopup] = useState(false)

  const openPopupToggler = () => {
    setOpenPopup((prevState)=>{return !prevState})
  }

  const closePopupToggler = () => {
    setClosePopup((prevState)=>{return !prevState})
  }

  let curDate = new Date();
  let month = curDate.getUTCMonth() + 1;
  let dates = {
    join_month: 6,
    current_month: 10,
    closed_till: 9,
  };
  console.log(dates.current_month);
  let months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return (
    <>
    {closePopup && <div className={classes.closepopup}>
    <CloseIcon onClick={closePopupToggler} style={{cursor: 'pointer',position:'absolute', top:'25px', right:'25px', fontSize:'3rem'}}/>
      <span>
        <h6>Status</h6>
        <p>Closed</p>
      </span>
      <span>
        <h6>Last Processed On</h6>
        <p>12 May 2023</p>
      </span>
      <span>
        <h6>Total Number of Records</h6>
        <p>1023</p>
      </span>
      <span>
        <select name="" id="">
          <option value="">Select Type of Report</option>
          <option value="">Monthly TDS Computation Report</option>
          <option value="">Monthly Threshold Consumption Report</option>
          <option value="">Running Ledger Report</option>
          <option value="">Advance to Invoice Adjustment Report</option>
          <option value="">Provision to Invoice Adjustment Report</option>
          <option value="">CR to Invoice Adjustment Report</option>
          <option value="">Challan Utilization Report</option>
          <option value="">Return Ready Report</option>
        </select>
      </span>
    </div>}
    {openPopup && <div className={classes.openpopup}>
    <CloseIcon onClick={openPopupToggler} style={{cursor: 'pointer',position:'absolute', top:'25px', right:'25px', fontSize:'3rem'}}/>
      <span>
        <h6>Status</h6>
        <p>Open</p>
        <button className={classes.button}>Start</button>
      </span>
      <section>
        <span>
          <p>CANCELLATIONS</p>
          <p>CREDINOTE ADJUSTMENT</p>
          <p>PROVIDIONAL ADJUSTMENT</p>
          <p>ADVANCE ADJUSTMENT</p>
          <p>THRESHOLD UTILIZATION</p>
          <p>LDC ADJUSTMENT</p>
          <p>FINAL TDS DETERMINATION</p>
        </span>
        <span>
          <div>
            <p>Status : Completed</p>
            <p>Start Time : 1234</p>
            <p>End Time : 4321</p>
            <p>No. of Records Processed : 300</p>
            <SimCardDownloadIcon style={{fontSize:'2.5rem', color:'green', cursor:'pointer'}}  />
          </div>
          <div>
            <p>Status : Processing</p>
            <p>Start Time : -</p>
            <p>End Time : -</p>
            <p>No. of Records Processed : -</p>
          </div>
          <div>
            <p>Status : To be started</p>
            <p>Start Time : -</p>
            <p>End Time : -</p>
            <p>No. of Records Processed : -</p>
          </div>
          <div>
            <p>Status : To be started</p>
            <p>Start Time : -</p>
            <p>End Time : -</p>
            <p>No. of Records Processed : -</p>
          </div>
          <div>
            <p>Status : To be started</p>
            <p>Start Time : -</p>
            <p>End Time : -</p>
            <p>No. of Records Processed : -</p>
          </div>
          <div>
            <p>Status : To be started</p>
            <p>Start Time : -</p>
            <p>End Time : -</p>
            <p>No. of Records Processed : -</p>
          </div>
          <div>
            <p>Status : To be started</p>
            <p>Start Time : -</p>
            <p>End Time : -</p>
            <p>No. of Records Processed : -</p>
          </div>
        </span>
      </section>
      <div>
        <button className={classes.button}>Accept</button>
        <button className={classes.button}>Reject</button>
      </div>
    </div>}
    <div className={classes.monthlychallan}>
     {props.isTransactionProcessingReportPage ? <h3><p onClick={props.superbreadcrumb}>Transactions{">"}</p>Transaction Processing Centre
        {">"}</h3> : <h3>
        <p onClick={props.superbreadcrumb}>Transactions{">"}</p>
        <p onClick={props.breadcrumb}>Challans{">"}</p>Monthly Challan
        {">"}
      </h3>}
      <section>
        {months.map((val, idx) => {
          if (idx + 1 < dates.join_month) {
            return <ClickCard backgroundColor="gray" title={val} />;
          }
          if (idx + 1 >= dates.join_month && idx + 1 <= dates.closed_till) {
            return <ClickCard onClick={closePopupToggler} backgroundColor="red" title={val} />;
          }
          if (idx + 1 > dates.closed_till && idx + 1 <= dates.current_month) {
            return <ClickCard onClick={openPopupToggler} backgroundColor="green" title={val} />;
          }
          if (idx + 1 > dates.current_month) {
            return <ClickCard backgroundColor="gray" title={val} />;
          }
        })}
      </section>
    </div>
    </>
  );
};
