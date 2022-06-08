import React,{useState} from "react";
import Popup from "reactjs-popup";
import { GrFormView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const TableAsset = () => {
  const [inpAsset, setInpAsset] = useState({
    ItemName: " ",
    Descripation: " ",
    Type: " ",
    Mode: " ",
    Vendor: " ",
    Receipt: " ",
    Price: " ",
    CostCode: " ",
    ProjectName: " ",
    OwnedBy: " ",
    OwnershipDocument: " ",
    DateOfPurchase: " "
  });

  const setAsset = (e) => {
   
    const { name, value } = e.target;
    setInpAsset((preval)=>{
      return{
        ...preval,
        [name]:value,
      };
    });
  };

  const addinpasset = async (e) => {
    e.preventDefault();

    const { ItemName, Descripation, Type, Mode, Vendor, Receipt, 
      Price, CostCode, ProjectName ,
      OwnedBy, OwnershipDocument ,DateOfPurchase } = inpAsset;

    const res = await fetch("http://localhost:5000/tableasset", {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
  },
    body: JSON.stringify({
      ItemName,Descripation,Type,Mode,Vendor,Receipt,Price,CostCode,ProjectName,
    OwnedBy,OwnershipDocument,DateOfPurchase
  })
    });
    const data = await res.json();
    console.log(data);

    if(res.status === 404 || !data){
      alert("error");
      console.log("error")
    }else {
      alert("data added");
      console.log("data aaded")
      
    }
  };

  return (
    <>
      <div className="addbutton">
        <Popup trigger={<button>+ADD</button>} position="bottom center">
          {(close) => (
            <div className="container">
              <form className="bg-light p-2 ">
                <div className="row p-2 ">
                  <div className="col form-inline p-2">
                    <label for="exampleInputEmail1">Item Name</label>
                    <input
                      type="text"
                      class="form-control"
                      required="required"
                      name="ItemName"
                      placeholder="Enter a phone number"
                      onChange={setAsset}
                      value={inpAsset.ItemName}
                      
                    />
                  </div>
                  <div className="col form-inline p-2">
                    <label for="exampleInputEmail1">Descripation</label>
                    <input
                      type="text"
                      class="form-control"
                      required="required"
                      name="Descripation"
                      placeholder="Enter a GST number"
                      onChange={setAsset}
                      value={inpAsset.Descripation}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-inline ">
                    <label for="exampleInputEmail1">Type</label>
                    <input
                      type="text"
                      class="form-control"
                      required="required"
                      name="Type"
                      placeholder="Enter a phone number"
                      onChange={setAsset}
                      value={inpAsset.Type}
                    />
                  </div>
                  <div className="col form-inline">
                    <label for="exampleInputEmail1">Mode</label>
                    <input
                      type="text"
                      class="form-control"
                      required="required"
                      name="Mode"
                      placeholder="Enter a GST number"
                      onChange={setAsset}
                      value={inpAsset.Mode}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-inline ">
                    <label for="exampleInputEmail1">Vendor</label>
                    <input
                      type="text"
                      class="form-control"
                      required="required"
                      name="Vendor"
                      placeholder="Enter a phone number"
                      onChange={setAsset}
                      value={inpAsset.Vendor}
                    />
                  </div>
                  <div className="col form-inline">
                    <label for="exampleInputEmail1">Receipt</label>
                    <input
                      type="text"
                      class="form-control"
                      required="required"
                      name="Receipt"
                      placeholder="Enter a GST number"
                      onChange={setAsset}
                      value={inpAsset.Receipt}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-inline ">
                    <label for="exampleInputEmail1">Price</label>
                    <input
                      type="text"
                      class="form-control"
                      required="required"
                      name="Price"
                      placeholder="Enter a phone number"
                      onChange={setAsset}
                      value={inpAsset.Price}
                    />
                  </div>
                  <div className="col form-inline">
                    <label for="exampleInputEmail1">Cost Code</label>
                    <input
                      type="text"
                      class="form-control"
                      required="required"
                      name="CostCode"
                      placeholder="Enter a GST number"
                      onChange={setAsset}
                      value={inpAsset.CostCode}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-inline ">
                    <label for="exampleInputEmail1">Projet Name</label>
                    <input
                      type="text"
                      class="form-control"
                      required="required"
                      name="ProjectName"
                      placeholder="Enter a phone number"
                      onChange={setAsset}
                      value={inpAsset.ProjectName}
                    />
                  </div>
                  <div className="col form-inline">
                    <label for="exampleInputEmail1">Owned By</label>
                    <input
                      type="text"
                      class="form-control"
                      required="required"
                      name="OwnedBy"
                      placeholder="Enter a GST number"
                      onChange={setAsset}
                      value={inpAsset.OwnedBy}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-inline ">
                    <label for="exampleInputEmail1">Ownership Document</label>
                    <input
                      type="text"
                      class="form-control"
                      required="required"
                      name="OwnershipDocument"
                      placeholder="Enter a phone number"
                      onChange={setAsset}
                      value={inpAsset.OwnershipDocument}
                    />
                  </div>
                  <div className="col form-inline">
                    <label for="exampleInputEmail1">Date Of Purchase</label>
                    <input
                      type="text"
                      class="form-control"
                      required="required"
                      name="DateOfPurchase"
                      placeholder="Enter a GST number"
                      onChange={setAsset}
                      value={inpAsset.DateOfPurchase}
                    />
                  </div>
                </div>

                <button type="submit" class="btn btn-primary" onClick={addinpasset}>
                  Submit
                </button>
              </form>
            </div>
          )}
        </Popup>
      </div>

      <div className="border border-success p-2 m-2 table-responsive">
        <table class="table table-light table-striped ">
          <thead>
            <tr className="text-center">
              <th scope="col">ID</th>
              <th scope="col">Item Name</th>
              <th scope="col">Descripation</th>
              <th scope="col">Type</th>
              <th scope="col">Mode</th>
              <th scope="col">Vendor</th>
              <th scope="col">Receipt</th>
              <th scope="col">Price</th>
              <th scope="col">Cost code</th>
              <th scope="col">Project Name</th>
              <th scope="col">Owned by</th>
              <th scope="col">Ownership Document</th>
              <th scope="col">Date Of Purhase</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-center">
              <th scope="row">id</th>
              <td>Item Name</td>
              <td>Descripation</td>
              <td>Type</td>
              <td>Mode</td>
              <td>vendor</td>
              <td>Receipt</td>
              <td>Price</td>
              <td>Cost Code</td>
              <td>Project Name</td>
              <td>Owned By</td>
              <td>Ownership Doument</td>
              <td>Date Of Purchase</td>

              <td className="d-flex justify-content-between">
              <NavLink to={"/tableassetdetails"}>
              <button className="btn btn-success">
                  <GrFormView />
                </button>
              </NavLink>
                
                <NavLink to={"/tableassetedit"}>
                <button className="btn btn-primary">
                  <FiEdit />
                </button>
                </NavLink>
            

                <button className="btn btn-danger">
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableAsset;
