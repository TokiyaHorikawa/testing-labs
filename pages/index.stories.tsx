import Home from "./index";

const story = {
  component: Home,
  title: "pages/Home",
  args: {
    allPostsData: [{ id: "id", date: "2022", title: "title" }],
  },
};

export default story;

export const Default = {};
