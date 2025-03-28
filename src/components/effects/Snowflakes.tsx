
import { useEffect, useState } from "react";

// Snowflake characters array
const snowflakeChars = ["❅", "❆", "❄"];

interface SnowflakesProps {
  numberOfFlakes?: number;
  refreshInterval?: number;
  zIndex?: number;
}

const Snowflakes = ({
  numberOfFlakes = 15,
  refreshInterval = 20000,
  zIndex = -10
}: SnowflakesProps) => {
  const [activeSnowflakes, setActiveSnowflakes] = useState<React.ReactNode[]>([]);
  
  // Create snowflakes on component mount
  useEffect(() => {
    const createSnowflakes = () => {
      const snowflakeElements = [];
      
      for (let i = 0; i < numberOfFlakes; i++) {
        const randomChar = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
        const animationDuration = 7 + Math.random() * 15; // Slower animation between 7-22s
        const leftPosition = Math.random() * 100; // Random position
        const animationDelay = Math.random() * 8; // Increased random delay for more natural look
        const opacity = 0.3 + Math.random() * 0.4; // Lower opacity between 0.3-0.7
        
        snowflakeElements.push(
          <div 
            key={i}
            className="snowflake"
            style={{
              left: `${leftPosition}%`,
              animationDuration: `${animationDuration}s`,
              animationDelay: `${animationDelay}s`,
              fontSize: `${Math.random() * 8 + 6}px`, // Smaller size between 6-14px
              opacity: opacity
            }}
          >
            {randomChar}
          </div>
        );
      }
      
      setActiveSnowflakes(snowflakeElements);
    };
    
    createSnowflakes();
    
    // Refresh snowflakes periodically
    const interval = setInterval(() => {
      createSnowflakes();
    }, refreshInterval);
    
    return () => clearInterval(interval);
  }, [numberOfFlakes, refreshInterval]);

  return (
    <>
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex }}>
        {activeSnowflakes}
      </div>
      
      {/* Snowfall animation styles */}
      <style>
        {`
          @keyframes snowfall {
            0% {
              transform: translateY(-10px) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 0.8;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
          
          .snowflake {
            position: fixed;
            top: -10px;
            color: white;
            text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
            user-select: none;
            animation-name: snowfall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            z-index: 0;
            pointer-events: none;
            will-change: transform;
          }
        `}
      </style>
    </>
  );
};

export default Snowflakes;
