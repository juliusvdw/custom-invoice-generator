import React, { useReducer } from "react";
import axios from "axios";

import FormContext from "./formContext";
import FormReducer from "./formReducer";

const FormState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(FormReducer, initialState);

  return (
    <FormContext.Provider value={{}}>{props.children}</FormContext.Provider>
  );
};

export default FormState;
