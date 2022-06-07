import React from "react";
import { posts } from "../data";
const TableEmployee = () => {
  return (
    <>
      <div>
        {posts.map((post) => (
          <div className="border border-success p-2 m-5">
            <h3 className="text-center">Table Employee</h3>
            <table className="table table-striped table-hover table-bordered ">
              <tbody>
                <tr>
                  <th scope="row" className="col-5">
                    Table Employee
                  </th>
                  <td className="col-5">{post.TableEmployee}</td>
                </tr>
                <tr>
                  <th scope="row">Name</th>
                  <td>{post.Name}</td>
                </tr>
                <tr>
                  <th scope="row">Depatment</th>
                  <td colspan="2">{post.Department}</td>
                </tr>
                <tr>
                  <th scope="row">Phone Number</th>
                  <td colspan="2">{post.PhoneNumber}</td>
                </tr>
                <tr>
                  <th scope="row">Address</th>
                  <td colspan="2">{post.Address}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
};

export default TableEmployee;
