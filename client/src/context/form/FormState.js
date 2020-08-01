import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { MODIFY_ITEM, ADD_ITEM, REMOVE_ITEM, ADD_TAX_ID } from "../Types";

import FormContext from "./formContext";
import FormReducer from "./formReducer";

const FormState = (props) => {
  const initialState = {
    success: null,
    loading: false,
    items: [{ description: "", amount: null, tax: null, id: uuidv4() }],
    activeTaxID: null,
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  //Send formData to the server
  const sendData = (formData) => {
    try {
    } catch (err) {}
  };

  //Modify item details
  const modifyItem = (id, e) => {
    //Find index of item that is being modified with unique id
    const index = state.items.findIndex((item) => item.id === id);

    console.log(state.items);

    //Modify the item with the new data that will be sent to the reducer
    let data = state.items[index];
    data[e.target.name] = e.target.value;

    dispatch({ type: MODIFY_ITEM, payload: { id, data } });
  };

  //Add item
  const addItem = () => {
    //Create new item that will be added to the item state in the reducer
    let newItem = { description: "", amount: null, tax: false, id: uuidv4() };

    dispatch({ type: ADD_ITEM, payload: newItem });
  };

  const removeItem = (id) => {
    //Dispatch REMOVE_ITEM to reducer and remove item that contains specific id
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const addTaxID = (id) => {
    console.log(id);
    dispatch({ type: ADD_TAX_ID, payload: id });
  };

  return (
    <FormContext.Provider
      value={{
        items: state.items,
        activeTaxID: state.activeTaxID,
        sendData,
        modifyItem,
        addItem,
        removeItem,
        addTaxID,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
