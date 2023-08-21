import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
const Blog = (props) => {
  console.log(props);

  const [blogs, setBlogs] = useState(props.allBlogs);
  const fetchData = async () => {
    let d = await fetch("http://localhost:3000/api/blogs/?count=1");
    let data = await d.json();
    setBlogs(data);
  };

  return (
    <div className={styles.container}>
      <main className={`${styles.main} `}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
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
        </InfiniteScroll>
      </main>
    </div>
  );
};

export const getStaticProps = async (context) => {
  // Fetch data from an API or any other source
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");

    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs },
  };
};

export default Blog;
