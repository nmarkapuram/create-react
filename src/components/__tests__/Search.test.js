import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body";
import "@testing-library/jest-dom";
import { act } from "react"
import MOCK_API from "../mocks/RestuarantListData.json"
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_API);
        }
    })
})

it("Should Render Body Component", async () => {

    await act(async () => {
        render(
            <MemoryRouter future={{ 
                v7_startTransition: true, 
                v7_relativeSplatPath: true 
            }}>
                <Provider store={appStore}>
                    <Body/>
                </Provider>
            </MemoryRouter>
        );
    });

    const searchBtn = await screen.findByRole("button", {name: "Search"});
    const searchInput = screen.getByTestId("Search");
    // expect(searchBtn).toBeInTheDocument();
    // expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1);

    // expect()
})

it("Should filter Top Rated Restaurant", async () => {
    await act(async () => {
        render(
            <MemoryRouter future={{ 
                v7_startTransition: true, 
                v7_relativeSplatPath: true 
            }}>
                <Provider store={appStore}>
                    <Body/>
                </Provider>
            </MemoryRouter>
        );
    });
  
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
  
    expect(cardsBeforeFilter.length).toBe(9);
  
    const topRatedBtn = screen.getByRole("button", {
      name: "Filter top rated",
    });
    fireEvent.click(topRatedBtn);
  
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(9);
  });