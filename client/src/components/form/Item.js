import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

//Bring in context
import FormContext from "../../context/form/formContext";

const Item = () => {
  const formContext = useContext(FormContext);

  const { items, modifyItem } = formContext;

  //Create items output list based on item State
  const itemOutput = items.map((item) => {
    return (
      <>
        <div className="row mt-4">
          <div className="col-lg-6 text-left">
            <h6>Description</h6>
            <textarea
              className="form-control mt-3"
              style={descriptionStyle}
              name="description"
              value={item.description}
              onChange={(e) => modifyItem(item.id, e)}
            />
          </div>
          <div className="col-lg-2 text-left">
            <h6>Amount</h6>
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
            <h6>Tax</h6>
            <button className="btn btn-warning  mt-2 form-control">
              Add Tax
            </button>
          </div>
          <div className="col-lg-1 my-auto text-left">
            <h4 className="text-danger mt-3">X</h4>
          </div>
        </div>

        <button className="btn btn-warning form-control mt-3">
          Add New Item
        </button>
      </>
    );
  });

  //Return the Above created itemOutput list that will  be added to the form and be dynamically displayed based on item state
  return itemOutput;
};

const descriptionStyle = {
  minHeight: "40px",
  borderRadius: "7px",
};

export default Item;
