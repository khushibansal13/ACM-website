import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGoogle } from 'react-icons/fa';
import VAISHALI_CHOUREY from '../assets/VAISHALI-CHOUREY.jpg';
import HITESH_CHHINKANIWALA from '../assets/HITESH-CHHINKANIWALA.jpg';
import Harshita from '../assets/Harshita.jpg';
import khushi_profile from '../assets/khushi_profile.jpeg';
import shrey from '../assets/shrey.jpeg';
import dev from '../assets/dev.jpeg';
import devvrat from '../assets/devvrat.jpg';

const teamMembers = [
    {
        name: "Dr. Vaishali Chourey",
        post: "Faculty Mentor ACM-W",
        image: VAISHALI_CHOUREY,
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/vaishalichourey/",
            gmail: "mailto:vaishali.chourey@aii.ac.in",
        },
    },
    {
        name: "Prof. Hitesh Chhinkaniwala",
        post: "Faculty Mentor ACM Student",
        image: HITESH_CHHINKANIWALA,
        socialLinks: {
            linkedin: "ACM-website\frontend\src\assets\HITESH-CHHINKANIWALA.jpg",
            gmail: "mailto:hitesh.chhinkaniwala@adaniuni.ac.in",
        },
    },
    {
        name: "Harshita Bhambhani",
        post: "Student Chair",
        image: Harshita,
        socialLinks: {
            twitter: "https://x.com/harshitab16",
            linkedin: "https://www.linkedin.com/in/harshitaa16/",
            gmail: "mailto:harshitabhambhani5@gmail.com",
        },
    },
    {
        name: "Khushi Bansal",
        post: "Secretary",
        image: khushi_profile,
        socialLinks: {
            twitter: "https://x.com/khushibansalll",
            linkedin: "https://www.linkedin.com/in/khushibansal13/",
            gmail: "mailto:khushibansal1302@gmail.com",
        },
    },
    {
        name: "Ananya Sanghavi",
        post: "Treasurer",
        image: "https://via.placeholder.com/150",
        socialLinks: {
            facebook: "https://facebook.com/sarahwhite",
            twitter: "https://twitter.com/sarahwhite",
            linkedin: "https://linkedin.com/in/sarahwhite",
            gmail: "mailto:sarahwhite@gmail.com",
        },
    },
    {
        name: "Nidhi Bolia",
        post: "Vice Chair",
        image: "https://via.placeholder.com/150",
        socialLinks: {
            facebook: "https://facebook.com/davidblack",
            twitter: "https://twitter.com/davidblack",
            linkedin: "https://linkedin.com/in/davidblack",
            gmail: "mailto:davidblack@gmail.com",
        },
    },
    {
        name: "Vidhi Patel",
        post: "Webmaster",
        image: "https://via.placeholder.com/150",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/vidhi-patel-627962254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            gmail: "mailto:Pvidhi949@gmail.com",
        },
    },
    {
        name: "Janmejay Chatterjee",
        post: "Student Chair",
        image: "https://via.placeholder.com/150",
        socialLinks: {
            facebook: "https://facebook.com/davidblack",
            twitter: "https://twitter.com/davidblack",
            linkedin: "https://linkedin.com/in/davidblack",
            gmail: "mailto:davidblack@gmail.com",
        },
    },
    {
        name: "Devvrat Singh",
        post: "Vice Chair",
        image: devvrat,
        socialLinks: {
            twitter: "https://x.com/PariHunMain_",
            linkedin: "https://www.linkedin.com/in/devvrat-singh-rathod",
            gmail: "mailto:rathoddevvratsingh777@gmail.com",
        },
    },
    {
        name: "Dev Sanghavi",
        post: "Treasurer",
        image: dev,
        socialLinks: {
            twitter: "https://x.com/Dv04Dshttps://x.com/Dv04Ds",
            linkedin: "https://www.linkedin.com/in/dev-sanghvi-616843128/",
            gmail: "mailto:devsanghvi.cse21@aii.ac.in",
        },
    },
    {
        name: "Paras Shah",
        post: "Secretary",
        image: "https://via.placeholder.com/150",
        socialLinks: {
            facebook: "https://facebook.com/davidblack",
            twitter: "https://twitter.com/davidblack",
            linkedin: "https://linkedin.com/in/davidblack",
            gmail: "mailto:davidblack@gmail.com",
        },
    },
    {
        name: "Shrey Shah",
        post: "Webmaster",
        image: shrey,
        socialLinks: {
            twitter: "https://x.com/Shrey0610",
            linkedin: "www.linkedin.com/in/shrey-shah-06o10",
            gmail: "mailto:shreyshah.cse21@aii.ac.in ",
        },
    },
];

export default function MeetTheTeam() {
    return (
        <section id="meet-the-team" className="py-8 w-full">
            <div className="container mx-auto p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="border p-6 rounded-lg shadow-lg bg-white transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="text-center">
                                {/* Image */}
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
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
