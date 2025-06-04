import { Menu } from 'antd';
import React from 'react';
import TopSection from './TopSection';
import BottomSection from './BottomSection';
import { useLocation } from 'react-router-dom';
import { getOpenKeys } from '../../utilities/helper';
import { navigationMenu, renderMenuItem } from '../../utilities/navigationMenu';

interface Props {
  collapsed: boolean;
}
const LayoutMenu: React.FC<Props> = ({ collapsed }) => {
  const location = useLocation();
  const defaultOpenKeys = getOpenKeys(navigationMenu, location.pathname);

  return (
    <section
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div
          style={{ borderBottom: '1px solid rgb(98 98 107)', marginTop: '5px' }}
        >
          <TopSection collapsed={collapsed} />
        </div>

        <Menu
          mode='inline'
          items={navigationMenu.map(renderMenuItem)}
          selectedKeys={[location.pathname]}
          defaultOpenKeys={defaultOpenKeys}
          style={{ paddingLeft: 5, paddingRight: 5 }}
        />
      </div>
      <BottomSection collapsed={collapsed} />
    </section>
  );
};

export default LayoutMenu;
