import React from 'react';
import Slider from 'react-slick';
import Team from '../assets/team.jpeg';
// Spotlight events data
const spotlightEvents = [
    {
        title: "Hackathon 2024",
        image: "https://via.placeholder.com/600x400?text=Hackathon+2024",
        intro: "Join us for the biggest coding event of the year! Teams from all over the world will compete in this 48-hour hackathon. Don't miss out on this exciting event!",
    },
    {
        title: "Tech Conference 2024",
        image: "https://via.placeholder.com/600x400?text=Tech+Conference+2024",
        intro: "A gathering of industry leaders, innovators, and tech enthusiasts. Learn from the best in tech and explore the latest advancements in the field.",
    },
    {
        title: "AI Summit 2024",
        image: "https://via.placeholder.com/600x400?text=AI+Summit+2024",
        intro: "Explore the cutting-edge developments in AI with top researchers and experts. This summit will shape the future of artificial intelligence.",
    },
];
const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,  // Display one event at a time
    slidesToScroll: 1,
    cssEase: "linear",  // Linear transition effect
    pauseOnHover: true,  // Pause autoplay on hover
};

const SpotlightCarousel = () => {
    return (
        <section id="spotlight" className="py-8 bg-gray-100 w-1/2">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Spotlight: Big & Recent Events</h2>
                <Slider {...settings}>
                    {spotlightEvents.map((event, index) => (
                        <div key={index} className="bg-white p-12 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>
                            <img
                                src={Team}  // Ensure this is the correct event image
                                alt={event.title}
                                className="h-24 w-full object-cover rounded-lg mb-4" // Reduced height to h-24 and kept width full
                            />
                            <p className="text-gray-700">{event.intro}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default SpotlightCarousel;