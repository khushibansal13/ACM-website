
import React from 'react';

const EventCard = ({ event, openModal }) => {
    return (
        <div className="border p-4 rounded-lg shadow-lg bg-white">
            <h3 className="text-lg font-bold mb-2">{event.title}</h3>
            <div className="relative overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p>{event.description}</p>
            </div>
            <button
                className="bg-blue-700 text-white px-4 py-2 rounded mt-2"
                onClick={() => openModal(event)} // Trigger the modal with the event data
            >
                Learn More
            </button>
        </div>
    );
};

export default EventCard;
