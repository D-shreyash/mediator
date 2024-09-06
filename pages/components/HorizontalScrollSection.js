import React, { useState } from 'react';

const HorizontalScrollSection = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  
  const cards = [
    { title: 'Age Group', description: "You're doing good!" },
    { title: 'Age Group', description: "You're doing good!" },
    { title: 'Age Group', description: "You're doing good!" },
    { title: 'Age Group', description: "You're doing good!" },
    { title: 'Age Group', description: "You're doing good!" },
    { title: 'Age Group', description: "You're doing good!" },
    { title: 'Followers Region', description: "30% of your followers are from Kollam" },
    { title: 'Revenue Overview', description: 'See your growth here' },
    { title: 'Overall Performance', description: 'Followers 4.5k, Reaches 5.6k' },
    { title: 'Overall Performance', description: 'Followers 4.5k, Reaches 5.6k' }
  ];
  
  const handleShowMore = () => {
    setVisibleCards(visibleCards + 4);
  };

  const handleShowLess = () => {
    setVisibleCards(4);
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Service Packages</h3>
      <div className="flex flex-wrap justify-center overflow-x-auto space-x-4 bg-blue-500 p-4 rounded-lg">
        {cards.slice(0, visibleCards).map((card, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md h-72 flex-none w-72 text-center mb-4">
            <h4 className="font-bold">{card.title}</h4>
            <div className="my-4">
              {/* Placeholder for graph */}
              <div className="bg-gray-300 h-32"></div>
            </div>
            <p className="text-sm">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        {visibleCards < cards.length && (
          <button onClick={handleShowMore} className="text-blue-700 mr-4">
            Show more
          </button>
        )}
        {visibleCards > 4 && (
          <button onClick={handleShowLess} className="text-blue-700">
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
