import React, { useState } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Peter Breis",
    rating: 3,
    date: "3 days ago",
    comment: `Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality. Couldn’t be happier.`,
    avatar: "/avtar.png",
  },
  {
    name: "John Doe",
    rating: 4,
    date: "5 days ago",
    comment: `Great service! Helped me grow my Instagram significantly. Very professional and responsive.`,
    avatar: "/avtar.png",
  },
  {
    name: "Jane Smith",
    rating: 5,
    date: "2 days ago",
    comment: `Amazing experience! The team is very knowledgeable and supportive. Highly recommend!`,
    avatar: "/avtar.png",
  },
  {
    name: "Emily Johnson",
    rating: 4,
    date: "1 week ago",
    comment: `Very helpful and responsive. They provide great insights and tips for growing your social media.`,
    avatar: "/avtar.png",
  },
  {
    name: "Michael Brown",
    rating: 2,
    date: "3 weeks ago",
    comment: `The service is okay, but I expected more engagement. Maybe it takes more time.`,
    avatar: "/avtar.png",
  },
  {
    name: "Chris Davis",
    rating: 5,
    date: "4 days ago",
    comment: `Excellent service! They know what they're doing and deliver great results.`,
    avatar: "/avtar.png",
  },
  {
    name: "Amanda Wilson",
    rating: 3,
    date: "6 days ago",
    comment: `Good service overall, but communication could be better.`,
    avatar: "/avtar.png",
  },
  {
    name: "David Martinez",
    rating: 4,
    date: "2 weeks ago",
    comment: `They helped me understand social media marketing better and I saw good results.`,
    avatar: "/avtar.png",
  },
  {
    name: "Sarah Lee",
    rating: 5,
    date: "1 month ago",
    comment: `Top-notch service! Very professional and effective.`,
    avatar: "/avtar.png",
  },
  {
    name: "Robert Kim",
    rating: 4,
    date: "3 days ago",
    comment: `Great experience, very knowledgeable team.`,
    avatar: "/avtar.png",
  },
];

const getStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className="text-yellow-500">
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-300">
          ★
        </span>
      );
    }
  }
  return stars;
};

const CommentsSection = () => {
  const [visibleReviews, setVisibleReviews] = useState(3);

  const handleShowMore = () => {
    setVisibleReviews(visibleReviews + 3);
  };

  const handleShowLess = () => {
    setVisibleReviews(3);
  };

  return (
    <div className="max-w-2xl  mt-8">
      {reviews.slice(0, visibleReviews).map((review, index) => (
        <div key={index} className="border-b border-gray-200 pb-4 mb-4">
          <div className="flex items-center mb-2">
            <Image
              src={review.avatar}
              alt={review.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-4">
              <h4 className="font-bold">{review.name}</h4>
              <div className="flex items-center text-sm text-gray-600">
                {getStars(review.rating)}
                <span className="ml-2">{review.date}</span>
              </div>
            </div>
          </div>
          <p className="text-gray-800">{review.comment}</p>
        </div>
      ))}
      <div className="flex justify-end mt-4">
        {visibleReviews < reviews.length && (
          <button onClick={handleShowMore} className="text-blue-700 mr-4">
            Show more
          </button>
        )}
        {visibleReviews > 3 && (
          <button onClick={handleShowLess} className="text-blue-700">
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
