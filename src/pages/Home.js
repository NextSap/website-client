import React from 'react';
import Header from "../components/Header";

const opinions = [
    {
        h1: "Travail de qualité",
        h2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequuntur dolores eligendi fugit illum libero minima quo! Consequuntur dolor eos exercitationem explicabo nesciunt odit veritatis!"
    },
    {
        h1: "Travail de qualité",
        h2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequuntur dolores eligendi fugit illum libero minima quo! Consequuntur dolor eos exercitationem explicabo nesciunt odit veritatis!"
    },
    {
        h1: "Travail de qualité",
        h2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequuntur dolores eligendi fugit illum libero minima quo! Consequuntur dolor eos exercitationem explicabo nesciunt odit veritatis!"
    }]

const Home = () => {
    return (
        <div className="flex flex-col bg-[#F5F5F5]">
            <Header/>
            <div className="flex justify-center h-[120vh]">
                <div
                    className="flex items-center text-center bg-[#F5F5F5] h-[90%] w-[90%] bg-fixed bg-center bg-no-repeat bg-cover"
                    style={{backgroundImage: 'url("https://nextsap.s-ul.eu/1Wgvkbta")'}}>
                    <div className="w-[30%]">
                        <h1 className="font-bold text-white text-8xl">Revêtissez votre maison</h1>
                        <button
                            className="bg-white rounded text-[16px] w-40 h-10 mt-20 duration-300 hover:bg-orange-300">Obtenir
                            un devis
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center h-[80vh] bg-[#F5F5F5]">
                <div className="flex justify-center w-[90%]">
                    <div className="w-[50%] h-[90%] bg-[#F5F5F5] bg-fixed bg-left bg-no-repeat bg-cover"
                         style={{backgroundImage: 'url("https://nextsap.s-ul.eu/kTwDuo5i")'}}>
                    </div>

                    <div className="flex flex-col items-center justify-center w-[50%] ml-10">
                        <div className="w-[60%]">
                            <h1 className="font-bold text-5xl mb-10">Les bardages et crépis les plus qualitatifs de
                                Belgique</h1>
                            <h2 className="text-2xl text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. At culpa cumque enim esse
                                et
                                eum harum illum ipsam laborum, odit porro quam quisquam repudiandae?
                            </h2>

                            <button
                                className="bg-black rounded text-[16px] w-40 h-10 border border-white mt-20 text-white duration-300 hover:bg-orange-900">En
                                savoir
                                plus
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center h-[40vh] bg-[#F5F5F5]">
                <h1 className="font-bold text-5xl mb-20">Pourquoi nous choisir ?</h1>
                <div className="flex justify-around s">
                    {opinions.map(opinion => {
                        return (
                            <div className="flex flex-col w-[20%] text-center">
                                <h1 className="text-orange-700 text-2xl mb-8">{opinion.h1}</h1>
                                <h2 className="text-gray-600 text-[16px]">{opinion.h2}</h2>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col items-center h-[80vh] bg-[#F5F5F5]">
                <h1 className="font-bold text-5xl mb-20">Nos préstations</h1>
                <div className="flex justify-around items-center h-full w-full">
                    <div
                        className="h-[90%] w-[25%] bg-fixed bg-left bg-no-repeat bg-cover flex justify-center items-center"
                        style={{backgroundImage: 'url("https://nextsap.s-ul.eu/K3qT48iR")'}}>
                        <div className="p-3 bg-black rounded font-bold text-white text-4xl duration-300 hover:bg-orange-900 hover:cursor-pointer">Bardages</div>
                    </div>
                    <div
                        className="h-[90%] w-[25%] bg-fixed bg-left bg-no-repeat bg-cover flex justify-center items-center"
                        style={{backgroundImage: 'url("https://nextsap.s-ul.eu/K3qT48iR")'}}>
                        <div className="p-3 bg-black rounded font-bold text-white text-4xl duration-300 hover:bg-orange-900 hover:cursor-pointer">Crépis</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;