import React, { useState } from "react";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

import classes from "./Reports.module.css";

export const Reports = (props) => {
  const [ismonthly, setIsmonthly] = useState(false);
  const [tablerow, setTablerow] = useState(false)

  const monthlyToggler = () => {
    setIsmonthly(true);
  };

  const monthlyToggler2 = () => {
    setIsmonthly(false);
  };

  const tableRowSetter = () => {
    setTablerow(true)
  }
  return (
    <div className={classes.reports}>
      <h3>
        <p onClick={props.breadcrumb}>Transactions{">"}</p>Reports{">"}
      </h3>
      {/* <h2>File Download</h2> */}
      <main>
        <select name="" id="">
          <option value="">Select Report Type</option>
          <option value="">Sectional Analysis</option>
          <option value="">No TDS Report</option>
          <option value="">Error Report</option>
        </select>
        <span>
          <input
            onChange={monthlyToggler2}
            type="radio"
            name="typeofperiod"
            id=""
          />
          <label htmlFor="">YTD</label>
        </span>
        <span>
          <input
            onChange={monthlyToggler}
            type="radio"
            name="typeofperiod"
            id=""
          />
          <label htmlFor="">Monthly</label>
        </span>
        {ismonthly && (
          <select name="" id="">
            <option value="">Jan</option>
            <option value="">Feb</option>
            <option value="">Mar</option>
            <option value="">Apr</option>
            <option value="">May</option>
            <option value="">Jun</option>
            <option value="">Jul</option>
            <option value="">Aug</option>
            <option value="">Sep</option>
            <option value="">Oct</option>
            <option value="">Nov</option>
            <option value="">Dec</option>
          </select>
        )}
        <button onClick={tableRowSetter} className={classes.button}>Get Reports</button>
      </main>

      <table>
        <tbody>
          <tr>
            <th>Type of Report</th>
            <th>Downloaded On</th>
            <th>File Download</th>
            <th>Type</th>
          </tr>
          {tablerow && <tr>
            <td>No TDS Report</td>
            <td>21/04/2023</td>
            <td>
              <SimCardDownloadIcon style={{fontSize:'2.5rem'}} />
            </td>
            <td>Monthly(Jun)</td>
          </tr>}
        </tbody>
      </table>
    </div>
  );
};
