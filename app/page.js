'use client'
import { Content,Grid,Column } from "@carbon/react";

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
    span: 12,
    offset: 4
  }} >
<p>welcome to test app</p>
  </Column>
  </Grid>

  );
}
