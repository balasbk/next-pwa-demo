'use client'
import { Content,Grid,Column } from "@carbon/react";
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  console.log(t)
console.log( t('title') )
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
<h1> {t('title')}</h1>
  </Column>
  </Grid>

  );
}
