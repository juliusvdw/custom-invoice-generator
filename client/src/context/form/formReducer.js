import { MODIFY_ITEM, ADD_ITEM, REMOVE_ITEM } from "../Types";

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
    default:
      return state;
  }
};
