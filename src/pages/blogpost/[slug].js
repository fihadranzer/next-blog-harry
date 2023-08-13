import React from "react";
import styles from "@/styles/BlogPost.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Slug = () => {
  const [blog, setBlog] = useState();
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
        .then((response) => response.json())
        .then((parsed) => {
          setBlog(parsed);
        });
    }
  }, [slug]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {console.log(blog)}
      {blog ? (
          <>
            <h1>{blog.title}</h1>
            <hr />
            <div>
              {blog.content}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
};

export default Slug;
