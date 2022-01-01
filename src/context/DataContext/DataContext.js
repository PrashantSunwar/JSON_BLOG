import { createContext, useReducer } from "react";
import { dataReducer } from "./DataReducer";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    userData: [],
    postData: [],
    userDataLoading: false,
    postDataLoading: false,
    postDeleteLoading: false,
  };

  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider
      value={{
        userData: state.userData,
        userDataLoading: state.userDataLoading,
        postData: state.postData,
        postDataLoading: state.postDataLoading,
        postDeleteLoading: state.postDeleteLoading,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
