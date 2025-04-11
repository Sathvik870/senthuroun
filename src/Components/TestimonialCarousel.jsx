import React, { useState } from 'react';
import '../styles/TestimonialCarousel.css';
// Import your real images here
import image1 from '../images/summa.jpg';
import image2 from '../images/summa.jpg';
import image3 from '../images/summa.jpg';
const testimonials = [
  {
    name: 'Michelle Lindstrom',
    location: 'Nagercoil',
    image: image1,
    messageTitle: 'I Really Enjoyed Working With Stunning Events',
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    additional: `Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Laoreet sit amet cursus sit amet dictum amet ju.`,
  },
  {
    name: 'Priya Sharma',
    location: 'Coimbatore',
    image: image2,
    messageTitle: 'Amazing Experience and Beautiful Shots!',
    message: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    additional: `Photography was very smooth and professional. Absolutely loved the results.`,
  },
  {
    name: 'Rahul Mehta',
    location: 'Chennai',
    image: image3,
    messageTitle: 'Professional and Creative',
    message: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    additional: `Would definitely recommend Stunning Events for memorable occasions.`,
  }
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">
        What <span>Our</span> <strong>Clients</strong> Say
      </h2>

      <div className="testimonial-carousel">
        <div className="testimonial-card image-side">
          <img src={testimonials[(current - 1 + testimonials.length) % testimonials.length].image} alt="Previous client" />
        </div>

        <div className="testimonial-card main-card">
          <img className="quote-image" src="https://img.icons8.com/ios-filled/50/quote-left.png" alt="Quote" />
          <h3>{testimonials[current].messageTitle}</h3>
          <p>{testimonials[current].message}</p>
          <p>{testimonials[current].additional}</p>
          <div className="client-info">
            <strong>{testimonials[current].name}</strong> — {testimonials[current].location}
          </div>
        </div>

        <div className="testimonial-card image-side">
          <img src={testimonials[(current + 1) % testimonials.length].image} alt="Next client" />
        </div>
      </div>

      <div className="carousel-controls">
        <button onClick={prev}>←</button>
        <button onClick={next}>→</button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
