'use client';

import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';
import { Content, Theme } from '@carbon/react';
// import './custom-theme.css';
import styles from './globals.scss';

export function Providers({ children }) {
  return (
    <div>
      <Theme >
        <TutorialHeader />
      </Theme>
      <div style={{ marginTop: '50px' }}>{children}</div>
    </div>
  );
}
