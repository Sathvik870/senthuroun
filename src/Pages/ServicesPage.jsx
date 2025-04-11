import React from 'react';
import '../styles/ServicesPage.css';
import image from '../images/summa.jpg'; // ✅
const services = [
  {
    title: 'Wedding Photography & Videography',
    description: 'Your wedding is a once-in-a-lifetime event, and we ensure every precious moment is beautifully captured...',
    image: image,
    primary: true,
  },
  {
    title: 'New Born Baby Shoots & Toddlers',
    description: 'Adorable, creative setups for your baby’s first memories.',
    image: image,
  },
  {
    title: 'Ear Piercing Ceremony',
    description: 'Capture the precious cultural moment with grace and tradition.',
    image: image,
  },
  {
    title: 'Puberty Ceremony',
    description: 'Celebrate this milestone with beautiful, respectful photography.',
    image: image,
  },
  {
    title: 'Housewarming Ceremony',
    description: 'Commemorate your new beginning with warm, vibrant photos.',
    image: image,
  },
  {
    title: 'Baby Shower',
    description: 'Delight in capturing the love and excitement of this special celebration.',
    image: image,
  },
  {
    title: 'Corporate Photography',
    description: 'Elevate your brand and events with professional, impactful photography.',
    image: image,
  },
];

const ServicesPage = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our <span>Services</span></h1>

      <div className="services-list">
        {services.map((service, idx) => (
          <div key={idx} className={`service-card ${service.primary ? 'primary' : ''}`}>
            <img src={service.image} alt={service.title} />
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              {service.primary ? (
                <div className="primary-buttons">
                  <button className="outline-btn">Know More</button>
                  <button className="filled-btn">Book Now</button>
                </div>
              ) : (
                <div className="arrow">→</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-button">
        <button>Know More Services</button>
      </div>
    </div>
  );
};

export default ServicesPage;
