import React from 'react';
import Header from "../components/Header";
import Button from "../components/Button";
import Form from "../components/Form";

const skills = [
    {
        name: "Travail de qualité",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequuntur dolores eligendi fugit illum libero minima quo! Consequuntur dolor eos exercitationem explicabo nesciunt odit veritatis!"
    },
    {
        name: "Travail de qualité",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequuntur dolores eligendi fugit illum libero minima quo! Consequuntur dolor eos exercitationem explicabo nesciunt odit veritatis!"
    },
    {
        name: "Travail de qualité",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequuntur dolores eligendi fugit illum libero minima quo! Consequuntur dolor eos exercitationem explicabo nesciunt odit veritatis!"
    }]

const works = [
    {
        image: "https://nextsap.s-ul.eu/K3qT48iR",
        redirect: "",
        title: "Bardages"
    },
    {
        image: "https://nextsap.s-ul.eu/K3qT48iR",
        redirect: "",
        title: "Crépis"
    }
]

const clients = [
    {
        name: "Louis Di Ilio",
        opinion: "« Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequuntur dolores eligendi fugit illum libero minima quo! Consequuntur dolor eos exercitationem explicabo nesciunt odit veritatis! »"
    },
    {
        name: "Louis Di Ilio",
        opinion: "« Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequuntur dolores eligendi fugit illum libero minima quo! Consequuntur dolor eos exercitationem explicabo nesciunt odit veritatis! »"
    }
]

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
                        <Button className="hover:bg-orange-300" backgroundColor="bg-white" margin="mt-20"
                                colorText="text-black" hoverBackgroundColor="bg-green" name="Obtenir un devis"/>
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
                            <Button backgroundColor="bg-black" colorText="text-white"
                                    hoverBackgroundColor="bg-orange-900" margin="mt-20" name="En savoir plus"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center h-[40vh] bg-[#F5F5F5]">
                <h1 className="font-bold text-5xl mb-20">Pourquoi nous choisir ?</h1>
                <div className="flex justify-around">
                    {skills.map(skill => {
                        return (
                            <div className="flex flex-col w-[20%] text-center">
                                <h1 className="text-orange-700 text-2xl mb-8">{skill.name}</h1>
                                <h2 className="text-gray-600 text-[16px]">{skill.description}</h2>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col justify-center items-center h-[110vh] bg-[#EFEFEF]">
                <h1 className="font-bold text-5xl">Nos préstations</h1>
                <div className="flex justify-around items-center h-[80%] w-full">
                    {works.map(work => {
                        return (
                            <div
                                className="h-[75%] w-[30%] bg-cover flex justify-center items-center"
                                style={{backgroundImage: 'url("' + work.image + '")'}}>
                                <div
                                    className="p-3 bg-black rounded font-bold text-white text-4xl duration-300 hover:bg-orange-900 hover:cursor-pointer">{work.title}</div>
                            </div>
                        );
                    })}

                </div>
                <Button backgroundColor="bg-black" colorText="text-white"
                        hoverBackgroundColor="bg-orange-900" name="Voir tout"/>
            </div>

            <div className="flex flex-col justify-center items-center h-[55vh] bg-[#F5F5F5]">
                <h1 className="font-bold text-5xl">Nos clients</h1>
                <div className="flex justify-around w-full bg-[#F5F5F5]">
                    {clients.map(client => {
                        return (
                            <div className="flex flex-col justify-around w-[20%] text-center tracking-wider">
                                <h1 className="text-9xl mb-10">,,</h1>
                                <div className="flex flex-col w-full h-auto">
                                    <h1 className="text-[16px]">{client.opinion}</h1>
                                    <h1 className="text-2xl text-orange-800 font-bold mt-5">{client.name}</h1>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-around items-center h-[70vh] bg-gray-400 text-[#2B2D33] text-[18px]">
                <div className="flex flex-col w-[25%] space-y-14">
                    <h1 className="text-5xl font-bold">Parlons ensemble de votre prochain projet</h1>
                    <h1>Contactez-nous pour obtenir un rendez-vous</h1>
                    <h1>Av. Fernand Brunfaut 24, 7160 Chapelle-lez-Herlaimont</h1>
                    <h1>0479 42 70 40</h1>
                </div>
                <Form />
            </div>

        </div>

    );
};

export default Home;