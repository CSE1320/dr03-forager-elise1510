'use client';
import { useRouter } from 'next/router';
import React from 'react';
const MyComponent = () => {
  const router = useRouter(); // ✅ Hooks must be at the top level

  const handleMushroomItemClick = (title, imageUrl) => {
    console.log(title, imageUrl);
    router.push(`/mushroom?title=${encodeURIComponent(title)}`);
  };

  return (
    <div>
      <button onClick={() => handleMushroomItemClick('Death Cap', '/images/dc.png')}>
        Click Me
      </button>
    </div>
  );
};

export default MyComponent;