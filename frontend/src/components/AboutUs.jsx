import React from 'react';

export default function AboutUs() {
    return (
        <section id="about-us" className="bg-gray-100 py-16">
            <div className="container mx-auto px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-700 mb-4">About Us</h2>
                    <p className="text-xl text-gray-700">
                        Learn more about the Association for Computing Machinery (ACM) and our mission to foster innovation, knowledge sharing, and collaboration in the computing community.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* ACM Mission Section */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h3>
                        <p className="text-gray-700">
                            The ACM is the world's largest scientific and educational computing society. With over 100,000 members globally, we aim to advance the skills of computing professionals and promote the importance of computing as a driver of innovation and development. 
                            Our mission is to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mt-4">
                            <li>Provide a platform for knowledge sharing and networking.</li>
                            <li>Encourage innovation and creativity in the field of computing.</li>
                            <li>Support educational initiatives to promote computing in various domains.</li>
                            <li>Advocate for the ethical and responsible use of technology.</li>
                        </ul>
                    </div>
                    {/* ACM Vision Section */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h3>
                        <p className="text-gray-700">
                            ACM envisions a future where computing technology drives progress and innovation across all disciplines. As a leading voice in the computing community, we strive to make a lasting impact through education, collaboration, and advocacy. Our vision is to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mt-4">
                            <li>Build a stronger global community of computer scientists and engineers.</li>
                            <li>Bridge the gap between academia, industry, and government.</li>
                            <li>Foster lifelong learning and continuous improvement in technology fields.</li>
                            <li>Promote diversity, equity, and inclusion in the tech community.</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Local Chapter at Adani University</h3>
                    <p className="text-xl text-gray-700">
                        As part of the global ACM organization, our local chapter at Adani University is dedicated to bringing together students, faculty, and professionals to collaborate on projects, host workshops, and provide valuable resources for aspiring tech professionals. We are committed to:
                    </p>
                    <div className='w-screen flex justify-center'>

                    <ul className="list-disc list-inside text-start text-gray-700 mt-4 mx-auto max-w-4xl">
                        <li>Hosting regular workshops and hackathons to improve coding and problem-solving skills.</li>
                        <li>Organizing talks and panel discussions featuring industry experts and alumni.</li>
                        <li>Providing resources for professional development, including resume workshops and interview prep.</li>
                        <li>Building a supportive community where all students can learn and grow in computing.</li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
