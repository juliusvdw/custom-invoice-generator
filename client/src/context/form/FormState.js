import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { MODIFY_ITEM } from "../Types";

import FormContext from "./formContext";
import FormReducer from "./formReducer";

const FormState = (props) => {
  const initialState = {
    success: null,
    loading: false,
    items: [{ description: "", amount: 0.0, tax: false, id: uuidv4() }],
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

    //Modify the item with the new data that will be sent to the reducer
    let data = { ...state.items[index] };
    data[e.target.name] = e.target.value;

    dispatch({ type: MODIFY_ITEM, payload: { id, data } });
  };

  return (
    <FormContext.Provider
      value={{
        items: state.items,
        sendData,
        modifyItem,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
