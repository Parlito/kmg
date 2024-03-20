'use client'


import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import emailjs from '@emailjs/browser';

import zap from "@/assets/whatsapp-logo.svg"
import mail from "@/assets/mail.svg"

import MichelImg1 from "@/assets/michael3.png"
import { Container } from "./Container";


export function Form(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [exame, setExame] = useState('');
    const [desc, setDesc] = useState('');

    const PHONE_NUMBER = '+5589994410019'

    var url = "https://wa.me/" + PHONE_NUMBER + "?text="
    + "*Nome do cliente:* " + name + "%0a"
    + "*E-mail do cliente:* " + email + "%0a"
    + "*Número de celular:* " + phone + "%0a"
    + "*Atendimento necessário:* " + exame + "%0a"
    + "*Descrição dada pelo cliente:* " + desc + "%0a";

    const link = url;
    
    function sendEmail(e){
        e.preventDefault();
        

        if(name === '' || phone === '' || exame === '' || desc === '')
        {
            alert("Preencha todos os campos")
            return;
        }
        
        const templateParams = {
            from_name: name,
            email: email,
            phone: phone,
            exame: exame,
            message: desc,
            }

        emailjs.send("service_ied687j", "template_4l5cd6c", templateParams, "9xtLI4jSNxMcRfQiE")
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('')
            sendEmail('')
            setPhone('')
            setExame('')
            setDesc('')
        }, (err) => {
            console.log("ERRO", err)
        })
    }

    return(
        <Container>
            <div className="ml-10 flex-1 max-w-[1000px] pt-32 max-sm:pt-5 max-sm:ml-0 max-sm:max-w-[300px]">
                    <h2 className=" text-white text-[56px] font-bold leading-tight mb-6 max-sm:text-5xl">Faça seu agendamento agora!</h2>
                    <p className=" text-lg max-w-[554px] mb-16 text-white max-sm:text-xl"> Você pode agendar sua consulta preenchendo as informações abaixo e enviando-as para o nosso e-mail ou para o nosso Whatsapp.</p>
                        
                        <form className="form" onSubmit={sendEmail}>
                            <ul className="flex flex-col items-start gap-9">
                                <li className="flex items-center gap-9 pb-4">
                                    <div className=" h-7 flex items-center justify-center">
                                        <input onChange={(e) => setName(e.target.value)}  value={name} className= "rounded-md text-blue1 placeholder:text-gray w-[500px] p-4 max-sm:w-[300px]" placeholder="Seu Nome"/>
                                    </div>
                                </li>
                                <li className="flex items-center gap-9 pb-4">
                                    <div className=" h-7 flex items-center justify-center">
                                        <input onChange={(e) => setEmail(e.target.value)}  value={email} className=" rounded-md text-blue1 placeholder:text-gray w-[500px] p-4 max-sm:w-[300px]" placeholder="Seu melhor e-mail"/>    
                                    </div>
                                </li>
                                <li className="flex items-center gap-9 pb-4">
                                    <div className=" h-7 flex items-center justify-center">
                                        <input onChange={(e) => setPhone(e.target.value)}  value={phone} className=" rounded-md text-blue1 placeholder:text-gray w-[500px] p-4 max-sm:w-[300px]" placeholder="Seu melhor número de celular"/>    
                                    </div>
                                </li>
                                <li className="flex items-center gap-9 pb-9">
                                    <div className=" h-7 flex items-center justify-center">
                                        <input onChange={(e) => setExame(e.target.value)}  value={exame} className=" rounded-md text-blue1 placeholder:text-gray w-[500px] p-4 max-sm:w-[300px]" placeholder="Escreva aqui o atendimento que você precisa"/>    
                                    </div>
                                </li>
                                <li className="flex items-center gap-9 pb-9">
                                    <div className=" h-7 flex items-center justify-center">
                                        <textarea onChange={(e) => setDesc(e.target.value)}  value={desc} className="rounded-md text-blue1 placeholder:text-gray w-[500px] h-[100px] resize-none p-4 max-sm:w-[300px]" placeholder="Descreva o que precisa"/>
                                    </div>
                                </li>
                            </ul>

                        <button type="submit" value="Enviar" className=" bg-blue2 p-4 mt-5  rounded-md ml-6 max-sm:ml-0">
                            <Container>
                                <Image
                                    src={mail}
                                    alt=""
                                    className="h-5 w-5 mr-2"
                                />
                                <span className="text-white">Enviar por e-mail</span>
                            </Container>
                        </button>

                        <Link href={link}>
                            <button className=" bg-green-600 p-4 mt-2 ml-2  rounded-md max-sm:ml-0">
                                <Container>
                                    <Image
                                        src={zap}
                                        alt=""
                                        className=" h-5 w-4 mr-2"
                                    />
                                
                                <span className="text-white">Enviar por Whatsapp</span>
                                </Container>
                            </button>
                        </Link>
                        </form>

                        
            </div>
            <Image src={MichelImg1} alt="Michael" className="mr-[41px] w-[45%] mt-4 max-sm:w-0"/>
        </Container>
        
    )
}