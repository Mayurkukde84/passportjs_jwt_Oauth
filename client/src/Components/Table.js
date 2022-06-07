import React from "react";

import { posts } from "../data";
const Table = () => {
  return (
    <>
      <div>
        {posts.map((post) => (
          <div className="border border-success p-2 m-5">
            <h3 className="text-center">{post.Heading}</h3>
            <table class="table table-striped table-hover table-bordered  ">
              <tbody>
                <tr>
                  <th scope="row" className="col-5">
                    ID
                  </th>
                  <td className="col-5">{post.ID}</td>
                </tr>
                <tr>
                  <th scope="row">Barcode</th>
                  <td>{post.Barcode}</td>
                </tr>
                <tr>
                  <th scope="row">ItemName</th>
                  <td colspan="2">{post.ItemName}</td>
                </tr>
                <tr>
                  <th scope="row">Descripation</th>
                  <td>{post.Descripation}</td>
                </tr>
                <tr>
                  <th scope="row">Type</th>
                  <td>{post.Type}</td>
                </tr>
                <tr>
                  <th scope="row">Mode</th>
                  <td colspan="2">{post.Mode}</td>
                </tr>
                <tr>
                  <th scope="row">Vendor</th>
                  <td>{post.Vendor}</td>
                </tr>
                <tr>
                  <th scope="row">Receipt</th>
                  <td>{post.Receipt}</td>
                </tr>
                <tr>
                  <th scope="row">Price</th>
                  <td colspan="2">{post.Price}</td>
                </tr>
                <tr>
                  <th scope="row">Cost Code</th>
                  <td>{post.CostCode}</td>
                </tr>
                <tr>
                  <th scope="row">Project Name</th>
                  <td>{post.ProjectName}</td>
                </tr>
                <tr>
                  <th scope="row">Owned By :</th>
                  <td colspan="2">{post.OwnedBy}</td>
                </tr>
                <tr>
                  <th scope="row">Ownership Document</th>
                  <td colspan="2">{post.OwnershipDocument}</td>
                </tr>
                <tr>
                  <th scope="row">Date Of Purchase</th>
                  <td>{post.DateOfPurchase}</td>
                </tr>

                
               
              </tbody>
            </table>

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

            <h3 className="text-center ">Table Vendor</h3>
            <table className="table table-striped table-hover table-bordered">
            <tbody>
            <tr >
                  <th scope="row" className="col-5" >TableVendor</th>
                  <td colspan="2" className="col-5">{post.PhoneNumber}</td>
                </tr>
                <tr>
                  <th scope="row">Vendor ID</th>
                  <td colspan="2">{post.VendorID}</td>
                </tr>
                <tr>
                  <th scope="row">Vendor Name</th>
                  <td colspan="2">{post.VendorName}</td>
                </tr>
                <tr>
                  <th scope="row">PhoneNumber</th>
                  <td colspan="2">{post.PhoneNumber2}</td>
                </tr>
                <tr>
                  <th scope="row">GSTNumber</th>
                  <td colspan="2">{post.GSTNumber}</td>
                </tr>
                <tr>
                  <th scope="row">Vendor Type</th>
                  <td colspan="2">{post.VendorType}</td>
                </tr>
                <tr>
                  <th scope="row">Bank Account Details</th>
                  <td colspan="2">{post.BankAccountDetails}</td>
                </tr>
                <tr>
                  <th scope="row">Address</th>
                  <td colspan="2">{post.Address2}</td>
                </tr>

            </tbody>
            

            </table>
            
            
                
              
          </div>
        ))}
      </div>
    </>
  );
};

export default Table;
