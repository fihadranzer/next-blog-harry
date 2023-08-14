import React from "react";
import styles from "@/styles/BlogPost.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {console.log(blog)}
        {blog ? (
          <>
            <h1>{blog.title}</h1>
            <hr />
            <div>{blog.content}</div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  
  const {slug} = context.query
  
  fetch()

  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);

  let myBlog = await data.json();

  return {
    props: { myBlog },
  };
};

export default Slug;
