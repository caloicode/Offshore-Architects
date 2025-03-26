import Section from "./Section";
import Carousel from "./Carousel";
import reviewsData from "../data/reviews.json";
import ReviewCard from "./ReviewCard";

const ReviewsCarousel = () => {
  return (
    <div className="relative">
      <Carousel data={reviewsData} customCard={ReviewCard} />
    </div>
  );
};

const WhyClientsLoveUs = () => {
  return (
    <Section
      id="reviews"
      title="Why Clients Love Us"
      subtitle="Here's what our clients have to say about working with us."
      className="bg-gray-100 dark:bg-gray-700"
    >
      <ReviewsCarousel />
    </Section>
  );
};

export default WhyClientsLoveUs;
