import React from 'react'
import Banner from "../../components/banner/Banner";
import { HouseList } from "../../components/houseList/HouseList";
import imageBackgroundHome from "../../assets/images/banners/home-background.png";

const Home = () => {
    return (
        <div>
        <Banner
            src={imageBackgroundHome}
            text={"Chez vous, partout et ailleurs"}
        />
        <HouseList />
        </div>
    );
};

export default Home;