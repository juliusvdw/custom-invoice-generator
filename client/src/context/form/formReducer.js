import {
  MODIFY_ITEM,
  ADD_ITEM,
  REMOVE_ITEM,
  ADD_TAX_ID,
  ADD_TAX,
  SET_TOTAL,
  SELECT_TEMPLATE,
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case MODIFY_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload.data : item
        ),
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case ADD_TAX_ID:
      return {
        ...state,
        activeTaxID: action.payload,
      };
    case ADD_TAX:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload.data : item
        ),
      };
    case SELECT_TEMPLATE:
      return {
        ...state,
        selectedTemplate: action.payload,
      };

    default:
      return state;
  }
};
