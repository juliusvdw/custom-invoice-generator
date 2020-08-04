import { MODIFY_ITEM, ADD_ITEM, REMOVE_ITEM, ADD_TAX_ID } from "../Types";

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
    default:
      return state;
  }
};
