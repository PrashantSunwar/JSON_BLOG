import { useContext, useEffect } from "react";
import {
  LOAD_USER_DATA_BEGIN,
  LOAD_USER_DATA_SUCCESS,
} from "../context/DataContext/DataReducer";
import { getUsers } from "../api/getUsers";

import Table from "../components/Table";
import DataContext from "../context/DataContext/DataContext";
import Loader from "../components/shared/Loader";

function HomePage() {
  const { dispatch, userDataLoading } = useContext(DataContext);

  useEffect(() => {
    dispatch({ type: LOAD_USER_DATA_BEGIN });
    getUsers().then((resp) => {
      dispatch({ type: LOAD_USER_DATA_SUCCESS, payload: resp });
    });
  }, [dispatch]);

  if (userDataLoading) {
    return <Loader />;
  }

  return (
    <main className="container mx-auto h-screen w-full md:w-11/12 flex justify-center items-center relative">
      <Table />
    </main>
  );
}

export default HomePage;
