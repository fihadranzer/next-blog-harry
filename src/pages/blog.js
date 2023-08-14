import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";

import Link from "next/link";
const Blog = (props) => {
  console.log(props);

  const [blogs, setBlogs] = useState(props.allBlogs);

  // useEffect(() => {

  // }, []);

  return (
    <div className={styles.container}>
      <main className={`${styles.main} `}>
        {blogs.map((blogItem, index) => (
          <div key={index} className={styles.blogslot}>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <h3>{blogItem.title}</h3>
              <p>
                {blogItem.content.substr(0, 120)} <button>read more</button>
              </p>
              <p className={styles.author}>{blogItem.author}</p>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};



export const getServerSideProps = async (context) => {
  let data = await fetch("http://localhost:3000/api/blogs");

  let allBlogs = await data.json();

  return {
    props: { allBlogs },
  };
};


export default Blog; 