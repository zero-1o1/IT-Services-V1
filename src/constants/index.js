import Hero from "../assets/hero.webp";
import kitchenImage from "../assets/kitchen.webp";
import bathroomImage from "../assets/bathroom.webp";
import livingRoomImage from "../assets/living-room.webp";

import portfolio1 from "../assets/portfolio1.webp";
import portfolio2 from "../assets/portfolio2.webp";
import portfolio3 from "../assets/portfolio3.webp";
import portfolio4 from "../assets/portfolio4.webp";
import portfolio5 from "../assets/portfolio5.webp";
import portfolio6 from "../assets/portfolio6.webp";

import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

export const LINKS = [
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Reviews",
    link: "#reviews",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const HERO_CONTENT = {
  title: "IT services",
  subtitle: "(subtitle here)",
  Image: Hero,
};

export const SERVICES_CONTENT = [
  {
    title: "Network Infrastructure",
    description:
      "Our network infrastructure solutions are designed to provide your business with fast, reliable, and secure connectivity. We specialize in designing, installing, and maintaining network systems that scale with your needs, ensuring seamless communication between your devices, servers, and users. Whether you're setting up a local office network or a complex enterprise environment, we optimize performance and security at every step.",
    image: kitchenImage,
    alt: "Network Infrastructure",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Transform your business with our scalable cloud infrastructure services. We help you migrate, manage, and optimize your IT resources in the cloud, enabling greater flexibility, cost-efficiency, and accessibility. Our cloud solutions empower your organization to work from anywhere while ensuring data security, backup, and easy collaboration for your team.",
    image: bathroomImage,
    alt: "Cloud Infrastructure",
  },
  {
    title: "CCTV Solutions",
    description:
      "Protect your premises with our state-of-the-art CCTV solutions. We offer comprehensive surveillance systems tailored to your business's security needs, including high-definition cameras, remote monitoring, and smart integrations. Whether you need surveillance for a single site or multiple locations, our team ensures you have reliable, real-time oversight of your assets.",
    image: livingRoomImage,
    alt: "CCTV Solutions",
  },
  {
    title: "HVAC Solutions",
    description:
      "Optimize your workspace's climate control with our advanced HVAC solutions. We integrate intelligent systems that ensure efficient heating, ventilation, and air conditioning to keep your environment comfortable year-round. Our services include system design, installation, and maintenance, helping you achieve energy efficiency and cost savings.",
    image: livingRoomImage,
    alt: "HVAC Solutions",
  },
  {
    title: "IT Annual Maintenance Contract",
    description:
      "Ensure your business's IT systems run smoothly with our comprehensive annual maintenance contract (AMC) services. We provide proactive monitoring, regular updates, troubleshooting, and on-demand support to minimize downtime and keep your technology performing at its best. With our AMC, you get peace of mind knowing your IT infrastructure is in expert hands.",
    image: livingRoomImage,
    alt: "IT Annual Maintenance Contract",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "(name-1)",
    description:
      "(description-1)",
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "(name-2)",
    description:
      "(description-2)",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: "(name-3)",
    description:
      "(description-3)",
    image: portfolio3,
    link: "#",
  },
  {
    id: 4,
    name: "(name-4)",
    description:
      "(description-4)",
    image: portfolio4,
    link: "#",
  },
  {
    id: 5,
    name: "(name-5)",
    description:
      "(description-5)",
    image: portfolio5,
    link: "#",
  },
  {
    id: 6,
    name: "(name-6)",
    description:
      "(description-6)",
    image: portfolio6,
    link: "#",
  },
];

export const REVIEWS = {
  text: "Hear what our clients have to say about their experiences with IT Services Company. We take pride in our work and are committed to delivering top-notch IT services.",
  reviews: [
    {
      name: "person-1",
      title: "client-1",
      review:
        "review-1",
      image: user1,
    },
    {
      name: "person-2",
      title: "client-2",
      review:
        "review-2",
      image: user2,
    },
    {
      name: "person-3",
      title: "client-3",
      review:
        "review-3",
      image: user3,
    },
    {
      name: "person-4",
      title: "client-4",
      review:
        "review-4",
      image: user4,
    },
    {
      name: "person-5",
      title: "client-5",
      review:
        "review-5",
      image: user5,
    },
    {
      name: "person-6",
      title: "client-6",
      review:
        "review-6",
      image: user6,
    },
  ],
};

export const CONTACT_INFO = {
  text: "Have questions or need more information? Get in touch with us, and we ll be happy to assist you.",
  phone: {
    label: "Phone",
    value: "(number)",
  },
  email: {
    label: "Email",
    value: "(email)",
  },
  address: {
    label: "Address",
    value: "(address)",
  },
};
