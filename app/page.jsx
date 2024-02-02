import styles from "./page.module.css";
import React from "react";
import FetchAndEnsureData from "@/src/modules/dataProvider";
import { Layout } from "@/src/components/layout";

const Home = ({ children }) => {
  return (
    <main className={styles.main}>
      <FetchAndEnsureData>
        <Layout>{children}</Layout>
      </FetchAndEnsureData>
    </main>
  );
};

export default Home;
