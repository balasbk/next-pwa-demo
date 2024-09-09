"use client"

import Image from 'next/image';
import Pic1 from '../../public/pic1.png';
import Pic2 from '../../public/pic2.jpg';
import TimeToggle from '@/components/TimeToggle/TimeToggle';
import { Column, Content, Grid } from "@carbon/react";
import BackgroundWithText from '@/components/BackgroundWithText/BackgroundWithText';

const StoryContent = ({ useResponsiveOffset = true }) => {
  // Set the column span for full width on larger screens
  const lgSpan = 16;  // Full width for lg
  const lgOffset = 0; // No offset for full width

  const content = (
    // <Grid fullWidth> {/* Enable full width grid */}
    //   <Column 
    //     sm={{ span: 4, offset: 0 }}
    //     md={{ span: 8, offset: 0 }}
    //     lg={{ span: lgSpan, offset: lgOffset }}  // Full width for lg
    //   >
    //     <div>
    //       <BackgroundWithText
    //         backgroundImage="/pic2.jpg"  // Path to the background image
    //         title="Test App"
    //         text="This text appears in front of the image background."
    //         middleImage="/pic1.png"  // Middle image passed as prop
    //         timeToggleProps={{
    //           pageName: "repos page",
    //           keyName: "time2",
    //           validationName: "Validation message for time2 on repos",
    //           messageName: "Test message for time2"
    //         }}
    //       />
    //     </div>
    //         <br/>
    //     <div>
    //       <BackgroundWithText
    //         backgroundImage="/pic2.jpg"  // Path to the background image
    //         title="Test App"
    //         text="This text appears in front of the image background."
    //         middleImage="/pic1.png"  // Middle image passed as prop
    //         timeToggleProps={{
    //           pageName: "repos page",
    //           keyName: "time2",
    //           validationName: "Validation message for time2 on repos",
    //           messageName: "Test message for time2"
    //         }}
    //       />
    //     </div>
    //   </Column>
    // </Grid>

    <div>
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
            <br/>
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
    </div>
  );

  const style = {
    height: '100%',
    margin: useResponsiveOffset ? '0' : 'auto',
    width: '100%' // Make sure content takes full width
  };

  return (
    // <Content id="main-content" style={style}>
    //   {content}
    // </Content>
    <div>
      {content}
    </div>
  );
};

export default function RepoPage() {
  return (
    <div>
      <StoryContent />
    </div>
  );
}
