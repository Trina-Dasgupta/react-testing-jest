

import { render, screen } from "@testing-library/react"
import Greet from "./greet"

//Test DRiven DEvelopment
describe('Greet',()=>{
    test ("renders correctly",()=>{
        render(<Greet/>);
        const textElement=screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
    })
    describe('Nested',()=>{
        test("renders with name",()=>{
            render(<Greet name="Trina"/>);
            const textElement=screen.getByText("Hello Trina");
            expect(textElement).toBeInTheDocument();
        
        })
    })
    
})
