import { act } from "react"
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import MOCK_DATA_NAME from "../mocks/MockRestaurantMenu.json"

global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA_NAME),
    })
  );

it("Should Load Restuarant Menu COmponent", async () => {
    await act( async() => render(
        <MemoryRouter future={{ 
            v7_startTransition: true, 
            v7_relativeSplatPath: true 
        }}>
            <Provider store={appStore}>
                <RestaurantMenu/>
            </Provider>
     </MemoryRouter>
    ))

})