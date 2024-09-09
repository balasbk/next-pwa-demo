"use client"


import Image from 'next/image';
import Pic1 from '../../public/pic1.png';
import Pic2 from '../../public/pic2.jpg';
import TimeToggle from '@/components/TimeToggle/TimeToggle';

import BackgroundWithText from '@/components/BackgroundWithText/BackgroundWithText';

export default function RepoPage() {
  return (
    <div>
     <BackgroundWithText
      backgroundImage="/pic2.jpg"  // Path to the background image
      title="Test App"
      text="This text appears in front of the image background."
      middleImage="/pic1.png"  // Middle image passed as prop
      timeToggleProps={{
        pageName: "repos page",
        keyName: "time2",
        validationName: "Validation message for time2 on repos",
        messageName: "Test message for time2"
      }}
    />
    </div>
  );
}

