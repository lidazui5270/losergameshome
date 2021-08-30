import loserland from './loserland.png';
import React from 'react'
import './App.css';
import './index.css';
import { Image } from 'antd';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';


import 'antd/dist/antd.min.css';

const { Header, Sider, Content } = Layout;

function LoserLandIntroduction(props) {
  return (
    <div>
      <h1>卢瑟大陆 （序章：朋克纪元）</h1>
      <Image
        width={400}
        src={loserland}
      />
      <p>在很久很久之前，卢瑟大陆上生活着一群失败朋克。他们最大的爱好是白嫖，白嫖以及白嫖。每天的生活就是到处捡地上的lowb。</p>
      <p>直到有一天，地上出现了一颗樱桃。一只小朋克忍不住好奇，偷食了禁果，随后，一切都变了……</p>
      <h2>游戏说明</h2>
      <p>在序章中我们将邀请loser punk和部分game的持有者参与游戏测试，参与测试的玩家每天可瓜分约50万lowb的奖励，奖励将在序章结束后发放。</p>
      <p>游戏后端将部署在OEC测试链，测试内容主要包括发现并解决游戏漏洞，改进游戏交互体验等。</p>
      <h2>报名入口</h2>
      <p>即将开放</p>
    </div>
  );
}

function Game1Introduction(props) {
  return (
    <div>
      <h1>Game1</h1>
      <p>时间：不明，应该在很早、很早以前。</p>
      <p>地点：神州浩土。</p>
      <p>天地不仁，以万物为刍狗！</p>
    </div>
  );
}

function GameIntroduction(props) {
  const gameKey = props.gameKey;
  if (gameKey === "2") {
    return <LoserLandIntroduction />;
  }
  return <Game1Introduction />;
}

export default class App extends React.Component {
  state = {
    collapsed: false,
    key: 1,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout >
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={({key}) => this.setState({key: key})}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              桃源石门
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              loser rogue
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              loser chess
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <GameIntroduction gameKey={this.state.key} />
            
          </Content>
        </Layout>
      </Layout>
    );
  }
}

