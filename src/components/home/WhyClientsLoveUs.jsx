import Section from "../Section";
import ReviewCardsCarousel from "./ReviewCardsCarousel";

const WhyClientsLoveUs = () => {
  return (
    <Section
      id="reviews"
      title="Why Clients Love Us"
      subtitle="Here's what our clients have to say about working with us."
      className="bg-gray-100 dark:bg-gray-700"
    >
      <ReviewCardsCarousel />
    </Section>
  );
};

export default WhyClientsLoveUs;