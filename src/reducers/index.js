const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: 1
        }
      }
    }
    default:
      return state;
  }
}
