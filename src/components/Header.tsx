import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/logo.png';
import Logo2 from '@/assets/logo2.png';
import { ItemMenu } from './ItemMenu';
import { Search } from './Search';
import IconUser from '@/assets/icon-user.svg';
import { Container } from './Container';


export function Header(){

    return(
        <header id="header" className='relative flex items-center w-full h-20 bg-white'>
            <div className='absolute top-0 right-0 w-[19%] h-full z-0'>
            </div>
            <Container>
            <div className='flex flex-1 items-center justify-between '>
                <div className='flex items-center gap-14'>
                <Image src={Logo} alt="Logo" className='max-sm:hidden max-sm:ml-20 max-sm:w-48'/>
                <Image src={Logo2} alt="Logo" className=' lg:hidden max-sm:ml-20 max-sm:w-48'/>
                    <ul className='flex items-center gap-12 max-sm:hidden'>
                        <li>
                            <Link href="#servicos" >
                            <ItemMenu
                                name="Serviços"
                            />
                            </Link>
                        </li>
                        <li>
                            <Link href="#consul" >
                            <ItemMenu
                                name="Consultório"
                            />
                            </Link>
                        </li>
                        <li>
                            <Link href="#agenda" >
                            <ItemMenu
                                name="Agende já!"
                            />
                            </Link>
                        </li>
                    </ul>
                </div>
                </div> 
            </Container>
        </header>
    )
}