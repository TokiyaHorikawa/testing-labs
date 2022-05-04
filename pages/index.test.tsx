import { render, screen } from "@testing-library/react";
import Home from "./index";
import "@testing-library/jest-dom";

describe("Home", () => {
  const allPostsData = [{ id: "id", date: "2022" }];
  it("renders a heading", () => {
    render(<Home allPostsData={allPostsData} />);

    const heading = screen.getByRole("heading", {
      name: /Next\.js Blog/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
