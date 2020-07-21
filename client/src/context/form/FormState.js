import React, { useReducer } from "react";

import FormContext from "./formContext";
import FormReducer from "./formReducer";

const FormState = (props) => {
  const initialState = {
    success: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  //Send formData to the server
  const sendData = (formData) => {
    try {
    } catch (err) {}
  };

  return (
    <FormContext.Provider
      value={{
        sendData,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
