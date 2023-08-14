import React from "react";

const Card = () => {
  return <div class="testimonial-card">
    <video controls="true">
      <source src="https://www.youtube.com/watch?v=_XSrkAJ_V8g&list=RD_XSrkAJ_V8g&start_radio=1" />
    </video>

    <div class="testimonial-card-content">
      <h6 class="testimonial-card-title">
        Card Title
      </h6>
      <p class="testimonial-card-description">This is the description of the card. It can be a brief summary of the content.</p>
    </div>
    <div class="testimonial-card-footer">
      Footer Section
    </div>
  </div>
};

export default Card;
