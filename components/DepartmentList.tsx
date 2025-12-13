import React from 'react';
import { DEPARTMENTS } from '../constants';

const DepartmentList: React.FC = () => {
  return (
    <div className="flex flex-col mb-12">
      <div className="flex items-center justify-between px-2 pb-5">
        <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
          Browse by Department
        </h2>
        <a href="#" className="text-primary text-sm font-bold hover:underline">
          View All
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {DEPARTMENTS.map((dept) => (
          <div
            key={dept.id}
            className="flex flex-col gap-3 rounded-xl border border-border-dark bg-surface-dark p-4 items-center justify-center text-center hover:border-primary/50 transition-colors cursor-pointer group h-32"
          >
            <span className="material-symbols-outlined text-white text-[32px] group-hover:text-primary transition-colors">
              {dept.icon}
            </span>
            <h3 className="text-white text-sm font-bold leading-tight">{dept.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentList;
