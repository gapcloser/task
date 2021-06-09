import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = (props) => {
  //hooks
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  //FETCHING DATA

  useEffect(() => {
    const postsAPI = "http://jsonplaceholder.typicode.com/posts";
    const usersAPI = "http://jsonplaceholder.typicode.com/users";

    const getPosts = axios.get(postsAPI);
    const getUsers = axios.get(usersAPI);

    const fetchData = async () => {
      await axios.all([getPosts, getUsers]).then(
        axios.spread((...response) => {
          setPosts(response[0].data);
          setUsers(response[1].data);
        })
      );
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ posts, users, search, setSearch }}>
      {props.children}
    </DataContext.Provider>
  );
};
