
import React from "react";
import { TourPackageProps } from "./types";

interface PriceTableProps {
  title: string;
  privateTourPrices: TourPackageProps['privateTourPrices'];
}

const PriceTable = ({
  title,
  privateTourPrices
}: PriceTableProps) => {
  if (!privateTourPrices) return null;
  
  const isOnDemand = privateTourPrices.twoPersons === "On Demand Only";
  
  return (
    <div className="mt-3 mb-5">
      <h4 className="text-center bg-white/20 text-white text-sm font-semibold py-1 mb-0 backdrop-blur-sm">{title}</h4>
      {isOnDemand ? (
        <div className="bg-black/20 text-center py-2 text-white">
          On Demand Only
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-5 gap-0 text-center bg-black/30">
            <div className="bg-white/10 text-[10px] md:text-xs py-1 text-white font-medium">02 Pax</div>
            <div className="bg-white/10 text-[10px] md:text-xs py-1 text-white font-medium">03 Pax</div>
            <div className="bg-white/10 text-[10px] md:text-xs py-1 text-white font-medium">04 Pax</div>
            <div className="bg-white/10 text-[10px] md:text-xs py-1 text-white font-medium">05 Pax</div>
            <div className="bg-white/10 text-[10px] md:text-xs py-1 text-white font-medium">10/10+ Pax</div>
            
            <div className="text-[10px] md:text-xs py-1 font-medium text-amber-200 border-r border-white/10">{privateTourPrices.twoPersons}</div>
            <div className="text-[10px] md:text-xs py-1 font-medium text-amber-200 border-r border-white/10">{privateTourPrices.threePersons}</div>
            <div className="text-[10px] md:text-xs py-1 font-medium text-amber-200 border-r border-white/10">{privateTourPrices.fourPersons}</div>
            <div className="text-[10px] md:text-xs py-1 font-medium text-amber-200 border-r border-white/10">{privateTourPrices.fivePersons}</div>
            <div className="text-[10px] md:text-xs py-1 font-medium text-amber-200">{privateTourPrices.tenPersons}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceTable;
