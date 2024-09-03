import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems
} from '@carbon/react';
import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';
import { useEffect, useState } from 'react';
import Tree from '@/components/tree/Tree';
import { usePathname, useRouter } from 'next/navigation';

const TutorialHeader = () => {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);
  const [expandedNodes, setExpandedNodes] = useState({});
  const pathname = usePathname();
  const router = useRouter();

  const handleDataFromChild = () => {
    setIsSideNavExpanded(false);
  };

  const handleToggle = (label, isExpanded) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [label]: isExpanded,
    }));
  };

  const handleNavigation = (path) => {
    setIsSideNavExpanded(false); // Optionally close the SideNav on route change
    router.push(path);
  };



  return (
    <HeaderContainer
      render={() => (
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={() => setIsSideNavExpanded(!isSideNavExpanded)}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="/" prefix="IBM">
            SPT DEMO
          </HeaderName>

          <SideNav expanded={isSideNavExpanded}>
            <SideNavItems>
              <Tree expandedNodes={expandedNodes} onToggle={handleToggle} onHandleSidenav={handleDataFromChild} />
            </SideNavItems>
          </SideNav>

          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Notifications"
              tooltipAlignment="center"
              className="action-icons"
              onClick={() => handleNavigation('/case')}
            >
              <Notification size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="User Avatar"
              tooltipAlignment="center"
              className="action-icons"
              onClick={() => handleNavigation('/filterednote')}
            >
              <UserAvatar size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher"
              tooltipAlignment="end"
              onClick={() => handleNavigation('/note')}
            >
              <Switcher size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
};

export default TutorialHeader;
