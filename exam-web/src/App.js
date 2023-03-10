import React, { useState } from 'react';
import './App.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Tree } from 'antd';
import Certificate from './components/admin/certificate/Certificate';
import Examinations from './components/admin/examinations/Examinations';
import Quiz from './components/admin/quiz/Quiz';
import Result from './components/admin/result/Result';
import Link from 'antd/es/typography/Link';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [selectedKey, setSelectedKey] = useState('1');
  console.log(collapsed)
  function handleMenuClick(e) {
    setSelectedKey(e.key);
  }
  let component;
  switch (selectedKey) {
    case 'certificate':
      component = <Certificate />;
      break;
    case 'examinations':
      component = <Examinations />;
      break;
    case 'quiz':
      component = <Quiz />;
      break;
    case 'result':
      component = <Result />;
      break;
    default:
      component = null;
  }
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu mode="inline" onClick={handleMenuClick} >
          <SubMenu
            key="exam"
            title={
              <span>
                <span>Exam</span>
              </span>
            }
            collapsed={collapsed}
          >
            <Menu.Item key="certificate">
              <span>Certificate</span>
              <Link to ="/admin/certificate"/>
            </Menu.Item>
            <Menu.Item key="examinations">Examinations</Menu.Item>
            <Menu.Item key="quiz">Quiz</Menu.Item>
            <Menu.Item key="result">Result</Menu.Item>
          </SubMenu>
          <Menu.Item key="statistic">Statistic</Menu.Item>
          <Menu.Item key="customer">Customer</Menu.Item>
          <SubMenu
            key="user"
            title={
              <span>
                <span>User</span>
              </span>
            }
            collapsed={collapsed}
          >
            <Menu.Item key="role">Role</Menu.Item>
            <Menu.Item key="account">Account</Menu.Item>
          </SubMenu>
          <SubMenu
            key="setting"
            title={
              <span>
                <span>Setting</span>
              </span>
            }
            collapsed={collapsed}
          >
            <Menu.Item key="profile">Profile</Menu.Item>
            <Menu.Item key="advertisement">Advertisement</Menu.Item>
            <Menu.Item key="logout">Logout</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {component}
        </Content>
      </Layout>
    </Layout>
  );;
}

export default App;