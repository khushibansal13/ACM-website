import React from 'react';
import Slider from 'react-slick';

const galleryImages = [
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
];

const settings = {
    dots: true,  // No dots
    infinite: true,  // Infinite looping
    speed: 2000,  // Speed of the transition
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 3000,  // Speed of the autoplay
    slidesToShow: 3,  // Show one image at a time
    slidesToScroll: 1,  // Scroll one image at a time
    cssEase: "linear",  // Linear transition for a smooth effect
    pauseOnHover: true,  // Disable pause on hover
    focusOnSelect: true,  // Disable focus on select
};

const Gallery = () => {
    return (
        <section id="gallery" className="py-8">
            <div className="container mx-auto p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
                <Slider {...settings}>
                    {galleryImages.map((image, index) => (
                        <div key={index} className="flex justify-center">
                            <img
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Gallery;
