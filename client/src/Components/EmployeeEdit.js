import React,{useState,useEffect} from "react";
import { useParams,useHistory } from "react-router";
const EmployeeEdit = () => {
 
 const {id} = useParams(" ")
 const history = useHistory("")
  const [inpEmployee, setInpEmployee] = useState({
    Name: " ",
    EmployeeID: " ",
    Department: " ",
    PhoneNumber: " ",
    Address: " ",
  });

  const setEmployee = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setInpEmployee((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  

  const addgetemployee = async (e) => {
    const res = await fetch(`http://localhost:5000/getemployee/${id}`, {
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
      setInpEmployee(data1);
      console.log("data aaded");
  
    }
  };

  useEffect(() => {
    addgetemployee();
  }, []);

  const updateemployee = async(e) =>{
    e.preventDefault();
    const{
        
      Name,EmployeeID,Department,PhoneNumber,Address
      } =inpEmployee;
    const res2 = await fetch(`http://localhost:5000/getemployeeedit/${id}`,{
        method:"PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
           
          Name,EmployeeID,Department,PhoneNumber,Address
        })
    })
    const data2 = await res2.json();
    console.log(data2)

    if(res2.status === 422 || !data2){
        alert("fill the data")
       
    }else{
        alert("data added")
        setInpEmployee(data2)
        history.push("/tableemployee")
        
        
    }
}


  return (
    <>
      <div>
        <div className="container">
          <form className="bg-light p-2 ">
            <div className="row p-2 ">
              <div className="col form-inline p-2">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  required="required"
                  name="Name"
                  placeholder="Enter a phone number"
                  value={inpEmployee.Name}
                  onChange={setEmployee}
                  
                />
              </div>
              <div className="col form-inline p-2">
                <label for="exampleInputEmail1">EmployeeID</label>
                <input
                  type="text"
                  class="form-control"
                  required="required"
                  name="EmployeeID"
                  placeholder="Enter a EmployeeID"
                  value={inpEmployee.EmployeeID}
                  onChange={setEmployee}
                />
              </div>
            </div>
            <div className="row">
              <div className="col form-inline ">
                <label for="exampleInputEmail1">Department</label>
                <input
                  type="text"
                  class="form-control"
                  required="required"
                  name="Department"
                  placeholder="Enter a Department"
                  value={inpEmployee.Department}
                  onChange={setEmployee}
                />
              </div>
              <div className="col form-inline">
                <label for="exampleInputEmail1">PhoneNumber</label>
                <input
                  type="text"
                  class="form-control"
                  required="required"
                  name="PhoneNumber"
                  placeholder="Enter a phone number"
                  value={inpEmployee.PhoneNumber}
                  onChange={setEmployee}
                />
              </div>
            </div>
            <div className="row">
              <div className="col form-inline ">
                <label for="exampleInputEmail1">Address</label>
                <input
                  type="text"
                  class="form-control"
                  required="required"
                  name="Address"
                  placeholder="Enter a Address"
                  value={inpEmployee.Address}
                  onChange={setEmployee}
                />
              </div>
            </div>

            <button
              type="submit"
              class="btn btn-primary mt-3"
              onClick={updateemployee}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployeeEdit;
