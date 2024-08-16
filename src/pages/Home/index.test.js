import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    // Use await with findAllByTestId to wait for the elements to appear
    const eventCards = await screen.queryByTestId('event-card');
    expect(eventCards).toBeInTheDocument();
  });

  it("a list of people is displayed", async () => {
    render(<Home />);
    // Query all the PeopleCard components
    const peopleCards = await screen.queryByTestId('people-card');
    expect(peopleCards).toBeInTheDocument();
  });

  it("a footer is displayed", async () => {
    // to implement check if the balise footer is displayed
    render(<Home />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  it("an event card, with the last event, is displayed", () => {
    // to implement calculate to have the last event of the array
  });
});
