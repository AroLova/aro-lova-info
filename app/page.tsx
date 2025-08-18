import Photos from "@/components/outils/Photos";
import Sociaux from "@/components/outils/Sociaux";
import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";
const Home = () => {
  return (
    <div>
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pt-8 lg:scroll-pb-24">
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span>Développeur de logiciels</span>
            <h1 className="h2">
              Bonjour, je suis <br />{" "}
              <span className="text-accent">Aro Lova.</span>
            </h1>
            <p className="my-6">
              Développeur Front-End. J{"'"}aime créer des sites web modernes et
              interactifs pour offrir des expériences utilisateurs fluides et
              agréables.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button variant={"outline"} className="hover:transition-all duration-500 cursor-pointer">
                <span>Telecharger cv</span>
                <FiDownload className="text-xl " />
              </Button>
              <div className="mb-8 lg:mb-0">
                <Sociaux
                  containerStyles="flex gap-6 "
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center 
                  text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photos/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
