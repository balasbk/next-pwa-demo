'use client'
import { Grid,Column } from "@carbon/react";
import Image from 'next/image'
import Pic1 from '../public/pic1.png'
import Pic2 from '../public/pic2.jpg'
export default function Home() {
  return (
    <Grid>
     <Column sm={{
    span: 4,
    offset: 0
  }} md={{
    span: 8,
    offset: 0
  }} lg={{
    span: 13,
    offset: 3
  }} >
<div>
<Image
      alt="Mountains"
      src={Pic2}
      placeholder="blur"
      quality={100}
      width={1000}
      sizes="100vw"
    
    />
    </div>
    <div>
      <p>test app testing</p>
    </div>
 
  </Column>
  </Grid>

  );
}
