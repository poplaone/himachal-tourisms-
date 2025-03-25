
import React from "react";

interface PackageFeatureIconProps {
  icon: React.ElementType;
  title: string;
  active?: boolean;
}

const PackageFeatureIcon = ({
  icon: Icon,
  title,
  active = true
}: PackageFeatureIconProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`p-2 rounded-full ${active ? 'bg-white/10' : 'bg-gray-500/20'} mb-1`}>
        <Icon className={`w-5 h-5 ${active ? 'text-white' : 'text-gray-400'}`} />
      </div>
      <span className={`text-xs font-medium ${active ? 'text-white' : 'text-gray-400'}`}>{title}</span>
    </div>
  );
};

export default PackageFeatureIcon;
