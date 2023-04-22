import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from '@mui/icons-material/Close';

import classes from "./UploadData.module.css";

export const UploadData = (props) => {
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const [uploadFile, setUploadFile] = useState(false)
    const [fileinput, setFileinput] = useState(false)
    const [templateFileInput, setTemplateFileInput] = useState(false)
    const [popup, setPopup] = useState(false)
    const [customMapping, setCustomMapping] = useState(true)
    const [customMappingPopup, setCustomMappingPopup] = useState(false)

    const fileInputVisibilityToggler = () => {
      setFileinput(true)
      setTemplateFileInput(false)
    }
    const templateFileInputVisibilityToggler = () => {
      setTemplateFileInput(true)
      setCustomMapping(false)
    }

    const popupToggler = () => {
      setPopup((prevState)=>{return !prevState})
    }
  return (
    <>
    {customMappingPopup && <div className={classes.popup2}>
    <CloseIcon onClick={()=>{setCustomMappingPopup(false)}} style={{cursor: 'pointer',position:'absolute', top:'25px', right:'25px', fontSize:'3rem'}}/>
      <h1>Custom Mapping</h1>
      <main>

      
      <section>
        <select name="" id="">
          <option value="">Client Defined Field 1</option>
          <option value="">Value 1</option>
          <option value="">Value 2</option>
          <option value="">Value 3</option>
          <option value="">Value 4</option>
          <option value="">Value 5</option>
          <option value="">Value 6</option>
          <option value="">Value 7</option>
          <option value="">Value 8</option>
          <option value="">Value 9</option>
          <option value="">Value 10</option>
        </select>
        <select name="" id="">
          <option value="">Client Defined Field 2</option>
          <option value="">Value 1</option>
          <option value="">Value 2</option>
          <option value="">Value 3</option>
          <option value="">Value 4</option>
          <option value="">Value 5</option>
          <option value="">Value 6</option>
          <option value="">Value 7</option>
          <option value="">Value 8</option>
          <option value="">Value 9</option>
          <option value="">Value 10</option>
        </select>
        <select name="" id="">
          <option value="">Client Defined Field 3</option>
          <option value="">Value 1</option>
          <option value="">Value 2</option>
          <option value="">Value 3</option>
          <option value="">Value 4</option>
          <option value="">Value 5</option>
          <option value="">Value 6</option>
          <option value="">Value 7</option>
          <option value="">Value 8</option>
          <option value="">Value 9</option>
          <option value="">Value 10</option>
        </select>
        <select name="" id="">
          <option value="">Client Defined Field 4</option>
          <option value="">Value 1</option>
          <option value="">Value 2</option>
          <option value="">Value 3</option>
          <option value="">Value 4</option>
          <option value="">Value 5</option>
          <option value="">Value 6</option>
          <option value="">Value 7</option>
          <option value="">Value 8</option>
          <option value="">Value 9</option>
          <option value="">Value 10</option>
        </select>
        <select name="" id="">
          <option value="">Client Defined Field 5</option>
          <option value="">Value 1</option>
          <option value="">Value 2</option>
          <option value="">Value 3</option>
          <option value="">Value 4</option>
          <option value="">Value 5</option>
          <option value="">Value 6</option>
          <option value="">Value 7</option>
          <option value="">Value 8</option>
          <option value="">Value 9</option>
          <option value="">Value 10</option>
        </select>
        <select name="" id="">
          <option value="">Client Defined Field 6</option>
          <option value="">Value 1</option>
          <option value="">Value 2</option>
          <option value="">Value 3</option>
          <option value="">Value 4</option>
          <option value="">Value 5</option>
          <option value="">Value 6</option>
          <option value="">Value 7</option>
          <option value="">Value 8</option>
          <option value="">Value 9</option>
          <option value="">Value 10</option>
        </select>
        <select name="" id="">
          <option value="">Client Defined Field 7</option>
          <option value="">Value 1</option>
          <option value="">Value 2</option>
          <option value="">Value 3</option>
          <option value="">Value 4</option>
          <option value="">Value 5</option>
          <option value="">Value 6</option>
          <option value="">Value 7</option>
          <option value="">Value 8</option>
          <option value="">Value 9</option>
          <option value="">Value 10</option>
        </select>
        <select name="" id="">
          <option value="">Client Defined Field 8</option>
          <option value="">Value 1</option>
          <option value="">Value 2</option>
          <option value="">Value 3</option>
          <option value="">Value 4</option>
          <option value="">Value 5</option>
          <option value="">Value 6</option>
          <option value="">Value 7</option>
          <option value="">Value 8</option>
          <option value="">Value 9</option>
          <option value="">Value 10</option>
        </select>
        <select name="" id="">
          <option value="">Client Defined Field 9</option>
          <option value="">Value 1</option>
          <option value="">Value 2</option>
          <option value="">Value 3</option>
          <option value="">Value 4</option>
          <option value="">Value 5</option>
          <option value="">Value 6</option>
          <option value="">Value 7</option>
          <option value="">Value 8</option>
          <option value="">Value 9</option>
          <option value="">Value 10</option>
        </select>
        <select name="" id="">
          <option value="">Client Defined Field 10</option>
          <option value="">Value 1</option>
          <option value="">Value 2</option>
          <option value="">Value 3</option>
          <option value="">Value 4</option>
          <option value="">Value 5</option>
          <option value="">Value 6</option>
          <option value="">Value 7</option>
          <option value="">Value 8</option>
          <option value="">Value 9</option>
          <option value="">Value 10</option>
        </select>
      </section>
      <section>
        <label htmlFor="">System Defined Field 1</label>
        <label htmlFor="">System Defined Field 2</label>
        <label htmlFor="">System Defined Field 3</label>
        <label htmlFor="">System Defined Field 4</label>
        <label htmlFor="">System Defined Field 5</label>
        <label htmlFor="">System Defined Field 6</label>
        <label htmlFor="">System Defined Field 7</label>
        <label htmlFor="">System Defined Field 8</label>
        <label htmlFor="">System Defined Field 9</label>
        <label htmlFor="">System Defined Field 10</label>
      </section>
      </main>
      <button className={classes.button}>Submit</button>
    </div>}
    {popup && <div className={classes.popup}>
      <CloseIcon onClick={popupToggler} style={{cursor: 'pointer',position:'absolute', top:'25px', right:'25px', fontSize:'3rem'}}/>
      <h2>File Download</h2>
      <select name="" id="">
        <option value="">Select Report Type</option>
        <option value="">Sectional Analysis</option>
        <option value="">No TDS Report</option>
        <option value="">Error Report</option>
      </select>
      <button className={classes.button}>Download</button>
    </div>}
    <div className={classes.uploaddata}>
      <h3><p onClick={props.breadcrumb}>Transactions{'>'}</p>Upload Data{'>'}</h3>
      <div>
        {/* <label htmlFor="">PAN</label> */}
        <input type="text" disabled placeholder="Client PAN" name="" id="" />
        {/* <label htmlFor="">TAN</label> */}
        <input type="text" disabled placeholder="TAN" name="" id="" />
        {/* <label htmlFor="">Finanacial Year</label> */}
        <input
          type="text"
          disabled
          placeholder="Financial Year"
          name=""
          id=""
        />
      </div>

      {/* <span className={classes.uploaddate}>Upload Date : 18 April 2023</span> */}

      <section className={classes.mainsection}>
        <ul>
          <li>Invoice Data</li>
          <li>Advance Data</li>
          <li>Provision Data</li>
        </ul>
          <div className={classes.upload}>
            <span>
              <label htmlFor="custom">Custom File Upload</label>
              <input onChange={fileInputVisibilityToggler} type="radio" name="upload" id="custom" />
            </span>
            <span>
              <label htmlFor="template">Template File Upload</label>
              <input onChange={templateFileInputVisibilityToggler} type="radio" name="upload" id="template" />
            </span>
          </div>
          <div>
            {(fileinput||templateFileInput) && <input onChange={()=>{setUploadFile(true)}} type="file" placeholder="Upload" name="" id="" />}
            {uploadFile && customMapping && <button onClick={()=>{setCustomMappingPopup(true)}} className={classes.button}>Custom Mapping</button>}
            <select name="" id="">
              <option value="">Consolidated Report Download</option>
              <option value="">Section Analysis</option>
              <option value="">No TDS Report</option>
              <option value="">Error Report</option>
            </select>
            {/* <button className={classes.button}>Download Section Analysis Record</button> */}
            {templateFileInput && <p>Download Template</p>}
          </div>

          <table>
            <tbody>
              <tr>
                <th>Select</th>
                <th>File Name</th>
                <th>Uploaded By</th>
                <th>No. of Pages</th>
                <th>No. of Records</th>
                <th>Processed Records</th>
                <th>Error Records</th>
                <th>File Download</th>
                <th>Report Download</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
              {uploadFile && <tr>
                <td><input type="checkbox" name="" id="" /></td>
                <td>Uploaded File</td>
                <td>Harsh</td>
                <td>10</td>
                <td>100</td>
                <td>90</td>
                
                <td>12</td>
                <td><button>Download</button></td>
                <td><button onClick={popupToggler}>Download</button></td>
                <td>Uploaded</td>
                <td><RemoveRedEyeIcon className={classes.icon} />
                  <EditIcon className={classes.icon} /></td>
              </tr>}
              {arr.map((val,idx)=>{
                return(<tr id={idx}>
                <td><input type="checkbox" name="" id="" /></td>
                <td>Casino Royale</td>
                <td>Hello Bro</td>
                <td>20</td>
                <td>140</td>
                <td>40</td>
                
                <td>2</td>
                <td><button>Download</button></td>
                <td><button onClick={popupToggler}>Download</button></td>
                <td>Static</td>
                <td><RemoveRedEyeIcon className={classes.icon} />
                  <EditIcon className={classes.icon} /></td>
              </tr>
              )
              })}
              
            </tbody>
          </table>
        
      </section>
    </div>
    </>
  );
};
