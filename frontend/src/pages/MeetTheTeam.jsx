import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGoogle } from 'react-icons/fa';

const teamMembers = [
    {
        name: "John Doe",
        post: "President",
        image: "https://via.placeholder.com/150",
        socialLinks: {
            facebook: "https://facebook.com/johndoe",
            twitter: "https://twitter.com/johndoe",
            linkedin: "https://linkedin.com/in/johndoe",
            gmail: "mailto:johndoe@gmail.com",
        },
    },
    {
        name: "Jane Smith",
        post: "Vice President",
        image: "https://via.placeholder.com/150",
        socialLinks: {
            facebook: "https://facebook.com/janesmith",
            twitter: "https://twitter.com/janesmith",
            linkedin: "https://linkedin.com/in/janesmith",
            gmail: "mailto:janesmith@gmail.com",
        },
    },
    {
        name: "Alice Brown",
        post: "Secretary",
        image: "https://via.placeholder.com/150",
        socialLinks: {
            facebook: "https://facebook.com/alicebrown",
            twitter: "https://twitter.com/alicebrown",
            linkedin: "https://linkedin.com/in/alicebrown",
            gmail: "mailto:alicebrown@gmail.com",
        },
    },
    {
        name: "Bob Green",
        post: "Treasurer",
        image: "https://via.placeholder.com/150",
        socialLinks: {
            facebook: "https://facebook.com/bobgreen",
            twitter: "https://twitter.com/bobgreen",
            linkedin: "https://linkedin.com/in/bobgreen",
            gmail: "mailto:bobgreen@gmail.com",
        },
    },
    {
        name: "Sarah White",
        post: "Event Manager",
        image: "https://via.placeholder.com/150",
        socialLinks: {
            facebook: "https://facebook.com/sarahwhite",
            twitter: "https://twitter.com/sarahwhite",
            linkedin: "https://linkedin.com/in/sarahwhite",
            gmail: "mailto:sarahwhite@gmail.com",
        },
    },
    {
        name: "David Black",
        post: "Technical Head",
        image: "https://via.placeholder.com/150",
        socialLinks: {
            facebook: "https://facebook.com/davidblack",
            twitter: "https://twitter.com/davidblack",
            linkedin: "https://linkedin.com/in/davidblack",
            gmail: "mailto:davidblack@gmail.com",
        },
    },
];

export default function MeetTheTeam() {
    return (
        <section id="meet-the-team" className="py-8 w-full">
            <div className="container mx-auto p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="border p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 transform hover:scale-105"
                        >
                            <div className="text-center">
                                {/* Image */}
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-48 object-cover rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                                <p className="text-gray-600 mb-4">{member.post}</p>
                                <div className="flex justify-center space-x-6">
                                    {member.socialLinks.facebook && (
                                        <a
                                            href={member.socialLinks.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            <FaFacebook size={24} />
                                        </a>
                                    )}
                                    {member.socialLinks.twitter && (
                                        <a
                                            href={member.socialLinks.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-600"
                                        >
                                            <FaTwitter size={24} />
                                        </a>
                                    )}
                                    {member.socialLinks.linkedin && (
                                        <a
                                            href={member.socialLinks.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-700 hover:text-blue-900"
                                        >
                                            <FaLinkedin size={24} />
                                        </a>
                                    )}
                                    {member.socialLinks.gmail && (
                                        <a
                                            href={member.socialLinks.gmail}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:text-gray-900"
                                        >
                                            <FaGoogle size={24} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
