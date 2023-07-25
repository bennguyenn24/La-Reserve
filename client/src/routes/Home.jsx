import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import ProductSection from "../../components/Home/ProductSection";
import ResultsPage from "../../components/Home/ResultsPage";

export default function Home() {
    return (
        <div>
            <Route exact path ="/" component={HeroSection} />
            <Route path="/results" component={ResultsPage} />
            <ProductSection />
        </div>
    );
}
