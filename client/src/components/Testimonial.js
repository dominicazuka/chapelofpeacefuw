import React from 'react';
import TestimonialCard from 'material-testimonial-card';

function Testimonial() {
  return (
    <TestimonialCard
		name={"John Smith"}
		image={"https://thispersondoesnotexist.com/image"}
		content={"Wow! This testimonial card is so amazing! I would like to use it in my project!"}
		project={"Testimonial card"}
	/>
  );
}

export default Testimonial;
