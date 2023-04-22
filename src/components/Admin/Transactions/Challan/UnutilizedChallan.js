import React from "react";
import classes from "./UnutilizedChallan.module.css";

export const UnutilizedChallan = (props) => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className={classes.unutilizedchallan}>
        <h3>
        <p onClick={props.superbreadcrumb}>Transactions{">"}</p>
        <p onClick={props.breadcrumb}>Challans{">"}</p>Unutilized Challan
        {">"}
      </h3>
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
          {arr.map((val, idx) => {
            return (
              <tr id={idx}>
                <td>Casino Park</td>
                <td>BEhdbn45</td>
                <td>2345</td>
                <td>4y9415y591</td>
                <td>bviaivorebvoe</td>
                <td>
                  {/* <RemoveRedEyeIcon className={classes.icon} />
                  <EditIcon className={classes.icon} /> */}
                  <button className={classes.button}>Button</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
