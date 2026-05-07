'use client';

import { useState, useCallback } from 'react';

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
}

export function PriceFilter({ minPrice, maxPrice, onMinChange, onMaxChange }: PriceFilterProps) {
  const [localMin, setLocalMin] = useState(minPrice);
  const [localMax, setLocalMax] = useState(maxPrice);

  const handleMinChange = useCallback((value: number) => {
    if (value <= localMax) {
      setLocalMin(value);
      onMinChange(value);
    }
  }, [localMax, onMinChange]);

  const handleMaxChange = useCallback((value: number) => {
    if (value >= localMin) {
      setLocalMax(value);
      onMaxChange(value);
    }
  }, [localMin, onMaxChange]);

  return (
    <div className="filter-block">
      <h3 className="filter-title">▼ FILTER BY PRICE</h3>
      <div className="price-slider-container">
        <input
          type="range"
          min="0"
          max="6000"
          value={localMin}
          onChange={(e) => handleMinChange(Number(e.target.value))}
          className="price-slider price-slider-min"
        />
        <input
          type="range"
          min="0"
          max="6000"
          value={localMax}
          onChange={(e) => handleMaxChange(Number(e.target.value))}
          className="price-slider price-slider-max"
        />
        <div className="price-range-track">
          <div className="price-range-fill"></div>
        </div>
      </div>
      <p className="price-text">Price: ${localMin} – ${localMax.toLocaleString()}</p>
    </div>
  );
}
