import React from "react";
import { ourStory } from "../data/Image.data";

const styles = {
  p: {
    fontSize: "18px",
    color: "black",
    margin: "20px",
    backgroundColor: " rgba(255, 255, 255, 0.65)",
    padding: "0px 20px 0px 20px",
  },
  div: {
    backgroundImage: `url(${ourStory.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
  h1: {
    color: "var(--orange)",
    backgroundColor: "transparent",
  },
};
function OurStory() {
  return (
    <>
      <div style={styles.div}>
        <p className="rounded" style={styles.p}>
          <h1 style={styles.h1}>Our Story</h1>
          Jayben moved to Steamboat Springs, Colorado not long after graduating
          high school in 2013. He stayed for the sunsets, great skiing, and even
          better hash.
          <br />
          <br />
          Sabrina moved there on a whim in 2018 after driving through on a road
          trip. She first met Jayben, the hot hotel security guard, while
          working as a front desk agent.
          <br />
          <br />
          They fell in love in these beautiful hills where he taught her how to
          ski. After the pandemic started they moved to Vancouver, Washington
          where they currently live with their two dogs.
        </p>
      </div>
    </>
  );
}

export default OurStory;
