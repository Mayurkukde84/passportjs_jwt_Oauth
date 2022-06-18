import React,{useState,useEffect} from "react";
import { useParams,useHistory } from "react-router";

const TableAssetEdit = () => {
  const {id} = useParams(" ")
  const history = useHistory("")
    const [inpAsset, setInpAsset] = useState({
        ItemName: " ",
        Barcode:" ",
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

      const addgetasset = async (e) => {
        const res = await fetch(`http://localhost:5000/getasset/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data1 = await res.json();
        console.log(data1);
    
        if (res.status === 422 || !data1) {
          alert("error");
          console.log("error");
        } else {
          setInpAsset(data1);
          console.log("data aaded");
      
        }
      };
    
      useEffect(() => {
        addgetasset();
      }, []);

      const updateasset = async(e) =>{
        e.preventDefault();
        const{
            
          ItemName,Descripation,Type,Mode,Vendor,Receipt,Price,CostCode,ProjectName,
          OwnedBy,OwnershipDocument,DateOfPurchase,Barcode
          } =inpAsset;
        const res2 = await fetch(`http://localhost:5000/getassetedit/${id}`,{
            method:"PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
               
              ItemName,Descripation,Type,Mode,Vendor,Receipt,Price,CostCode,ProjectName,
              OwnedBy,OwnershipDocument,DateOfPurchase,Barcode
            })
        })
        const data2 = await res2.json();
        console.log(data2)

        if(res2.status === 422 || !data2){
            alert("fill the data")
           
        }else{
            alert("data added")
            setInpAsset(data2)
            history.push("/tableasset")
            
            
        }
    }
    
 
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
                    <label for="exampleInputEmail1">Barcode</label>
                    <input
                      type="number"
                      class="form-control"
                      
                      name="Barcode"
                      placeholder="Scan Barcode"
                      onChange={setAsset}
                      value={inpAsset.Barcode}
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
                  onClick={updateasset}
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