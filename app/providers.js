'use client';

import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';
import { Content, Theme } from '@carbon/react';
// import './custom-theme.css';

export function Providers({ children }) {
  return (
    <div>
      <Theme >
        <TutorialHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
