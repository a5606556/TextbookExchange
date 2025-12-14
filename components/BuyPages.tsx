import React, { useState } from 'react';
import { BOOKS, DEPARTMENTS } from '../constants';

const BuyPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState<number | null>(null);

  const filteredBooks = BOOKS.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    // In a real app, books would have a departmentId. For now, just filtering by search.
    return matchesSearch;
  });

  return (
    <div className="flex flex-col gap-8 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Search Section */}
      <div className="flex flex-col gap-4">
        <h1 className="text-white text-3xl font-bold">Find Your Textbooks</h1>
        <div className="flex w-full flex-1 items-stretch rounded-xl h-12 bg-surface-dark border border-border-dark overflow-hidden focus-within:border-primary/50 transition-colors">
          <div className="text-[#90cba9] flex items-center justify-center pl-4">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input
            className="flex w-full min-w-0 flex-1 resize-none bg-transparent text-white focus:outline-0 h-full placeholder:text-[#90cba9]/70 px-4 text-sm"
            placeholder="Search by title, author, or ISBN..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          <button 
            onClick={() => setSelectedDept(null)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold border transition-colors ${selectedDept === null ? 'bg-primary text-[#102318] border-primary' : 'bg-surface-dark text-white border-border-dark hover:border-primary/50'}`}
          >
            All Departments
          </button>
          {DEPARTMENTS.map(dept => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(dept.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold border transition-colors ${selectedDept === dept.id ? 'bg-primary text-[#102318] border-primary' : 'bg-surface-dark text-white border-border-dark hover:border-primary/50'}`}
            >
              {dept.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBooks.map((book) => (
           <div key={book.id} className="flex flex-col gap-3 group cursor-pointer bg-surface-dark/30 p-2 rounded-xl border border-transparent hover:border-border-dark transition-colors">
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
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col px-1">
                <h3 className="text-white font-bold truncate text-sm sm:text-base">{book.title}</h3>
                <p className="text-gray-400 text-xs truncate">{book.author}</p>
                <div className="flex items-end gap-2 mt-2">
                  <span className="text-primary font-bold text-base sm:text-lg">${book.price}</span>
                  <span className="text-gray-500 text-xs sm:text-sm line-through decoration-1">
                    ${book.originalPrice}
                  </span>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default BuyPage;