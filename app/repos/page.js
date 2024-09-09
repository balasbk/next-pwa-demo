"use client"


import Image from 'next/image';
import Pic1 from '../../public/pic1.png';
import Pic2 from '../../public/pic2.jpg';
import TimeToggle from '@/components/TimeToggle/TimeToggle';



export default function RepoPage() {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          height: '400px',
          backgroundImage: `url('/pic2.jpg')`, // Set the background image here
          backgroundSize: 'cover', // Adjust the background size
          backgroundPosition: 'center', // Center the background image
          backgroundRepeat: 'no-repeat', // Prevent the image from repeating
        }}
      >
        <div className="text-overlay">

        <Image
      alt="Mountains"
      src={Pic1}
      placeholder="blur"
      quality={100}
      width={500}
      sizes="100vw"
    
    />
          <h1>Test App</h1>

          <TimeToggle 
            pageName="repos page" 
            keyName="time2" 
            validationName="Validation message for time2 on repos" 
            messageName="Test message for time2" 
          />
        </div>
      </div>
    </div>
  );
}

