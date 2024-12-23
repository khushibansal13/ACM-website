import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Team from '../assets/team.jpeg';
import Events from '../components/Events';
import AboutUs from '../components/AboutUs';
import Gallery from '../components/Gallery';
import SpotlightCarousel from '../components/Spotlight';

const Home = () => {
    return (
        <div className='overflow-x-hidden w-full'>
            <Header />
            <main className="mt-16">
                {/* Home Section */}
                <section id="home" className="container mx-auto p-8">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-4xl font-bold text-black mb-4">Welcome to Adani ACM & ACM-W Chapter</h2>
                            <p className="text-lg text-gray-600 mb-4">The Largest Computing Society, now at Adani. Join our community dedicated to fostering innovation and creativity in technology.</p>
                            <button className="bg-blue-700 text-white px-6 py-2 rounded shadow-lg">Join Now!</button>
                        </div>
                        <div className="md:w-1/2">
                            <img src={Team} alt="ACM Team" className="rounded-lg shadow-lg" />
                        </div>
                    </div>
                </section>

                {/* Spotlight Section */}
                <SpotlightCarousel></SpotlightCarousel>

                {/* Events Section */}
                <Events></Events>
                <AboutUs></AboutUs>

                {/* Gallery Section */}
                <Gallery></Gallery>

                {/* Contact Section */}
                <section id="contact" className="bg-gray-100 py-8">
                    <div className="container mx-auto p-8">
                        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                        <p>Feel free to reach out to us for any queries or collaboration opportunities.</p>
                        <form className="mt-4">
                            <label className="block mb-2">
                                Name:
                                <input type="text" className="w-full p-2 border rounded" />
                            </label>
                            <label className="block mb-2">
                                Email:
                                <input type="email" className="w-full p-2 border rounded" />
                            </label>
                            <label className="block mb-2">
                                Message:
                                <textarea className="w-full p-2 border rounded"></textarea>
                            </label>
                            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;