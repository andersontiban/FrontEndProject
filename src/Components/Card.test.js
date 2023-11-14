import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { Card } from "./Card";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Card", () => {
  it("should render card with data", () => {
    const mockData = [
      {
        id: 1,
        name: "Item 1",
        images: {
          sm: "image-url",
        },
      },
      {
        id: 2,
        name: "Item 2",
        images: {
          sm: "image-url",
        },
      },
    ];

    useNavigate.mockImplementation(() => jest.fn());

    const { container, getByText } = render(<Card data={mockData} />);

    const cards = container.querySelectorAll(".card");
    expect(cards.length).toBe(mockData.length);

    mockData.forEach((item) => {
      const card = getByText(item.name);
      expect(card).toBeInTheDocument();
    });
  });

  it("should navigate to item detail on click", () => {
    const mockData = [
      {
        id: 1,
        name: "Item 1",
        images: {
          sm: "image-url",
        },
      },
    ];

    const navigateMock = jest.fn();
    useNavigate.mockImplementation(() => navigateMock);

    const { container } = render(<Card data={mockData} />);

    const card = container.querySelector(".card");
    fireEvent.click(card);

    expect(navigateMock).toHaveBeenCalledWith(`/${mockData[0].id}`);
  });
});
