import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

//Bring in layout components
import TaxModal from "../modals/TaxModal";

//Bring in context
import FormContext from "../../context/form/formContext";

const Item = () => {
  //Modal state for modal display
  const [taxModalShow, setTaxModalShow] = useState(false);

  const formContext = useContext(FormContext);

  const { items, modifyItem, removeItem, addTaxID } = formContext;

  //Create handleTaxModal to add active taxID + display tax modal
  const handleTaxModal = async (item) => {
    await addTaxID(item.id);
    setTaxModalShow(true);
  };

  //Create items output list based on item State
  const itemOutput = items.map((item) => {
    return (
      <>
        <div className="row mt-4">
          <div className="col-lg-6 col-md-6  text-left mt-3">
            <div className="d-flex">
              <i className="fas fa-pen pl-2 pr-2 pt-1"></i>
              <h6>
                <strong>Item Description</strong>
                <i
              className="fa fa-times pl-2 pr-2 pt-1 text-danger delete d-sm-none ml-4"
              onClick={() => removeItem(item.id)}
            ></i>
              </h6>
            </div>
            <textarea
              className="form-control mt-1"
              style={descriptionStyle}
              name="description"
              value={item.description}
              onChange={(e) => modifyItem(item.id, e)}
            />
          </div>
          <div className="col-lg-2 col-md-2 text-left mt-3">
            <h6>
              <strong>Amount</strong>
            </h6>
            <input
              type="number"
              className="form-control mt-1 "
              placeholder="0.0"
              name="amount"
              value={item.amount}
              onChange={(e) => modifyItem(item.id, e)}
            />
          </div>
          <div className="col-lg-3 col-md-3 text-left mt-1">
            <h6>
              <strong>Tax</strong>
            </h6>
            {item.tax === null ? (
              <div
                className="btn btn-primary form-control  mt-3 "
                style = {btnStyle}
                onClick={() => handleTaxModal(item)}
              >
                Add Tax
              </div>
            ) : (
              <h4 className="mt-3 text-danger">{item.tax}%</h4>
            )}
          </div>
          <div className="col-lg-1 col-md-1 my-auto text-left mt-3">
            <i
              className="fa fa-times pl-2 pr-2 pt-1 text-danger delete d-none d-sm-block"
              onClick={() => removeItem(item.id)}
            ></i>
          </div>

          <TaxModal
            show={taxModalShow}
            onHide={() => setTaxModalShow(false)}
            setTaxModalShow={setTaxModalShow}
          />
        </div>
      </>
    );
  });

  //Return the Above created itemOutput list that will  be added to the form and be dynamically displayed based on item state
  return itemOutput;
};

//Create style vars

const descriptionStyle = {
  minHeight: "40px",
  borderRadius: "7px",
};

const btnStyle = {
  backgroundColor:'rgb(108, 99, 255) ',
  border:'none'
}

export default Item;
