import React from 'react';
import Header from "../components/Header";

const Home = () => {
    return (
        <div className="flex flex-col h-full w-full bg-[#F5F5F5]">
            <Header />
            <div
                className="flex flex-col-reverse md:flex-row bg-[#F5F5F5] h-full md:h-auto w-full overflow-hidden">
                <div className="flex justify-center items-center h-[50vh] md:h-[90vh] md:w-[50vw] bg-[#F5F5F5]">
                    <img className="h-full w-full object-cover" src={require("../assets/bardage_background.png")} alt=""/>
                </div>
                <div className="flex flex-col h-full justify-center items-center text-[#919191] tracking-widest">
                    <div className="w-[50%] text-6xl lg:text-8xl mb-5 text-center mb-8 md:mb-26 mt-2 md:mt-0">
                        <h1>Revêtissez votre maison</h1>
                        <button className="bg-gray-300 text-xl p-3 rounded-2xl">Obtenir un devis</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;