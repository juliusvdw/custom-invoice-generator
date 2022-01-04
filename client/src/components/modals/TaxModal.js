import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//Bring in context
import FormContext from "../../context/form/formContext";

const TaxModal = (props) => {
  //Store taxAmount state
  const [taxAmount, setTaxAmount] = useState(null);

  const formContext = useContext(FormContext);

  const { addTax, activeTaxID } = formContext;

  //addTax func
  const addTaxHandler = async (activeTaxID, taxAmount) => {
    try {
      await addTax(activeTaxID, taxAmount);
      props.setTaxModalShow(false);
      return;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation
    >
      <Modal.Header closeButton className=" text-center">
        <Modal.Title id="contained-modal-title-vcenter text-center">
          <div className="mx-auto">
            <h2 className="mx-auto">Add Tax</h2>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ height: "110px", marginTop: "15px" }}
        className="mx-auto "
      >
        <input
          style={inputStyle}
          type="number"
          placeholder="Tax percentage"
          className="form-control mb-4"
          name="taxAmount"
          value={taxAmount}
          onChange={(e) => setTaxAmount(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="submit"
          className="form-control w-90"
          style={{ height: "50px", backgroundColor:'rgb(108, 99, 255) ',
          border:'none' }}
          onClick={() => addTaxHandler(activeTaxID, taxAmount)}
        >
          <strong>Add tax</strong>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

//Create style vars
const inputStyle = {
  height: "60px",
};

export default TaxModal;
