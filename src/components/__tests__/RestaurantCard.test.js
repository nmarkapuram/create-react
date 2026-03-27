import { render, screen } from "@testing-library/react"
import RestaurantCard, {withPromotedLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestuarantCardData.json";
import "@testing-library/jest-dom"

it("should render Restarant Card", () => {
     render(<RestaurantCard resData={MOCK_DATA}/>);

     const resName = screen.getByText("Green Bites");
     expect(resName).toBeInTheDocument();
})

it("should render Restarant Card with Prmoted badge", () => {
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
    render(<PromotedRestaurantCard resData={MOCK_DATA} />);

    const promoText = screen.getByText("Promoted");
    expect(promoText).toBeInTheDocument();
})