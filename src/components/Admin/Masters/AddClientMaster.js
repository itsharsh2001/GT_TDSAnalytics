import React, { useState } from "react";
import { ClickCard } from "../../UI/ClickCard";

import classes from "./AddClientMaster.module.css";
import { TANLevelMasters } from "./TANLevelMasters";

export const AddClientMaster = (props) => {
  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  const [tanlevelmasters, setTanlevelmasters] = useState(false)

  const tanlevelmastersToggler = () => {
    setTanlevelmasters((prevState)=>{return !prevState})
  }
  return (
    <div className={classes.addclientmaster}>
      {!tanlevelmasters &&<> <h3>
        <p onClick={props.masterbreadcrumb}>Masters{">"}</p>
        <p onClick={props.breadcrumb}>Client Level Masters{">"}</p>Add Master
        {">"}
      </h3>
      {/* <select name="" id="">
        <option value="">Select Category</option>
        <option value="">12</option>
        <option value="">23</option>
        <option value="">34</option>
      </select> */}

      <h5>PAN Level Masters</h5>
      <section>
        <ClickCard title="Vendor Master (PAN Level)" />
        <ClickCard title="Keyword Repository" />
        <ClickCard title="LDC Master" />
      </section>
      <h5>TAN Level Masters</h5>
      <table>
        <tbody>
        <tr>
          <th>TAN</th>
          <th>Action</th>
        </tr>
        {arr.map((val,idx)=>{
                return(<tr id={idx}>
                <td>1234</td>
                <td>
                  {/* <RemoveRedEyeIcon className={classes.icon} />
                  <EditIcon className={classes.icon} /> */}
                  <button onClick={tanlevelmastersToggler} className={classes.button}>Add Master</button>
                </td>
              </tr>)
              })}
        </tbody>
      </table>

      
      {/* <section>
        <ClickCard onClick={tdsconfigToggler} title="TDS Configuration" />
        <ClickCard title="GL Master" />
        <ClickCard title="MSN/SAC Master" />
      </section> */}
      </>}

      {tanlevelmasters && <TANLevelMasters masterbreadcrumb={props.masterbreadcrumb} breadcrumb={props.breadcrumb} subbreadcrumb={tanlevelmastersToggler}/>}
    </div>
  );
};
