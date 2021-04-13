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
          <div className="col-lg-6 text-left">
            <div className="d-flex">
              <i className="fas fa-pen pl-2 pr-2 pt-1"></i>
              <h6>
                <strong>Description</strong>
              </h6>
            </div>
            <textarea
              className="form-control mt-2"
              style={descriptionStyle}
              name="description"
              value={item.description}
              onChange={(e) => modifyItem(item.id, e)}
            />
          </div>
          <div className="col-lg-2 text-left">
            <h6>
              <strong>Amount</strong>
            </h6>
            <input
              type="number"
              className="form-control mt-3 "
              placeholder="0.0"
              name="amount"
              value={item.amount}
              onChange={(e) => modifyItem(item.id, e)}
            />
          </div>
          <div className="col-lg-3 text-left">
            <h6>
              <strong>Tax</strong>
            </h6>
            {item.tax === null ? (
              <div
                className="btn btn-outline-primary  mt-2 form-control"
                onClick={() => handleTaxModal(item)}
              >
                Add Tax
              </div>
            ) : (
              <h4 className="mt-3 text-danger">{item.tax}%</h4>
            )}
          </div>
          <div className="col-lg-1 my-auto text-left">
            <i
              className="fas fa-trash pl-2 pr-2 pt-1 text-danger delete"
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

export default Item;
