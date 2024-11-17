import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SubsidiaryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

const SubsidiaryCard: React.FC<SubsidiaryCardProps> = ({ title, description, icon: Icon, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-xl transition-all hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75 z-10"></div>
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
        <div className="flex items-center gap-3 mb-2">
          <Icon className="w-6 h-6" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default SubsidiaryCard;