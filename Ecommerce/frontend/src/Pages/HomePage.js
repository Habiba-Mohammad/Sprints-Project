import React, { useEffect } from 'react'
import { Filters, ProductsGridVeiw, Featured, Hero } from '../Components'
import { FeaturedProducts, OnSaleProducts } from '../Utils/Constant' // Array

function HomePage() {
    return (
        <div>
            <Hero />
            <Featured
                FeaturedProducts={FeaturedProducts}
                bgColor={'white'}
                name={'Featured Products'}
            />
            <Featured
                name={'OnSale Products'}
                bgColor={'light'}
                FeaturedProducts={OnSaleProducts}
            />
        </div>
    )
}

export default HomePage
