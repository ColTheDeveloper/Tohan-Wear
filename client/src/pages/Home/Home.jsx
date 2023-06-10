import React from 'react'
import Brands from '../../components/Brands/Brands'
import Categories from '../../components/Categories/Categories'
//import Hero from '../../components/Hero/Hero'
import RecentlyAdded from '../../components/RecentlyAdded/RecentlyAdded'
import './Home.css'
import Carousel from '../../components/Carousel/Carousel'

const Home=()=>{
    return(
        <div>
            <Carousel />
            <Categories />
            <Brands />
            <RecentlyAdded />
        </div>
    )
}

export default Home;

