import aboutImage from "../1.About/about.webp"
const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">About Us</h2>
        <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
            <div className="mb-8 lg:mb-0">
                <img src={aboutImage} alt="About IT services" className="w-full h-auto" />
            </div>
            <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
            At [Your Company Name], we’re passionate about simplifying technology so you can focus on what truly matters. With years of experience in IT services and maintenance, we specialize in delivering reliable, efficient, and innovative solutions tailored to meet the unique needs of businesses and individuals alike.

Our team of experts is dedicated to providing top-tier support in everything from network management and cloud solutions to cybersecurity and system upgrades. We pride ourselves on staying ahead of the curve, ensuring that your technology not only works today but is ready for tomorrow.

We believe in building long-term partnerships with our clients, offering personalized service with a human touch. Whether you're a small business looking for IT infrastructure setup or a large organization in need of ongoing tech support, we’re here to keep your systems running smoothly and securely.

Let us handle the tech, so you can stay focused on growing your business.
            </p>
        </div>
    </section>
  )
}

export default About