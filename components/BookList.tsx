import React, { useRef } from 'react';
import { BOOKS } from '../constants';

const BookList: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200 + 16; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex flex-col mb-16">
      <div className="flex items-center justify-between px-2 pb-5">
        <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
          Fresh Arrivals &amp; Best Deals
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="size-8 rounded-full border border-border-dark bg-surface-dark flex items-center justify-center text-white hover:bg-border-dark transition-colors"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={() => scroll('right')}
            className="size-8 rounded-full border border-border-dark bg-surface-dark flex items-center justify-center text-white hover:bg-border-dark transition-colors"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      
      {/* Scrolling Horizontal Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar"
      >
        {BOOKS.map((book) => (
          <div key={book.id} className="flex-none w-[200px] snap-start">
            <div className="flex flex-col gap-3 group cursor-pointer">
              <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden border border-border-dark bg-surface-dark">
                {book.discountBadge && (
                  <div
                    className={`absolute top-2 left-2 ${
                      book.isNew ? 'bg-yellow-400' : 'bg-primary'
                    } text-[#102318] text-xs font-bold px-2 py-1 rounded-full z-10`}
                  >
                    {book.discountBadge}
                  </div>
                )}
                <img
                  src={book.imageUrl}
                  alt={`${book.title} Book Cover`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white font-bold truncate">{book.title}</h3>
                <p className="text-gray-400 text-xs truncate">{book.author}</p>
                <div className="flex items-end gap-2 mt-1">
                  <span className="text-primary font-bold text-lg">${book.price}</span>
                  <span className="text-gray-500 text-sm line-through decoration-1">
                    ${book.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
