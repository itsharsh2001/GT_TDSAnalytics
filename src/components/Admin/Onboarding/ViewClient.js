import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";

import classes from "./ViewClient.module.css";
import { AddClient } from "./Forms/AddClient";

export const ViewClient = (props) => {
  const [addClient, setAddClient] = useState(false);
  
  const addClientToggler = () => {
    setAddClient((prevState) => {
      return !prevState;
    });
  };

  return (<>
    
   <div className={classes.viewclient}>
      {!addClient && (
        <>
          <h3>
            <p onClick={props.breadcrumb}>Client Onboarding{">"}</p>View CLients
            {">"}
          </h3>
          <button onClick={addClientToggler} className={classes.button}>
            Add Client
          </button>
          <table>
            <tbody>
              <tr>
                <th>Name of Client</th>
                <th>Group Name</th>
                <th>PAN</th>
                <th>Onboarded On</th>
                {/* <th>Other</th> */}
                {/* <th>Actions</th> */}
              </tr>
              <tr>
                <td>Casino Park</td>
                <td>BEhdbn45</td>
                <td>2345</td>
                <td>4y9415y591</td>
                {/* <td>bviaivorebvoe</td>
                <td>
                  <RemoveRedEyeIcon className={classes.icon} />
                  <EditIcon className={classes.icon} />
                </td> */}
              </tr>
            </tbody>
          </table>
        </>
      )}

      {addClient && (
        <>
          <h3>
            <p onClick={props.breadcrumb}>Client Onboarding{">"}</p>Add CLient
            {">"}
          </h3>
          <AddClient />
        </>
      )}
    </div>
    </>
  );
};
