import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { GrFormView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { NavLink, useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
import sample from "../images/2b632f3f-477e-4b43-b782-da94d8e46d4d-1657187715035.pdf"
import axios from "axios";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";

import { mediaUrl } from "../config";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;
const TableAsset = () => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };  
  
  const history = useHistory("");
  const [getVendor, setVendor] = useState([]);
  const [getCostCode, setCostCode] = useState([]);
  const [getAssetData, setAssetData] = useState([]);

  // model.id = nanoid()

  console.log(getAssetData);
  const [inpAsset, setInpAsset] = useState({
    ItemName: " ",
    ID: nanoid(5),
    Barcode: " ",
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
    const { name, value } = e.target;
    setInpAsset((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const handlePhoto = (e) => {
    setInpAsset({ ...inpAsset, OwnershipDocument: e.target.files[0] });
    console.log(inpAsset.OwnershipDocument);
  };

  const addinpasset = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("ID", inpAsset.ID);
    formData.append("Barcode", inpAsset.Barcode);
    formData.append("ItemName", inpAsset.ItemName);
    formData.append("Descripation", inpAsset.Descripation);
    formData.append("Type", inpAsset.Type);
    formData.append("Mode", inpAsset.Mode);
    formData.append("Vendor", inpAsset.Vendor);
    formData.append("Receipt", inpAsset.Receipt);
    formData.append("Price", inpAsset.Price);
    formData.append("CostCode", inpAsset.CostCode);
    formData.append("ProjectName", inpAsset.ProjectName);
    formData.append("OwnedBy", inpAsset.OwnedBy);
    formData.append("OwnershipDocument", inpAsset.OwnershipDocument);
    formData.append("DateOfPurchase", inpAsset.DateOfPurchase);
    console.log(inpAsset.OwnershipDocument);

    axios
      .post("http://localhost:5000/tableasset", formData)
      .then((res) => {
        console.log(res);
        history.go("/tableasset");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addgetasset = async (e) => {
    const res = await fetch("http://localhost:5000/getasset", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        type: "application/pdf",
      },
    });
    const data1 = await res.json();

    if (res.status === 422 || !data1) {
      alert("error");
    } else {
      setAssetData(data1);
    }
  };

  useEffect(() => {
    addgetasset();
  }, []);

  useEffect(() => {
    const vendor = async () => {
      const res = await fetch("http://localhost:5000/getvendor");
      const getres = await res.json();

      setVendor(await getres);
    };
    vendor();
  }, []);
  useEffect(() => {
    const costcode = async () => {
      const res = await fetch(`http://localhost:5000/getproject`);
      const getres1 = await res.json();

      setCostCode(await getres1);
    };
    costcode();
  }, []);

  const assetdelet = async (id) => {
    const res2 = await fetch(`http://localhost:5000/getassetdelet/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletdata = await res2.json();

    if (res2.status === 422 || !deletdata) {
      console.log("error");
    } else {
      addgetasset(deletdata);
      history.go("/tableasset");
    }
  };

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <>
      <div className="addbutton">
        <Popup
          trigger={
            <button style={{ color: "white", background: "#5E4DAB" }}>
              +ADD
            </button>
          }
          position="bottom right"
        >
          {(close) => (
            <div className="container">
              <form
                className="bg-light p-2 border border-warning"
                onSubmit={addinpasset}
                enctype="multipart/form-data"
              >
                <div className="row p-2 ">
                  <div className="col form-inline p-2">
                    <label for="exampleInputEmail1">Item Name</label>
                    <input
                      type="hidden"
                      class="form-control"
                      required="required"
                      name="ItemName"
                      placeholder="Enter a phone number"
                      onChange={setAsset}
                      value={inpAsset.ID}
                    />

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
                  <div className="col form-inline">
                    <label for="exampleInputEmail1">Date Of Purchase</label>
                    <input
                      type="date"
                      class="form-control"
                      required="required"
                      name="DateOfPurchase"
                      placeholder="Enter a GST number"
                      onChange={setAsset}
                      value={inpAsset.DateOfPurchase}
                    />
                  </div>

                  <div className="col form-inline">
                    <label for="exampleInputEmail1">Mode</label>
                    <select
                      type="text"
                      class="form-control"
                      required="required"
                      name="Mode"
                      placeholder="Enter a GST number"
                      onChange={setAsset}
                      value={inpAsset.Mode}
                    >
                      <option>---select Mode---</option>
                      <option>Online</option>
                      <option>Offline</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col form-inline ">
                    <label for="exampleInputEmail1">Vendor</label>
                    <select
                      className="form-control p-2"
                      name="Vendor"
                      onChange={setAsset}
                      value={inpAsset.Vendor}
                    >
                      <option> ---select Mode---</option>
                      {getVendor.map((vendors, index) => {
                        return (
                          <option key={index} name="Vendor">
                            {vendors.VendorName}
                          </option>
                        );
                      })}
                    </select>
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
                    <div className="col form-inline ">
                      <label for="exampleInputEmail1">CostCode</label>
                      <select
                        className="form-control p-2"
                        name="CostCode"
                        onChange={setAsset}
                        value={inpAsset.CostCode}
                      >
                        <option> ---select---</option>

                        {getCostCode.map((code, index) => {
                          return (
                            <>
                              <option key={index} name="CostCode">
                                {code.CostCode}
                              </option>
                            </>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col form-inline ">
                    <label for="exampleInputEmail1">ProjectName</label>
                    <select
                      className="form-control p-2"
                      name="ProjectName"
                      onChange={setAsset}
                      value={inpAsset.ProjectName}
                    >
                      <option> ---select---</option>
                      {getCostCode.map((code, index) => {
                        return (
                          <option key={index} name="CostCode">
                            {code.ProjectName}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="col form-inline ">
                    <label for="exampleInputEmail1">OwnedBy</label>
                    <select
                      className="form-control p-2"
                      name="OwnedBy"
                      onChange={setAsset}
                      value={inpAsset.OwnedBy}
                    >
                      <option> ---select Mode---</option>
                      {getCostCode.map((code, index) => {
                        return (
                          <option key={index} name="OwnedBy">
                            {code.Owner}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col form-inline ">
                    <label for="exampleInputEmail1">Ownership Document</label>
                    <input
                      type="file"
                      name="OwnershipDocument"
                      accept="application/pdf"
                      onChange={handlePhoto}
                    />
                  </div>

                  <div className="col form-inline ">
                    <label for="exampleInputEmail1">Type</label>
                    <select
                      class="form-control form-control-sm"
                      type="text"
                      // class="form-control"
                      required="required"
                      name="Type"
                      placeholder="Enter a phone number"
                      onChange={setAsset}
                      value={inpAsset.Type}
                    >
                      <option selected>Choose...</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="Consumable">Consumable</option>
                      <option value="Hardware">Hardware</option>
                      <option value="Software">Software</option>
                      <option value="Laptop">Laptop</option>
                    </select>
                    {/* <input
                      type="text"
                      class="form-control"
                      required="required"
                      name="Type"
                      placeholder="Enter a phone number"
                      onChange={setAsset}
                      value={inpAsset.Type}

                    
                    /> */}
                  </div>
                </div>

                <button type="submit" class="btn btn-primary">
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
              <th scope="col">ID</th>
              <th scope="col">Barcode</th>
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
            {getAssetData.map((element, id) => {
              return (
                <>
                  <tr className="text-center">
                    <th scope="row">{id + 1}</th>
                    <td>{element.ID}</td>
                    <td>{element.Barcode}</td>
                    <td>{element.ItemName}</td>
                    <td>{element.Descripation}</td>
                    <td>{element.Type}</td>
                    <td>{element.Mode}</td>
                    <td>{element.Vendor}</td>
                    <td>{element.Receipt}</td>
                    <td>{element.Price}</td>
                    <td>{element.CostCode}</td>
                    <td>{element.ProjectName}</td>
                    <td>{element.OwnedBy}</td>
                    {/* <td><Document file={`${mediaUrl}/${element.OwnershipDocument}`}>
                    <Page pageNumber={pageNumber} />

                    </Document></td>  */}
                    <td><button onClick={() => openInNewTab(`${mediaUrl}/${element.OwnershipDocument}`)}>OwnershipDocument View</button></td>
                    {/* <td><Document file={sample}>
                    <Page pageNumber={pageNumber} />

                    </Document>

                    </td> */}

                    <td>{element.DateOfPurchase}</td>

                    <td>
                      <div className="d-flex justify-content-between">
                        <NavLink to={`/tableassetdetails/${element._id}`}>
                          <button className="border border-dark btn btn-white">
                            <GrFormView />
                          </button>
                        </NavLink>

                        <NavLink to={`/tableassetedit/${element._id}`}>
                          <button className="border border-dark btn btn-primary">
                            <FiEdit />
                          </button>
                        </NavLink>
                        <span>
                          <button
                            className="border border-dark btn btn-danger"
                            onClick={() => assetdelet(element._id)}
                          >
                            <AiFillDelete />
                          </button>
                        </span>
                      </div>
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

export default TableAsset;
