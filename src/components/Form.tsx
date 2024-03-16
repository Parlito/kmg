import Link from "next/link";
import { useState } from "react";

export function Form(){


    return(
        <div className="ml-10 flex-1 max-w-[1000px] pt-32">
            <h2 className=" text-white text-[56px] font-bold leading-tight mb-6">Faça seu agendamento agora!</h2>
            <p className=" text-lg max-w-[554px] mb-16 text-white"> Você pode agendar sua consulta preenchendo as informações abaixo e enviando-as para o nosso e-mail ou para o nosso Whatsapp.</p>
                <ul className="flex flex-col items-start gap-9">
                    <li className="flex items-center gap-9 pb-9">
                        <div className=" h-7 flex items-center justify-center">
                            <input id="name" className= "rounded-md text-blue1 placeholder:text-gray w-[500px] p-4" placeholder="Seu Nome"/>
                        </div>
                    </li>
                    <li className="flex items-center gap-9 pb-9">
                        <div className=" h-7 flex items-center justify-center">
                            <input id="email" className=" rounded-md text-blue1 placeholder:text-gray w-[500px] p-4" placeholder="Seu melhor e-mail"/>    
                        </div>
                    </li>
                    <li className="flex items-center gap-9 pb-9">
                        <div className=" h-7 flex items-center justify-center">
                            <input id="phone" className=" rounded-md text-blue1 placeholder:text-gray w-[500px] p-4" placeholder="Seu melhor número de celular"/>    
                        </div>
                    </li>
                    <li className="flex items-center gap-9 pb-9">
                        <div className=" h-7 flex items-center justify-center">
                            <input id="atend" className=" rounded-md text-blue1 placeholder:text-gray w-[500px] p-4" placeholder="Escreva aqui o atendimento que você precisa"/>    
                        </div>
                    </li>
                    <li className="flex items-center gap-9 pb-9">
                        <div className=" h-7 flex items-center justify-center">
                            <input id="desc" className="rounded-md text-blue1 placeholder:text-gray w-[500px] h-[100px] resize-none p-4" placeholder="Descreva o que precisa"/>    
                        </div>
                    </li>
                </ul>
                <button className=" bg-blue2 p-4 mt-2  rounded-md">

                    <span className="text-white">Enviar por e-mail</span>
                </button>
                <Link href='http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}'>
                    <button className=" bg-green-600 p-4 mt-2 ml-2  rounded-md">
                        <span className="text-white">Enviar por Whatsapp</span>
                    </button>
                </Link>
    </div>
    )
}