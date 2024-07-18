import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink
  
} from '@carbon/react';
import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';
import Link from 'next/link';
import Tree from '@/components/tree/Tree'
import { useEffect,useState } from 'react';
const TutorialHeader = () => {

  const [isSideNavExpanded,setisSideNavExpanded] = useState(true);
  const [expandedNodes, setExpandedNodes] = useState({});

  function handleDataFromChild() {
    setisSideNavExpanded(false);
  }

  const handleToggle = (label, isExpanded) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [label]: isExpanded,
    }));
  };

  return(
  <HeaderContainer
    render={() => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={()=>setisSideNavExpanded(!isSideNavExpanded)}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="/" prefix="IBM">
          SPT DEMO
        </HeaderName>
       
        <SideNav
         expanded={isSideNavExpanded} 
          
        >
 <SideNavItems>

          <Tree  expandedNodes={expandedNodes} onToggle={handleToggle} />
       
      </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Notifications"
            tooltipAlignment="center"
            className="action-icons"
          >
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="center"
            className="action-icons"
          >
            <UserAvatar size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />)
  };

export default TutorialHeader;
