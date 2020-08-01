import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const TaxModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
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
        style={{ minHeight: "150px", marginTop: "15px" }}
        className="mx-auto "
      >
        <input
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
        >
          <strong>Add tax</strong>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaxModal;
