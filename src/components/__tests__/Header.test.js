import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load Header Component with a login button", () => {
    render(
        <MemoryRouter future={{ 
            v7_startTransition: true, 
            v7_relativeSplatPath: true 
        }}>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </MemoryRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument();
})

it("Should load Header Component 0 items", () => {
    render(
        <MemoryRouter future={{ 
            v7_startTransition: true, 
            v7_relativeSplatPath: true 
        }}>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </MemoryRouter>
    );

    const cartItems = screen.getByText("Cart (0 items)");

    expect(cartItems).toBeInTheDocument();
})

it("Should load Header Component Cart", () => {
    render(
        <MemoryRouter future={{ 
            v7_startTransition: true, 
            v7_relativeSplatPath: true 
        }}>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </MemoryRouter>
    );

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
})

it("Should change Login button to Logout on click", () => {
    render(
        <MemoryRouter future={{ 
            v7_startTransition: true, 
            v7_relativeSplatPath: true 
        }}>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </MemoryRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name: "Logout"});


    expect(logoutButton).toBeInTheDocument();
})