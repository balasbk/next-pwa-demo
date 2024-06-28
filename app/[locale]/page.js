'use client'
import { Grid,Column } from "@carbon/react";
import Image from 'next/image'
import Pic1 from '../public/pic1.png'
import Pic2 from '../public/pic2.jpg'
export default function Home() {
  return (
    <div className="container">
    <Image
      src={Pic2} // Replace with your image path
      alt="Background image"
      fill // Fill the entire container
      objectFit="cover" // Cover the container while maintaining aspect ratio
      priority // Prioritize loading this image
    />
    <div className="text-overlay">
      <h1>Test App</h1>
      <p>Some more text</p>
    </div>
  </div>

  );
}
