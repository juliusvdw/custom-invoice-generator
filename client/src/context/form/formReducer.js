import { MODIFY_ITEM, ADD_ITEM } from "../Types";

export default (state, action) => {
  switch (action.type) {
    case MODIFY_ITEM:
      return {
        ...state,
        items: state.items.map(
          (item) =>
            item.id === action.payload.id && item === action.payload.data
        ),
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};
