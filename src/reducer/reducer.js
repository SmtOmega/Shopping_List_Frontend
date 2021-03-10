export const ITEM_LOADING = "ITEM_LOADING";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const GET_ITEMS = "GET_ITEMS";
export const SET_ERROR = "SET_ERROR"

const reducer = (state, action) => {
  if (action.type === ITEM_LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === ADD_ITEM) {
    return { ...state, items: [action.payload, ...state.items] };
  }
  if (action.type === REMOVE_ITEM) {
    const filterItem = state.items.filter((item) => item._id !== action.payload);

    return { ...state, items: filterItem };
  }
  if(action.type === GET_ITEMS){
      return {
          ...state, 
          items: action.payload,
          loading: false
      }
  }
  if(action.type === SET_ERROR){
    return {...state, loading: false, error: true}
  }

  return state;
};

export default reducer;
