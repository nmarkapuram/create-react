import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Loading Cases", () =>{
    it("Should load contact us component", () =>{
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    })
    
    it("Should load button inside Contact US component", () => {
    
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    })
    
    it("Should load input name inside Contact US component", () => {
    
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("name");
    
        expect(inputName).toBeInTheDocument();
    })
    
    it("Should load 2 input boxes in Contact US component", () => {
        render(<Contact />);
    
        const inputboxes = screen.getAllByRole("textbox");
    
        expect(inputboxes.length).toBe(2);
    
    
    })
}
)

