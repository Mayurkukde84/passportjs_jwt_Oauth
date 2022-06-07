
import React,{useState,useEffect} from 'react'
import { useParams,useHistory } from 'react-router';
const VendorEdit = () => {
    // const [getvendor,setVendor] = useState([ ])
    const history = useHistory("")

    const [addFormData, setAddFormData] = useState({
       
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
      const {id } = useParams (" ")
      console.log(id)
     
      const vendoruser = async () => {
          const res = await fetch(`http://localhost:5000/getvendor/${id}`, {
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
            setAddFormData(data);
            console.log("get data");
          }
        };
  
        useEffect(() => {
            vendoruser();
        }, []);


        const updatevendor = async(e) =>{
            e.preventDefault();
            const{
                
                VendorName,
                PhoneNumber,
                GSTNumber,
                VendorType,
                BankAccountDetails,
                Address
              } =addFormData;
            const res2 = await fetch(`http://localhost:5000/getvendoredit/${id}`,{
                method:"PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({
                   
                    VendorName,
                    PhoneNumber,
                    GSTNumber,
                    VendorType,
                    BankAccountDetails,
                    Address
                })
            })
            const data2 = await res2.json();
            console.log(data2)

            if(res2.status === 422 || !data2){
                alert("fill the data")
               
            }else{
                alert("data added")
                setAddFormData(data2)
                history.push("/tablevendor")
                
            }
        }

         

  return (
    <>
        <div>
      
          
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
                  {/* <div className="form-group m-3">
                    <label for="exampleInputEmail1">Vendor ID</label>
                    <input
                      type="number"
                      class="form-control"
                      required="required"
                      name="VendorID"
                      placeholder="Enter a ID"
                      onChange={handleAddFormChange}
                    />
                  </div> */}

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
                  onClick={updatevendor}
                >
                  Submit
                </button>
              </form>
            </div>
        
        
      </div>
    </>
  )
}

export default VendorEdit