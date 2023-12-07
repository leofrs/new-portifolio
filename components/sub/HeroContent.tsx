"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import next from "@/public/NextWebsite.png";
import Skills from "@/components/main/Skills";

import { projects } from "@/constants/index";

import Modal from "@/components/modal/Modal";
import { useState } from "react";

const HeroContent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    title: string;
    description: string;
    tags: string[];
    github: string;
    webapp: string;
  }>({
    title: "",
    description: "",
    tags: [],
    github: "",
    webapp: "",
  });

  const handleOpenModal = (
    title: string,
    description: string,
    tags: string[],
    github: string,
    webapp: string
  ) => {
    setModalData({ title, description, tags, webapp, github });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center  px-20 w-full z-[20]"
      >
        <div className="h-screen w-full flex flex-col gap-5 items-center justify-center m-auto text-center max-md:pt-20 max-sm:pt-20">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Full Stack{" "}
              </span>
              Developer
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            Após ter atuado como professor no ensino de Matemática e com isso
            adquirido/melhorado habilidades que são essencias como desenvolvedor
            e ser humano, exerço hoje em dia a função de Full Stack Developer e
            meu intuito é ser o melhor desenvolvedor que eu consigo ser a cada
            dia. Uma frase que levo para vida é
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              `Hoje pior que amanhã e Hoje melhor que ontem.`
            </span>
          </motion.p>
          <motion.a
            variants={slideInFromLeft(1)}
            className="p-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            href="#projects"
          >
            Veja meus projetos
          </motion.a>
        </div>

        <Skills />

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-screen flex justify-center items-center"
        >
          <div
            className="flex flex-col items-center justify-center "
            id="projects"
          >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 max-lg:my-80 flex-wrap">
              Ultimos projetos
            </h1>
            <div className="h-screen w-full flex justify-center items-center gap-10 px-10 max-lg:flex-col max-lg:gap-48 ">
              {projects.map((item) => {
                return (
                  <div
                    className="w-[350px] h-[350px] rounded-lg shadow-lg border border-[#2A0E61]"
                    key={item.id}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1000}
                      height={1000}
                      className="w-full h-full object-contain"
                    />

                    <div className="p-4 w-full flex flex-col items-center ">
                      <h1 className="text-2xl font-semibold text-white text-center">
                        {item.title}
                      </h1>
                      <button
                        className="rounded-lg shadow-lg border border-[#2A0E61] p-5 text-white  my-5"
                        onClick={() =>
                          handleOpenModal(
                            item.title,
                            item.description,
                            item.tags,
                            item.github,
                            item.webapp
                          )
                        }
                        type="button"
                      >
                        Saiba +
                      </button>
                      <Modal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        data={modalData}
                      ></Modal>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default HeroContent;
