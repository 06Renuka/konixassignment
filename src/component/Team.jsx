import React from 'react';

const Team = () => {
  // Static data for testimonials
  const testimonials = [
    {
      name: "John Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://via.placeholder.com/50",
    },
    {
      name: "Jane Doe",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://via.placeholder.com/50",
    },
    {
        name: "Jane Doe",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://via.placeholder.com/50",
      }
  ];

  return (
    <div style={styles.container}  >
      <h3>Team</h3>
      <div style={styles.testimonialContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={styles.testimonial}>
            <img src={testimonial.imageUrl} alt="Testimonial Avatar" style={styles.avatar} />
            <div style={styles.info}>
              <h6>{testimonial.name}</h6>
              <p style={styles.description}>{testimonial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    backgroundColor: '#fff',
    padding: '20px',
    margin:'5px',
  },
  testimonialContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  testimonial: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  info: {
    width: '80%',
  },
  description: {
    margin: '5px 0',
  },
};

export default Team;

