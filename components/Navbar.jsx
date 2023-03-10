import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2x1:px-16'>
                <Image 
                src= '/logo.png'
                alt='/'
                width='50' 
                height='125' 
                />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href = '/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href = '/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Sobre mim</li>
                        </Link>
                        <Link href = '/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Habilidades</li>
                        </Link>
                        <Link href = '/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projetos</li>
                        </Link>
                        <Link href = '/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contatos</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden cursor-pointer'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70' : ''}>
                <div className={nav 
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#dc4480] p-10 ease-in duration-500' 
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image 
                            src='/logo.png' 
                            alt='/' 
                            width='35' 
                            height='87' 
                            />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-400 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Vamos construir algo lend??rio juntos</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                            <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                            <li className='py-4 text-sm'>Sobre mim</li>
                            </Link>
                            <Link href='/'>
                            <li className='py-4 text-sm'>Habilidades</li>
                            </Link>
                            <Link href='/'>
                            <li className='py-4 text-sm'>Projetos</li>
                            </Link>
                            <Link href='/'>
                            <li className='py-4 text-sm'>Contatos</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#8231f4]'>
                                Vamos n??s conectar
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
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
            </div>

        </div>
    );
}

export default Navbar;