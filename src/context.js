import axios from "axios";
import React, { useContext, useReducer, useState, useEffect } from "react";
import reducer, {
  ADD_ITEM,
  REMOVE_ITEM,
  ITEM_LOADING,
  GET_ITEMS,
  SET_ERROR,
} from "./reducer/reducer";


//https://mike-shopping-list.herokuapp.com/items
const ItemContext = React.createContext();



const url = "https://mike-shopping-list.herokuapp.com/items";
const initialState = {
  items: [],
  loading: false,
  error: false
};

const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    dispatch({ type: ITEM_LOADING });
    try {
      const response = await axios(url);
      if(response.status === 404){
        dispatch({type: SET_ERROR})
      }
      dispatch({ type: GET_ITEMS, payload: response.data });
    } catch (error) {
      dispatch({type: SET_ERROR})
    }
  };

  const addItem = async (item) => {
    const response = await axios.post(url, item);
    dispatch({ type: ADD_ITEM, payload: response.data });
  };

  const deleteItem = async (id) => {
    await axios.delete(`${url}/${id}`);
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <ItemContext.Provider
      value={{
        ...state,
        addItem,
        deleteItem,
        openModal,
        closeModal,
        isModalOpen,
        fetchData
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ItemContext);
};

export default ItemProvider;
