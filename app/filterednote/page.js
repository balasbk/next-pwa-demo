"use client"


import { Content,Grid,Column } from "@carbon/react";
import cx from 'classnames';
import { useState } from 'react';
import FilteredTable from "@/components/FilteredTable/FilteredTable";

const StoryContent = ({
  useResponsiveOffset = true
}) => {
  const classNameFirstColumn = cx({
    'cds--col-lg-13': true,
    'cds--offset-lg-3': useResponsiveOffset
  });
  const [message, setMessage] = useState('');
  const writeDate = async () => {
    const response = await fetch('/api/writeDate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  
    const data = await response.json();
    console.log(data)
    setMessage(data.data.date);
  };
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
 <FilteredTable/>
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
  return <Content id="main-content" style={style}>
      {content}
    </Content>;
};

export default function RepoPage() {
  
  return(<div>
    <StoryContent/>
  </div>);
}
