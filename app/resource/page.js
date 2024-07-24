"use client"


import { Content,Grid,Column } from "@carbon/react";
import cx from 'classnames';
import HomePage from "@/components/home/HomePage";
const StoryContent = ({
  useResponsiveOffset = true
}) => {
  const classNameFirstColumn = cx({
    'cds--col-lg-13': true,
    'cds--offset-lg-3': useResponsiveOffset
  });
  const content = <Grid>
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
 <div>

<HomePage/>
 </div>
      </Column>
      </Grid>;
  const style = {
    height: '100%'
  };
  if (useResponsiveOffset) {
    style.margin = '0';
    style.width = '100%';
  }
  return <div>
      {content}
   </div>
};

export default function RepoPage() {
  return(<div>
    <StoryContent/>
  </div>);
}
