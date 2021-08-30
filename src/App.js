import loserland from './loserland.png';
import loserworld from './loserworld.jpg';
import { useTranslation, withTranslation } from "react-i18next";
import React from 'react'
import './App.css';
import './index.css';
import { Image, Button } from 'antd';
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
  const {t} = useTranslation();
  
  return (
    <div>
      <h1>{t('卢瑟大陆')}</h1>
      <Image
        width={400}
        src={loserland}
      />
      <p>{t('在很久很久之前')}</p>
      <p>{t('直到有一天')}</p>
      <h2>{t('Game Introduction')}</h2>
      <p>{t('在序章中我们将邀请')}</p>
      <p>{t('游戏后端将部署在OEC测试链')}</p>
      <h2>{t('Enrollment Entrance')}</h2>
      <p>{t('Coming Soon')}</p>
    </div>
  );
}

function LoserWorldIntroduction(props) {
  const {t} = useTranslation();
  
  return (
    <div>
      <h1>{t('Peachland Stone Gate')}</h1>
      <br></br>
      <Image
        width={800}
        src={loserworld}
      />
      <br></br><br></br>
      <p>{t('中古时期')}</p>
      <p>{t('他们沿着小路走进去')}</p>
      <p>{t('lowb们走近发现')}</p>
      <p>{t('投中过石门的lowb口袋里多了一枚发光的令牌')}</p>
      <p>{t('lowb们在原地懵逼了')}</p>
      <h2>{t('Game Introduction')}</h2>
      <p>{t('在序章中游戏玩家可以用lowb参与抽奖')}</p>
      <p>{t('游戏后端将部署在OEC测试链')}</p>
      <h2>{t('Enrollment Entrance')}</h2>
      <p>{t('Coming Soon')}</p>
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
  if (gameKey === "1") {
    return <LoserWorldIntroduction />;
  } else if (gameKey === "2") {
    return <LoserLandIntroduction />;
  }
  return <Game1Introduction />;
}

class App extends React.Component{
  state = {
    collapsed: false,
    key: "1",
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { t, i18n } = this.props;
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
    return (
      <Layout >
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Button ghost onClick={() => changeLanguage("zh")}>中文</Button>
          <Button ghost onClick={() => changeLanguage("en")}>English</Button>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={({key}) => this.setState({key: key})}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              {t('Peachland Stone Gate')}
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              {t('Loser Land')}
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

export default withTranslation()(App)