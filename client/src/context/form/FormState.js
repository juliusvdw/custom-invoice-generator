import React, { useReducer } from "react";

import FormContext from "./formContext";
import FormReducer from "./formReducer";

const FormState = (props) => {
  const initialState = {
    formData: {},
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  return (
    <FormContext.Provider value={{}}>{props.children}</FormContext.Provider>
  );
};

export default FormState;
