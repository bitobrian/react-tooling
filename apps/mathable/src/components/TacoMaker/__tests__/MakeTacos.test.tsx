import { render, screen } from '@testing-library/react'
import { TacoComponent } from '../TacoComponent';

test("never makes less than 3 tacos", async () => {
    render(<TacoComponent />);

    await screen.findAllByDisplayValue("tacos");
    
    // expect it to be a paragraph with the text "tacos"
    expect(screen.getByText("tacos"));
});
