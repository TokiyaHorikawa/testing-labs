import React from "react";
import Layout from "./layout";

const story = {
  component: Layout,
  title: "components/Layout",
  args: {
    children: <h1>Hello Next.js</h1>,
    home: false,
  },
};

export default story;

export const Default = {};

export const IsHome = {
  args: { home: true },
};
