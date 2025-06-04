import React from "react";

import ImageCarousel from "../ImageCarousel";

import "./reviewCard.css";

const ReviewCard = ({ templateReview }) => {
  const star = <div className="star"></div>;

  return (
    <>
      <div className="review_spinner">
        {templateReview.map((review, index) => (
          <div key={index} className="review">
            <div className="review_card">
              <div className="name_review">
                <h3>{review.name}</h3>
                <h3>Дата приїзду : {review.date}</h3>
              </div>
              <div className="image_carousel_flex">
                <div className="star_content">
                  {[...Array(5)].map((_, item) => {
                    return (
                      <span key={item} className="star_raiting">
                        {star}
                      </span>
                    );
                  })}
                </div>
                <h3 className="vacancy_name">{review.vacancy}</h3>
                <p className="review_text">{review.review}</p>
                <ImageCarousel images={review.images} />
              </div>
              <div className="btn_review_see_vacancy">
                <a href="#" target="_blank">
                  Переглянути цю вакансію
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewCard;
