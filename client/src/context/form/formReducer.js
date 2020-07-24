import { MODIFY_ITEM } from "../Types";

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
    default:
      return state;
  }
};
