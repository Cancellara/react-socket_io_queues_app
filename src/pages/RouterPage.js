import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';


import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;


export const RouterPage = () => {

    
    const [collapsed, setCollapsed] = useState(false);
    /*const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();*/

  return (
    <Layout>
      <Sider collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#00b96b',
            borderRadius: 1,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}
