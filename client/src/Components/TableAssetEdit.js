import React,{useState} from "react";
import { posts } from "../data";

const TableAssetEdit = () => {
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
        DateOfPurchase: " ",
      });
    
      const setAsset = (e) => {
        console.log(e.target.value);
        const {name,value} = e.target;
        setInpAsset((preval)=>{
          return{
            ...preval,
            [name]:value
          }
        })
      };
    
 
  return (
    <>
        <div>
      
          
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

                <button
                  type="submit"
                  class="btn btn-primary mt-3"
                  
                >
                  Submit
                </button>
              </form>
            </div>
        
        
      </div>
    </>
  );
};

export default TableAssetEdit;