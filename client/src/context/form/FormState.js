import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import {
  MODIFY_ITEM,
  ADD_ITEM,
  REMOVE_ITEM,
  ADD_TAX_ID,
  ADD_TAX,
  SELECT_TEMPLATE,
} from "../Types";

import FormContext from "./formContext";
import FormReducer from "./formReducer";

const FormState = (props) => {
  const initialState = {
    success: null,
    loading: false,
    items: [{ description: "", amount: null, tax: null, id: uuidv4() }],
    activeTaxID: null,
    selectedTemplate: null,
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  //Send formData to the server
  const sendData = async (formData) => {
    //Turn data into HTML template

    try {
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

  //Select template
  const selectTemplate = (id) => {
    dispatch({ type: SELECT_TEMPLATE, payload: id });
  };

  return (
    <FormContext.Provider
      value={{
        items: state.items,
        activeTaxID: state.activeTaxID,
        selectedTemplate: state.selectedTemplate,
        sendData,
        modifyItem,
        addItem,
        removeItem,
        addTaxID,
        addTax,
        selectTemplate,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
