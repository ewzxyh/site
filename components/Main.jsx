import React from "react";
import { BsFillPersonBadgeFill, BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <div className='h-20'></div>
                    <p className='uppercase text-sm tracking-widest text-white-600'>
                        VAMOS CONSTRUIR ALGO JUNTOS
                    </p>
                    <h1 className='py-4 text-white-700'>
                        Olá, eu sou o <span className='text-[#8231f4]'>Enzo</span>
                    </h1>
                    <h1 className='py-4 text-white-700'>
                        Desenvolvedor Web
                    </h1>
                    <p className='py-4 text-white-600 max-w-[70%] m-auto'>
                        Sou um profissional versátil e apaixonado por tecnologia. 
                        Como desenvolvedor web, designer gráfico e gestor de tráfego pago, 
                        tenho ampla experiência em ajudar empresas a atingir seus objetivos online. 
                        Sou apaixonado por criar soluções criativas e eficazes que aumentem a 
                        presença digital e o sucesso dos meus clientes. Meu objetivo é sempre 
                        superar as expectativas e garantir que cada projeto seja único e memorável.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;