import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//Bring in context
import FormContext from "../../context/form/formContext";

const TaxModal = (props) => {
  const formContext = useContext(FormContext);

  const { addTaxID } = formContext;

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
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="submit"
          className="form-control w-90"
          style={{ height: "50px" }}
          onClick={() => console.log(addTaxID)}
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
