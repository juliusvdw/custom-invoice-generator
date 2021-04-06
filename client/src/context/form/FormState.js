import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import {
  MODIFY_ITEM,
  ADD_ITEM,
  REMOVE_ITEM,
  ADD_TAX_ID,
  ADD_TAX,
  SET_TOTAL,
} from "../Types";

import FormContext from "./formContext";
import FormReducer from "./formReducer";

const FormState = (props) => {
  const initialState = {
    success: null,
    loading: false,
    items: [{ description: "", amount: null, tax: null, id: uuidv4() }],
    activeTaxID: null,
    subTotal: 0,
    total: 0,
    taxTotal: 0,
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  //Send formData to the server
  const sendData = async (formData) => {
    //Turn data into HTML template

    //Calculate totals
    calculateTotals();

    console.log(formData);

    try {
      console.log("Convert call requested");
      const invoice = await axios("/convert", {
        method: "POST",
        responseType: "blob",
        data: { formData },
      });

      //Create a Blob from the PDF Stream
      const file = new Blob([invoice.data], {
        type: "application/pdf",
      });
      //Build a URL from the file
      const fileURL = URL.createObjectURL(file);
      //Open the URL on new Window
      window.open(fileURL, "_blank");

      console.log(invoice.data);
      console.log(typeof invoice.data);
    } catch (err) {
      console.log(err);
    }
  };

  //Modify item details
  const modifyItem = (id, e) => {
    //Find index of item that is being modified with unique id
    const index = state.items.findIndex((item) => item.id === id);

    //Modify the item with the new data that will be sent to the reducer
    let data = state.items[index];
    data[e.target.name] = e.target.value;

    dispatch({ type: MODIFY_ITEM, payload: { id, data } });
  };

  //Add item
  const addItem = () => {
    //Create new item that will be added to the item state in the reducer
    let newItem = { description: "", amount: null, tax: null, id: uuidv4() };

    dispatch({ type: ADD_ITEM, payload: newItem });
  };

  const removeItem = (id) => {
    //Dispatch REMOVE_ITEM to reducer and remove item that contains specific id
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  //Add active ID to activeTaxID
  const addTaxID = (id) => {
    console.log(id);
    dispatch({ type: ADD_TAX_ID, payload: id });
  };

  //Add tax to specific item
  const addTax = (id, amount) => {
    const index = state.items.findIndex((item) => item.id === id);

    let data = state.items[index];
    data.tax = amount;

    dispatch({ type: ADD_TAX, payload: { id, data } });
  };

  //Calculate total on form submission
  const calculateTotals = () => {
    let total = 0,
      subTotal = 0,
      taxTotal = 0;

    state.items.forEach((item) => {
      subTotal += Number(item.amount);
      taxTotal += Number(item.amount * Number(item.tax / 100));
    });

    total = subTotal + taxTotal;
    dispatch({ type: SET_TOTAL, payload: { subTotal, taxTotal, total } });

    console.log("Subtotal", subTotal, "total", total, "tax total", taxTotal);
  };

  return (
    <FormContext.Provider
      value={{
        items: state.items,
        subTotal: state.subTotal,
        total: state.total,
        taxTotal: state.taxTotal,
        activeTaxID: state.activeTaxID,
        sendData,
        modifyItem,
        addItem,
        removeItem,
        addTaxID,
        addTax,
        calculateTotals,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
