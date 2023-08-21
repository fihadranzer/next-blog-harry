import React, { useState } from "react";
// import * as fs from "fs";

import styles from "@/styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, phone, desc);

    const data = { name, email, phone, desc };
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success", data);

        if (name== "") {
          alert("Please input your name first");
        } else if (email== "") {
          alert("Please input your email ");
        } else if (phone== "") {
          alert("Please input your Phone number first");
        } else if (desc== "") {
          alert("Please write some description");
        } else {
          alert("Thanks for contacting us");
        }
        setName("");
        setEmail("");
        setPhone("");
        setDesc("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <h1> Contact us </h1>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter full name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        {/* email */}
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Enter email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        {/* phone */}
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Enter phone number
          </label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>

        {/* password */}

        {/* Text Area */}

        <div className={styles.mb3}>
          <label htmlFor="desc">Comments</label>
          <textarea
            className="form-control"
            placeholder="Write your concern here"
            id="desc"
            value={desc}
            name="desc"
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
