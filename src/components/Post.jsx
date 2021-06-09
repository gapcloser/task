import React from "react";
import { motion } from "framer-motion";

const Post = ({ post, user }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="shadow-lg p-4 rounded-lg flex flex-col justify-between bg-white"
    >
      {/* Making the Title Capitalized */}
      <h1 className="mb-1 text-2xl text-red-400">
        {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
      </h1>
      {/* Making the body Capitalized */}
      <p>{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>

      <span className="text-blue-500 py-3 px-4 bg-gray-100 rounded mt-4 block w-max">
        {user ? user.name : "loading"}
      </span>
    </motion.div>
  );
};

export default Post;
