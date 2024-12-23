
import React, { useState } from 'react';
import Slider from 'react-slick';
import EventCard from './EventCard';

// Sample event data
const eventsData = [
    {
        title: "Web Development Workshop",
        image: "https://via.placeholder.com/300x200",
        description: "Learn the essentials of modern web development technologies and frameworks.",
    },
    {
        title: "Expert Session: Career Options in India After Engineering",
        image: "https://via.placeholder.com/300x200",
        description: "Guidance on exploring diverse career paths post-engineering.",
    },
    {
        title: "Expert Talk: How to Think Like a Data Scientist",
        image: "https://via.placeholder.com/300x200",
        description: "Insights on data science and its real-world applications.",
    },
    {
        title: "Workshop on Data Structures and Algorithms (DSA)",
        image: "https://via.placeholder.com/300x200",
        description: "Master the fundamentals of DSA with hands-on practice.",
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
        <div className="slick-next text-xl">
            <span>→</span>
        </div>
    ),
    prevArrow: (
        <div className="slick-prev text-xl">
            <span>←</span>
        </div>
    ),
};

export default function Events() {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const openModal = (event) => {
        setSelectedEvent(event);
    };

    const closeModal = () => {
        setSelectedEvent(null);
    };

    return (
        <section id="events" className="py-8">
            <div className="container mx-auto p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Events</h2>

                {/* Event slider */}
                <Slider {...settings}>
                    {eventsData.map((event, index) => (
                        <div key={index}>
                            <EventCard event={event} openModal={openModal} />
                        </div>
                    ))}
                </Slider>

                {/* Modal for event details */}
                {selectedEvent && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-8 rounded-lg max-w-3xl w-full relative">
                            <button
                                className="absolute top-0 right-0 text-xl text-red-600"
                                onClick={closeModal}
                            >
                                ×
                            </button>
                            <h3 className="text-2xl font-bold mb-4">{selectedEvent.title}</h3>
                            <img
                                src={selectedEvent.image}
                                alt={selectedEvent.title}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <p>{selectedEvent.description}</p>
                        </div>
                        <div
                            className="absolute inset-0 bg-gray-800 bg-opacity-50"
                            onClick={closeModal}
                        ></div>
                    </div>
                )}
            </div>
        </section>
    );
}
