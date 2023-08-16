import React from "react";
import styles from "@/styles/BlogPost.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import * as fs from "fs";

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

export async function getStaticPaths() {
  // Fetch a list of paths
  const paths = [
    { params: { slug: "how-to-learn-java" } },
    { params: { slug: "how-to-learn-Javascript" } },
    { params: { slug: "how-to-learn-Microsoft" } },
    // ...
  ];

  return {
    paths,
    fallback: false, // or 'blocking' or 'true'
  };
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(
    `blogdata/${slug}.json`,
    "utf-8"
  );

  // let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);

  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
};

export default Slug;
