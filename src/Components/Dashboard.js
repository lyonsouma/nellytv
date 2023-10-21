import React from 'react';
import Logo from '../Assets/Images/logoz.png';
import '../Assets/Styles/Dashboard.css';
import { Link as ScrollLink } from 'react-scroll';



const Dashboard = () => {
    
    return (
        <div className="container-fluid">
            <div className='row nav-container'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img className='logo mx-5' src={Logo} alt="Logo" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a href='' className='link'>
                        <ScrollLink
                         to='home'
                         spy={true}
                         smooth={true}
                         duration={100}
                         >Home</ScrollLink></a>

                       <a href='' className='link'>
                        <ScrollLink
                         to='about-us'
                         spy={true}
                         smooth={true}
                         duration={100}
                         >About</ScrollLink></a>

                       <a href='' className='link'>
                        <ScrollLink
                         to='portfolio'
                         spy={true}
                         smooth={true}
                         duration={100}
                         >Portfolio</ScrollLink></a>

                       <a href='' className='link'>
                        <ScrollLink
                         to='service'
                         spy={true}
                         smooth={true}
                         duration={100}
                         >Service</ScrollLink></a>

                         
                       <a href='' className='link'>
                        <ScrollLink
                         to='contact'
                         spy={true}
                         smooth={true}
                         duration={100}
                         >Contact</ScrollLink></a>

                    </div>
                </nav>
            </div>
            <div className='row'>
                <section id='home'  className='home-container'>
                    <div className="container-fluid ">
                        {/* <h3>Welcome to [Your Studio Name]</h3>
                        <p>🎥 **Capturing Moments, Creating Memories** 📸</p>
                        <p>Are you ready to embark on a visual journey like no other? At [Your Studio Name], we specialize in the art of visual storytelling. We turn ordinary moments into extraordinary memories and transform your ideas into captivating content.</p>
                        <h3>What We Do</h3>
                        <p>🎬 Video Production: Our team of skilled videographers and directors turn your ideas into stunning cinematic masterpieces. From concept to post-production, we handle it all.</p>
                        <p>📡 Live Streaming: With the power of live streaming, we bring your events, conferences, and special occasions to a global audience in real-time. No borders, no boundaries.</p>
                        <p>🎙️ Audio Recording: Crystal-clear sound is the soul of any great production. Our audio engineers ensure your message is heard loud and clear.</p>
                        <p>📷 Photography: Our photographers have an eye for the extraordinary in the ordinary. Let us frame your world beautifully through the lens.</p> */}
                    </div>
                </section>

                <section id="about-us" className='mt-5'>
                    <div className="container">
                        <h3>About Us</h3>
                        <p>At [Your Studio Name], we're passionate about bringing your vision to life through the power of visual storytelling. With a focus on video production, live streaming, audio recording, and photography, we've been serving clients with professionalism and creativity for [X] years.</p>
                        <h3>Our Mission</h3>
                        <p>Our mission is simple: to create compelling, visually stunning content that captures the essence of your ideas, brand, or event. We're dedicated to exceeding your expectations, delivering top-quality services, and providing a seamless and enjoyable experience from concept to completion.</p>
                        <h3>Our Team</h3>
                        <p>Behind every successful project, there's a dedicated team of experts. At [Your Studio Name], we take pride in our talented professionals who bring diverse skills and perspectives to the table. Our team includes:</p>
                        <ul>
                            <li>Videographers: Experienced in crafting cinematic stories and capturing memorable moments.</li>
                            <li>Live Streaming Specialists: Experts in live broadcasting for events, conferences, and more.</li>
                            <li>Audio Engineers: Masters of sound, ensuring your audio quality is top-notch.</li>
                            <li>Photographers: Artists who frame your world beautifully through the lens.</li>
                            <li>Post-Production Wizards: Skilled editors who transform raw footage into polished masterpieces.</li>
                        </ul>
                        <p>Our Approach</p>
                        <p>We believe in a collaborative approach, working closely with our clients to understand their unique goals and requirements. This allows us to tailor our services to your specific needs and deliver content that resonates with your target audience.</p>
                        <h3>Our Services</h3>
                        <ul>
                            <li>Video Production: From concept development to shooting and editing, we offer a full suite of video production services.</li>
                            <li>Live Streaming: Whether it's a corporate event, concert, or webinar, we ensure your message reaches your audience in real-time.</li>
                            <li>Audio Recording: High-quality audio is the foundation of any successful project, and we have the tools and expertise to make your audio shine.</li>
                            <li>Photography: Our photographers have a keen eye for detail and can capture the essence of any subject.</li>
                        </ul>
                        <h3>Our Equipment</h3>
                        <p>We invest in state-of-the-art equipment to ensure the highest production quality. From 4K cameras to studio lighting, we're equipped to handle a wide range of projects.</p>
                        <h3>Client Testimonials</h3>
                        <p>[Include a few quotes or endorsements from satisfied clients here.]</p>
                        <h3>Get in Touch</h3>
                        <p>We're excited to learn more about your project and how we can help you achieve your visual goals. Feel free to get in touch with us to discuss your project, request a quote, or schedule a consultation. Let's embark on a creative journey together!</p>
                        <p>[Contact Information]</p>
                        <p>Thank you for considering [Your Studio Name] for your video, live streaming, recording, and photography needs. We look forward to the opportunity to work with you.</p>
                    </div>
                </section>

                <section id="portfolio" className='bg-light mt-5'>
                    <div className="container">
                       <h1>Portfolio</h1>
                    </div>
                </section>
                <section id="service" className='bg-warning mt-5'>
                    <div className="container">
                    <h1>Service</h1>
                    </div>
                </section>
                <section id="contact" className='contact mt-5'>
                      <div className='container-fluid'>
                        <h3 className='class-brand'>Contact</h3>
                        <div className=' container-fluid row'>
                            <div className='col text-danger'><input placeholder='Name...'/></div>
                            <div className='col text-danger'><input placeholder='Phone...'/></div>
                            <div className='col text-danger'><input placeholder='Email...'/></div>
                        </div>
                      </div>
                </section>
            </div>
        </div>
    );
}

export default Dashboard;
