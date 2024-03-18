
import Link from "next/link";
import Image from "next/image";

import { Container } from "./Container";
import { Form } from "./Form";
import MichelImg1 from "@/assets/michael_prin.png"

export function SectionForm(){


    return(
        <section id="agenda" className=" w-full h-[965px] bg-bg-principal bg-no-repeat bg-center bg-cover ">
            <Container>
                <Form/>
            </Container>
        </section>
    )
}