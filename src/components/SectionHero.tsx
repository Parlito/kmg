import { Container } from "./Container";
import Image from "next/image";


import imgZap from "@/assets/btn_zap.svg"
import imgGooglePlay from "@/assets/btn-google-play.svg"
import Arrow from "@/assets/arrow-explorer.svg"
import MichelImg1 from "@/assets/Michael-esposa.png"
import Link from "next/link";

export function SectionHero(){
    return(
        <section className=" w-full h-[703px] bg-bg-principal bg-no-repeat bg-center bg-cover ">
            <Container>
                <div className=" flex-1 max-w-[500px]">
                    <h1 className=" text-white font-bold mb-4 lg:text-7xl max-sm:text-5xl max-sm:mt-8">A melhor clínica da região!</h1>
                    <p className=" text-white max-w-[408px] mb-8 lg:text-xl max-sm:text-xl">Os melhores serviços em um só lugar. Simples, completo e feito para você.</p>
                    <div className=" flex gap-4 mb-24 max-sm:mb-5">
                        <Link href="#agenda">
                            <Image
                                src={imgZap}
                                alt=""
                                className="w-80 max-sm:w-56 max-sm:items-center"
                            />
                        </Link>
                    </div>
                    <Link href="#servicos">
                    <button className=" flex items-center gap-3 max-sm:hidden">
                        <Image
                            src={Arrow}
                            alt=""
                        />
                        <span className=" text-white text-sm font-bold">Continue explorando</span>
                    </button>
                    </Link>
                   
                    <div className="lg:hidden w-[295px] ml-[27px] promax:w-[370px] promax:ml-2">
                        <Image src={MichelImg1} alt="Michael" className=""/>
                    </div>
                </div>

                
                <Image src={MichelImg1} alt="Michael" className="mr-[41px] max-sm:w-0"/>
                
                

            </Container>
        </section>
    )
}