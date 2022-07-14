import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { GrFormView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { NavLink, useHistory } from "react-router-dom";
const Employee = () => {
  const [getEmployeeData, setEmployeeData] = useState([]);
  const history = useHistory("");

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

  const addinpemployee = async (e) => {
    e.preventDefault();

    const { Name, EmployeeID, Department, PhoneNumber, Address } = inpEmployee;

    const res = await fetch("http://localhost:5000/tableemployee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        EmployeeID,
        Department,
        PhoneNumber,
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
      console.log("data aaded");
      history.go("/tableemployee");
    }
  };

  const addgetemployee = async (e) => {
    const res = await fetch("http://localhost:5000/getemployee", {
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
      console.log("data aaded");
      setEmployeeData(data1);
    }
  };

  useEffect(() => {
    addgetemployee();
  }, []);
  const employeedelet = async (id) => {
    const res2 = await fetch(`http://localhost:5000/getemployeedelet/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletdata = await res2.json();
    console.log(deletdata);

    if (res2.status === 422 || !deletdata) {
      console.log("error");
      history.go("/tableemployee");
    } else {
      console.log("user deleted");
      addgetemployee(deletdata);
      history.push("/tableemployee");
    }
  };

  return (
    <>
      <div className="addbutton">
        <Popup  trigger={<button style={{"color":"white","background":"#5E4DAB"}}>+ADD</button>} position="bottom center">
          {(close) => (
            <div className="container">
              <form className="bg-light p-2 border border-warning">
                <div className="row p-2 ">
                  <div className="col form-inline p-2">
                    <label for="exampleInputEmail1"> Name</label>
                    <input
                      type="text"
                      class="form-control"
                      required="required"
                      name="Name"
                      placeholder="Enter a name"
                      value={inpEmployee.Name}
                      onChange={setEmployee}
                    />
                  </div>
                  <div className="col form-inline p-2">
                    <label for="exampleInputEmail1">ID</label>
                    <input
                      type="number"
                      class="form-control"
                      required="required"
                      name="EmployeeID"
                      placeholder="Enter a ID"
                      value={inpEmployee.ID}
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
                      placeholder="Enter a department"
                      value={inpEmployee.Department}
                      onChange={setEmployee}
                    />
                  </div>
                  <div className="col form-inline">
                    <label for="exampleInputEmail1">Phone Number</label>
                    <input
                      type="number"
                      class="form-control"
                      required="required"
                      name="PhoneNumber"
                      placeholder="Enter a Phone Number"
                      value={inpEmployee.PhoneNumber}
                      onChange={setEmployee}
                    />
                  </div>
                </div>

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

                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={addinpemployee}
                >
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
              <th scope="col">Sr.No.</th>
              <th scope="col">Name</th>
              <th scope="col">EmployeeID</th>
              <th scope="col">Department</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {getEmployeeData.map((employee, id) => {
              return (
                <>
                  <tr className="text-center">
                    <th scope="row">{id + 1} </th>
                    <td>{employee.Name}</td>
                    <td>{employee.EmployeeID}</td>
                    <td>{employee.Department}</td>
                    <td>{employee.PhoneNumber}</td>
                    <td>{employee.Address}</td>
                    <td className="d-flex justify-content-between">
                      <NavLink to={`/tableemployeedetails/${employee._id}`}>
                        <button className="btn btn-white border border-dark mt-2">
                          <GrFormView />
                        </button>
                      </NavLink>
                      <NavLink to={`/tableemployeeedit/${employee._id}`}>
                        <button className="btn btn-white border btn btn-primary mt-2">
                          <FiEdit />
                        </button>
                      </NavLink>
                      <span>
                        <button
                          className="btn btn-white border btn btn-danger m-2 "
                          onClick={() => employeedelet(employee._id)}
                        >
                          <AiFillDelete />
                        </button>
                      </span>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Employee;
