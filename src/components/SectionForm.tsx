
import Link from "next/link";
import { Container } from "./Container";
import { Form } from "./Form";

export function SectionForm(){


    return(
        <section className=" relative w-full h-[965px] bg-bg-principal bg-no-repeat bg-center bg-cover ">
            <Container>
                <Form/>
            </Container>
        </section>
    )
}