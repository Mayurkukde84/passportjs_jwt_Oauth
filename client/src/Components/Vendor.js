import React from "react";

import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
// import { customAlphabet } from "nanoid";
// import { model } from "mongoose";
import { GrFormView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { NavLink,useHistory } from "react-router-dom";

const Vendor = () => {
  const history = useHistory("")
  const [vendors, setVendor] = useState([]);
  console.log(vendors);
  const [addFormData, setAddFormData] = useState({
    id: " ",
    VendorID: " ",
    VendorName: " ",
    PhoneNumber: " ",
    GSTNumber: " ",
    VendorType: " ",
    BankAccountDetails: " ",
    Address: " ",
  });

  const handleAddFormChange = (e) => {
    const { name, value } = e.target;
    setAddFormData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();
    const {
      id,
      VendorID,
      VendorName,
      PhoneNumber,
      GSTNumber,
      VendorType,
      BankAccountDetails,
      Address,
    } = addFormData;
    const res = await fetch("http://localhost:5000/tablevendor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        VendorID,
        VendorName,
        PhoneNumber,
        GSTNumber,
        VendorType,
        BankAccountDetails,
        Address,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      alert("error");
      console.log("error");
    } else {
      alert("data added");
      console.log("added data");
      history.go("/tablevendor")
    }
  };
  const getvendoruser = async (e) => {
    const res = await fetch("http://localhost:5000/getvendor", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setVendor(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getvendoruser();
  }, []);

  const vendordelet = async (id) =>{
    const res2 = await fetch(`http://localhost:5000/getvendordelet/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletdata = await res2.json();
    console.log(deletdata);

    if (res2.status === 422 || !deletdata){
      console.log("error")
      history.go("/tablevendor")
    }else{
      console.log("user deleted");
      getvendoruser(deletdata);
      history.go("/tablevendor")
      
    }
  }
  return (
    <>
      <div className="addbutton">
        <Popup trigger={<button>+ADD</button>} position="bottom center">
          {(close) => (
            <div className="container">
              <form className="bg-light p-2 ">
                <div className="row p-2">
                  {/* <div className="col form-group m-3 ">
                    <label for="exampleInputEmail1">ID</label>
                    <input
                      type="number"
                      value={addFormData.id}
                      class="form-control"
                      required="required"
                      name="id"
                      placeholder="Enter a ID"
                      onChange={(e) => handleAddFormChange(e)}
                    />
                  </div> */}
                  <div className="form-group m-3">
                    <label for="exampleInputEmail1">Vendor ID</label>
                    <input
                      type="number"
                      class="form-control"
                      required="required"
                      name="VendorID"
                      placeholder="Enter a ID"
                      onChange={handleAddFormChange}
                    />
                  </div>

                  <div className="col form-inline m-3">
                    <label for="exampleInputEmail1">Vendor Name</label>
                    <input
                      type="text"
                      value={addFormData.VendorName}
                      class="form-control"
                      required="required"
                      name="VendorName"
                      placeholder="Enter a vendor name"
                      onChange={(e) => handleAddFormChange(e)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-inline m-3">
                    <label for="exampleInputEmail1">Phone Number</label>
                    <input
                      type="text"
                      value={addFormData.PhoneNumber}
                      class="form-control"
                      required="required"
                      name="PhoneNumber"
                      placeholder="Enter a phone number"
                      onChange={(e) => handleAddFormChange(e)}
                    />
                  </div>
                  <div className="col form-inline m-3">
                    <label for="exampleInputEmail1">GST Number</label>
                    <input
                      type="text"
                      value={addFormData.GSTNumber}
                      class="form-control"
                      required="required"
                      name="GSTNumber"
                      placeholder="Enter a GST number"
                      onChange={(e) => handleAddFormChange(e)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-inline m-3">
                    <label for="exampleInputEmail1">Vendor Type</label>
                    <input
                      type="text"
                      value={addFormData.VendorType}
                      class="form-control"
                      required="required"
                      name="VendorType"
                      placeholder="Enter a vendor type"
                      onChange={(e) => handleAddFormChange(e)}
                    />
                  </div>
                  <div className="col form-inline m-3">
                    <label for="exampleInputEmail1">Bank Details</label>
                    <input
                      type="text"
                      value={addFormData.BankAccountDetails}
                      class="form-control"
                      required="required"
                      name="BankAccountDetails"
                      placeholder="Enter a account details"
                      onChange={(e) => handleAddFormChange(e)}
                    />
                  </div>
                </div>
                <div className="col form-inline m-3">
                  <label for="exampleInputEmail1">Address</label>
                  <input
                    type="text"
                    value={addFormData.Address}
                    class="form-control"
                    required="required"
                    name="Address"
                    placeholder="Enter a account details"
                    onChange={(e) => handleAddFormChange(e)}
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={addinpdata}
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </Popup>
      </div>

      <div className="border border-success p-2 m-2">
        <table class="table table-light table-striped">
          <thead>
            <tr className="text-center">
              <th scope="col">ID</th>
              <th scope="col">VendorID</th>
              <th scope="col">Vendor Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">GST Number</th>
              <th scope="col">Vendor Number</th>
              <th scope="col">Bank Account Details</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {vendors.map((vendor, id) => (
              <tr className="text-center">
                <th scope="row">{id + 1}</th>
                <td>{vendor.VendorID}</td>
                <td>{vendor.VendorName}</td>
                <td>{vendor.PhoneNumber}</td>
                <td>{vendor.GSTNumber}</td>
                <td>{vendor.VendorType}</td>
                <td>{vendor.BankAccountDetails}</td>
                <td>{vendor.Address}</td>
                <td className="d-flex justify-content-between">
                  <NavLink to={`/getvendor/${vendor._id}`}>
                    <button className="btn btn-success">
                      <GrFormView />
                    </button>
                  </NavLink>
                  <NavLink to={`/getvendoredit/${vendor._id}`}>
                  <button className="btn btn-primary">
                    <FiEdit />
                    </button>

                  </NavLink>
                    
              
                 <button className="btn btn-danger" onClick={()=>vendordelet(vendor._id)} ><AiFillDelete /></button>
                 
                  
                  
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Vendor;
