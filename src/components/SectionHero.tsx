import { Container } from "./Container";
import Image from "next/image";

import imgAppStore from "@/assets/btn-apple-store.svg"
import imgGooglePlay from "@/assets/btn-google-play.svg"
import Arrow from "@/assets/arrow-explorer.svg"
import MichelImg1 from "@/assets/Michael-esposa.png"

export function SectionHero(){
    return(
        <section className=" w-full h-[704px] bg-bg-principal bg-no-repeat bg-center bg-cover ">
            <Container>
                <div className=" flex-1 max-w-[500px]">
                    <h1 className=" text-white text-7xl font-bold mb-4">A melhor clínica da região!</h1>
                    <p className=" text-white text-xl max-w-[408px] mb-8">Os melhores serviços em um só lugar. Simples, completo e feito para você.</p>
                    <div className=" flex gap-4 mb-24">
                        
                    </div>
                    <button className=" flex items-center gap-3">
                        <Image
                            src={Arrow}
                            alt=""
                        />
                        <span className=" text-white text-sm font-bold">Continue explorando</span>
                    </button>
                </div>

                <Image src={MichelImg1} alt="Michael" className="mr-[41px] "/>

            </Container>
        </section>
    )
}