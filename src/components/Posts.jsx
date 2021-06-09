import React, { useContext } from "react";
import Post from "./Post";

//context
import { DataContext } from "../Context/DataProvider";
const Posts = () => {
  const { posts, users, search } = useContext(DataContext);

  return (
    <div>
      <h1 className="my-6 text-2xl font-bold text-center">
        {search === "" ? "All Posts" : `Searching for: ${search}`}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts.map((post) => {
          var uniqUser = users.find((user) => user.id === post.userId);
          if (uniqUser) {
            if (search === "") {
              return <Post key={post.id} post={post} user={uniqUser} />;
            } else if (
              uniqUser.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return <Post key={post.id} post={post} user={uniqUser} />;
            }
          }
        })}
      </div>
    </div>
  );
};

export default Posts;
