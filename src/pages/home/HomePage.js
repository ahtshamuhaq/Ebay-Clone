import React from "react";
import {
  HomeNav,
  Carousal,
  CarousalNav,
  HomeSearch,
} from "./../../Components/homeComponents/Index";
import {
  Button,
  CardsForSlider,
  InnerProductCard,
  PopularCategories,
  OuterCard,
} from "./../../Components/common/Index";
const HomePage = (props) => {
  return (
    <div className="w-4/5 mx-auto pt-2">
      <HomeNav listItems={props.listItems} />
      <hr />
      <div className="mt-4">
        <HomeSearch />
      </div>
      <div className="mt-4">
        <hr />
      </div>
      <div className="mt-4">
        <CarousalNav />
      </div>
      <div className="mt-4">
        <Carousal />
      </div>
      <div className="mt-4">
        <CardsForSlider />
      </div>
      <div className="mt-4">
        <PopularCategories />
      </div>
      <div className="mt-4 mb-16 p-6 bg-[#E62048] flex flex-wrap justify-between ">
        <Button variant="transparent" type="submit">
          Shop Now
        </Button>
        <Button variant="errorText">Shop Now</Button>
        <Button variant="searchBox">Shop Now</Button>
        <Button variant="redWhite">Shop Now</Button>
        <Button variant="blueSmall">Shop Now</Button>
        <Button variant="white">Shop Now</Button>
        <Button variant="darkCyan">Shop Now</Button>
        <Button variant="skyBlue">Shop Now</Button>
        <Button variant="whiteLong">Shop Now</Button>
        <Button variant="whiteSmall">Shop Now</Button>
        <Button variant="lightGray">Shop Now</Button>
        <Button variant="lightNavy">Shop Now</Button>
        <Button variant="outlinedWhite">Shop Now</Button>
        <Button variant="whiteDefault">Shop Now</Button>
        <Button variant="outlinedBlue">Shop Now</Button>
        <Button variant="brilliantWhite">Shop Now</Button>
        <Button variant="navy">Shop Now</Button>
      </div>
      <div className="mt-4 mb-16 p-6">
        <OuterCard />
      </div>
      <div className="mt-4 mb-16 p-6">
        <InnerProductCard />
      </div>
    </div>
  );
};

export default HomePage;
