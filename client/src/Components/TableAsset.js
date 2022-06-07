import React from "react";
import { posts } from "../data";

const TableAsset = () => {
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
          </div>
        ))}
      </div>
    </>
  );
};

export default TableAsset;
