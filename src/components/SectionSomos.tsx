import Image from "next/image";

import { Container } from "./Container";

import MedicIcon1 from "@/assets/medical-circle.svg";

import PhoneIcon from "@/assets/icon-phone.svg";
import SoluctionsIcon from "@/assets/icon-solutions.svg";
import OptionsIcon from "@/assets/icon-options.svg";
import CardIcon from "@/assets/icon-card.svg";

import Logo2 from "@/assets/logo2.png";
import Michael1 from "@/assets/michael-1.png";

export function SectionSomos(){

    return(
        <section id="servicos" className=" relative w-full h-[790px]">
            <Container>
                <div className=" flex-1 max-w-[594px] pt-16">
                    <span className="block text-blue1 text-sm font-bold uppercase mb-9">serviços exclusivos</span>
                    <h2 className=" text-primary-gray text-[56px] font-bold leading-tight mb-6 max-sm:text-4xl">Os melhores serviços em um só lugar!</h2>
                    <p className=" text-lg max-w-[554px] mb-16 text-second-gray max-sm:mb-10">Veja alguns de nossos melhores serviços, sem decepcionar na qualidade.
                    </p>
                    <ul className=" flex flex-col items-start gap-9">
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image
                                    src={MedicIcon1}
                                    alt=""
                                />
                            </div>
                            <p className=" flex-1 text-txt-gray pr-2">Os melhores procedimentos para exame pélvico</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image
                                    src={MedicIcon1}
                                    alt=""
                                />
                            </div>
                            <p className=" flex-1 text-txt-gray pr-2">Os melhores equipamentos para exame Ginecológico</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image
                                    src={MedicIcon1}
                                    alt=""
                                />
                            </div>
                            <p className=" flex-1 text-txt-gray pr-2">O melhor cuidado para exame Transvarginal</p>
                        </li>
                        <li className="flex items-center gap-9 ">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image
                                    src={MedicIcon1}
                                    alt=""
                                />
                            </div>
                            <p className=" flex-1 text-txt-gray pr-2">O melhor entendimento para exame de Mamário.</p>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className=" absolute top-0 right-0  flex items-center w-[32%] h-full bg-bg-second max-sm:w-0">
                <Image
                    src={Michael1}
                    alt=""
                    className=" translate-x-[-50%] max-sm:w-0"
                />
            </div>
        </section>
    )
}