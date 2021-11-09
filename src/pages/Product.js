import React from "react";
import ProductBanner from "../components/banners/ProductBanner";
import Footer from "../components/footer/Footer";
import Sorting from "../components/sortingProducts/Sorting";
import AllProduct from "../components/sortingProducts/AllProducts";
import NextButtons from "../components/sortingProducts/NextButtons";

function Product() {
    return(
        <div>
        <div class="small-container">
            <Sorting />
            <AllProduct />
            <NextButtons />
        </div>
        <Footer />
        </div>
    )
};
export default Product;