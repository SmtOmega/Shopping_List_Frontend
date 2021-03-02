import axios from "axios";
import React, { useContext, useReducer, useState, useEffect } from "react";
import reducer, {
  ADD_ITEM,
  REMOVE_ITEM,
  ITEM_LOADING,
  GET_ITEMS,
} from "./reducer/reducer";

const ItemContext = React.createContext();
const url = "http://localhost:3001/items";
const initialState = {
  items: [],
  loading: false,
};

const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    dispatch({ type: ITEM_LOADING });
    const response = await fetch(url);
    const items = await response.json();
    dispatch({ type: GET_ITEMS, payload: items });
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
