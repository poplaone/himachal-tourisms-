
import React from "react";
import { Check, X } from "lucide-react";

interface InclusionExclusionListProps {
  items: string[];
  type: "inclusion" | "exclusion";
}

const InclusionExclusionList = ({
  items,
  type
}: InclusionExclusionListProps) => {
  return (
    <div className={`${type === "inclusion" ? "border-r border-white/10" : ""}`}>
      <h4 className={`text-sm font-bold text-white text-center py-1 ${type === "inclusion" ? "bg-emerald-500/60" : "bg-rose-500/60"} backdrop-blur-sm`}>
        {type === "inclusion" ? "Inclusion" : "Exclusion"}
      </h4>
      <ul className="space-y-1 p-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start text-[11px] md:text-xs">
            {type === "inclusion" ? 
              <Check className="w-3 h-3 mr-1 text-emerald-400 mt-0.5 flex-shrink-0" /> : 
              <X className="w-3 h-3 mr-1 text-rose-400 mt-0.5 flex-shrink-0" />
            }
            <span className="text-gray-200">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InclusionExclusionList;
