import loserland from './loserland.jpg';
import loserworld from './loserworld.jpg';
import loserpoker from './loserpoker.jpg';
import lowbcraft from './lowbcraft.jpg';
import { useTranslation, withTranslation } from "react-i18next";
import React from 'react'
import './App.css';
import './index.css';
import { Image, InputNumber, Button, Space, Table, Steps, message } from 'antd';
import { Layout, Menu, Input, Select, Tag } from 'antd';
import { Statistic, Card, Row, Col } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DownOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.min.css';
import { ethers } from 'ethers'
import LoserPunk from './contracts/MyCollectible.json'
import GameEnrollment from './contracts/GameEnrollment.json'
import RogueLand from './contracts/RogueLand.json'
import IPancakePair from './contracts/IPancakePair.json'
import IERC20 from './contracts/IERC20.json'
import BorrowLowb from './contracts/BorrowLowb.json'
const loserpunkAddress = "0xe0B78DC64d4385B208016050ECfEd986A5E0DE0E" //mainet
//const loserpunkAddress = "0xe031188b0895AFD3f3c32b2BF27FbD1Ab9E8c9eA"  //testnet
const enrollmentAddress = "0x35b75fFee8b8723eB2F4210a0d38824C83b4f634" //mainet
//const enrollmentAddress = "0x7933a35339AD9EBAAA9b176D53BA5994A347dcFa"  //testnet
const lpAddress = "0x3642b52519ba81fd8a204b306d2369a0cc1bc612" //mainet
//const lpAddress = "0x28118a66ae5f6b5dcc2afaa764689081f279ace0"  //testnet
const lowbAddress = "0x843d4a358471547f51534e3e51fae91cb4dc3f28" //mainet
//const lowbAddress = "0x5Aa1a18432Aa60Bad7f3057d71d3774F56CD34b8"  //testnet
const usdtAddress = "0x55d398326f99059ff775485246999027b3197955" //mainet
//const usdtAddress = "0x35d1afAd0f3562b5Ac747c672beC9eB429a2e0e0"  //testnet
const borrowAddress = "0xD9Ed7538aBDD218835A8Efc963e704048c831A06" //mainet
//const borrowAddress = "0x27848135E6fE2944E80aa357117f89748B2E58dA"  //testnet

//const gameAddress = "0x4fB911AD82321a3639626260156b0f0ea3bd0d02"  //testnet
const gameAddress = "0xCaFf20f886248F6d8c0D7dF08A8c3E67C3Cfd3C2"  //mainnet

const { Header, Sider, Content } = Layout;
const { Option } = Select;
const { Step } = Steps;


class LoserLandIntroduction extends React.Component {
  state = {
    totalPunks: -1,
    punks: [],
    inputAddress: '',
    account: '',
    chainId: -1,
    selectPunk: 0,
    nickName: '',
    committing: false,
    committed: false,
    oklink: false,
    goldInfo: [],
    totalGolds: 0,
    currentTime: 1
  };

  getGoldInfo = async () => {
    
    if (!this.state.oklink) {
      this.setState({oklink: true})
      const provider = new ethers.providers.JsonRpcProvider('https://exchainrpc.okex.org');
      const contract = new ethers.Contract(gameAddress, RogueLand.abi, provider)
      const currentTime = await contract.getCurrentTime()
      this.setState({currentTime: Number(currentTime)})
      const data = await contract.getGoldsofAllPunk()
      let golds = []
      let totalGolds = 0
      for (let i=0; i<667; i++) {
        if(data[i] > 0) {
          golds.push({key: i, gold: Number(data[i]/1e18)})
          totalGolds = totalGolds + Number(data[i]/1e18)
        }
      }
      this.setState({goldInfo: golds})
      this.setState({totalGolds: totalGolds})
      
    }
    
  }
  
  getPunkInfo = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    //const signer = provider.getSigner()
    const contract = new ethers.Contract(loserpunkAddress, LoserPunk.abi, provider)
    if (this.state.totalPunks < 0) {
      let punks = []
      const number = await contract.balanceOf(this.state.account)
      this.setState({totalPunks: number})
      for (let i=0; i<number; i++) {
        const id = await contract.tokenOfOwnerByIndex(this.state.account, i)
        punks.push(Number(id))
      }
      this.setState({punks: punks})
    }
  }

  requestAccount= async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const chainId = await window.ethereum.request({ method: 'eth_chainId' })
    this.setState({account: accounts[0], chainId: chainId})
    console.log(accounts[0], this.state.chainId)
  }

  enrollment = async () => {
    if (this.state.selectPunk === 0 || this.state.nickName === '' || this.state.inputAddress === '') {
      return;
    }
    this.setState({committing: true, committed: false})
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(enrollmentAddress, GameEnrollment.abi, signer)
    await contract.enrollmentGame(this.state.inputAddress, this.state.selectPunk, this.state.nickName)
    console.log(this.state.inputAddress, this.state.selectPunk, this.state.nickName)
    this.setState({committing: false, committed: true})
  }

  render() {
    const t = this.props.t
    // if (this.state.chainId === '0x42') {
    //   this.getPunkInfo()
    // }
    // else if (this.state.chainId === -1 && typeof window.ethereum !== 'undefined') {
    //   this.requestAccount()
    // }
    this.getGoldInfo()
    const columns = [
      {
        title: 'Punk Id',
        dataIndex: 'key',
        sorter: (a, b) => a.key - b.key,
        defaultSortOrder: 'ascend',
      },
      {
        title: 'Squid',
        dataIndex: 'gold',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.gold - b.gold,
      },
    ];

    return (
      <div>
      <h1>{t('卢瑟大陆')}</h1>
      <Image
        width={400}
        src={loserland}
      />
      <h3>{t('序章')}</h3>
      <p>{t('在很久很久之前')}</p>
      <p>{t('直到有一天')}</p>
      <h3>{t('第一章')}</h3>
      <p>{t('朋克元年六月')}</p>
      <p>{t('很快大家发现')}</p>
      <p>{t('是离开游戏')}</p>
      <h2>{t('Game Introduction')}</h2>
      <p><a href="http://losercointalk.org/thread?topicId=3401">http://losercointalk.org/thread?topicId=3401</a></p>
      <h2>{t('website')}</h2>
      <p><a href="https://www.losersquidgame.org">https://www.losersquidgame.org</a></p>

      {/* <h2>{t('Enrollment Entrance')}</h2>
      <p>{t('第一阶段')}</p>
      {
        this.state.chainId === '0x38' ? 
        <Input.Group compact>
        <Select defaultValue="No loserpunk" onChange={(key) => this.setState({selectPunk: this.state.punks[key]})}>
          {
            this.state.punks.map((item, index) => {
              return <Option key={index}>loserpunk #{item}</Option>
            })
          }
        </Select>
        <Input style={{ width: '50%' }} placeholder={this.state.account} onChange={({target}) => this.setState({inputAddress: target.value})}/>
        <Input style={{ width: '20%' }} placeholder={t('nickname')} onChange={({target}) => this.setState({nickName: target.value})}/>
        { this.state.committing ? 
            <Button loading >{t('submit')}</Button> : 
            <Button onClick={() => this.enrollment()}>{t('submit')}</Button>
        }
        { this.state.committed ? <Tag color="green">{t('submitted')}</Tag> : null }
        
      </Input.Group>
      : 
      <p>{t('switch')}</p>
      }

      <br />
      <p>{t('第二阶段')}</p>
      <p>{t('首次进入游戏后你将看到游戏账户')}<a href="https://www.reddit.com/r/Losercoin_Official/comments/pnw5w7/reply_with_your_game_account_to_enroll_loser_land/">Reddit</a>(或<a href="http://losercointalk.org/thread?topicId=1625">论坛</a>){t('回帖你的游戏账户可以进行报名')}</p>
      <p>{t('论坛报名玩家')}</p>
      <p>{t('第二阶段报名')}</p> */}
      <h2>{t('rank')}</h2>
      <p>{t('distributed')}{this.state.totalGolds} Squid -- {t('currentRound')} T{this.state.currentTime} -- {t('perRound')} {this.state.totalGolds/this.state.currentTime} Squid</p>
      <Table columns={columns} dataSource={this.state.goldInfo} />
    </div>
    );
  }
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

function LoserPokerIntroduction(props) {
  const {t} = useTranslation();
  
  return (
    <div>
      <h1>LoserPoker</h1>
      <br></br>
      <Image
        width={800}
        src={loserpoker}
      />
      <br></br><br></br>
      <h2>{t('Game Introduction')}</h2>
      <p>{t('LoserPoker是一个网页H5游戏')}</p>
      <p>{t('为了绝对的公平')}</p>
      <p>{t('金豆每日凌晨0点准时刷新')}</p>
      <p>{t('哦对了')}</p>
      <h2>{t('website')}</h2>
      <p><a href="http://lbgame-h5.loserpoker.net">http://lbgame-h5.loserpoker.net</a></p>
    </div>
  );
}

function LowbCraftIntroduction(props) {
  const {t} = useTranslation();
  
  return (
    <div>
      <h1>LowbCraft</h1>
      <br></br>
      <Image
        width={800}
        src={lowbcraft}
      />
      <br></br><br></br>
      <h2>{t('Game Introduction')}</h2>
      <p>{t('LowbCraft是一款类似经典游戏《我的世界》的区块链游戏')}</p>
      <p>{t('它的出现将会带给LoserCoin不一样的生态与活力')}</p>
      <h2>{t('website')}</h2>
      <p><a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/26273198471925277313353141987825348566112633703028005703181410322685758537729">Game Demo</a></p>
    </div>
  );
}


class LoserVault extends React.Component {
  state = {
    current: 0,
    status: 'process',
    infoGet: false,
    price: 0,
    chainId: -1,
    account: '',
    feePerBlock: 0,
    lowbInPool: 0,
    usdtToBuyBack: 0,
    usdtInPool: 0,
    lowbBalance: 0,
    usdtBalance: 0,
    usdtAllowance: 0,
    toStake: 50,
    toBorrow: 0,
    maxToBorrow: 0,
    approveLoading: false,
    approveDisable: false,
    borrowLoading: false,
    borrowDisable: true,
    debt: {},
    riskDebts: []
  };

  getPoolInfo = async () => {
    const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed1.binance.org');
    const contract = new ethers.Contract(lpAddress, IPancakePair.abi, provider)
    const reserves = await contract.getReserves()
    this.setState({price: reserves[0]/reserves[1]})
    const lowbContract = new ethers.Contract(lowbAddress, IERC20.abi, provider)
    const lowbBalance = await lowbContract.balanceOf(borrowAddress)
    const usdtContract = new ethers.Contract(usdtAddress, IERC20.abi, provider)
    const usdtBalance = await usdtContract.balanceOf(borrowAddress)
    this.setState({usdtInPool: ethers.utils.formatEther(usdtBalance), lowbInPool: ethers.utils.formatEther(lowbBalance)})
    const borrowContract = new ethers.Contract(borrowAddress, BorrowLowb.abi, provider)
    const feePerBlock = await borrowContract.feePerBlock()
    this.setState({feePerBlock: feePerBlock})
    const records = await borrowContract.getRecords('0x0000000000000000000000000000000000000000', 5)
    this.setState({usdtToBuyBack: ethers.utils.formatEther(records[0].usdtAmount)})
    const blockNumber = await provider.getBlockNumber()
    const riskDebts = []
    for (let i=1; i<5; i++) {
      if (records[i].lowbAmount > 0) {
        let user = records[i-1].nextUser
        let usdt = ethers.utils.formatEther(records[i].usdtAmount)
        let lowb = ethers.utils.formatEther(records[i].lowbAmount)
        let interest = lowb * (blockNumber - records[i].startBlock) * records[i].feePerBlock / 100000000000
        let risk = (Number(lowb) + interest) * this.state.price / Number(usdt)
        riskDebts.push({id: i-1, address: user, stake: usdt, risk: risk, loading: false})
      }
    }
    this.setState({riskDebts: riskDebts})
  }

  getDebt = async () => {
    const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed1.binance.org');
    const contract = new ethers.Contract(borrowAddress, BorrowLowb.abi, provider)
    const debt = await contract.recordOf(this.state.account)
    if (debt.lowbAmount <= 0) {
      this.getBalance()
      this.setState({debt: {lowb: 0, usdt: 0, interest: 0, risk: 0}})
    }
    else {
      const blockNumber = await provider.getBlockNumber()
      const lowb = ethers.utils.formatEther(debt.lowbAmount)
      const usdt = ethers.utils.formatEther(debt.usdtAmount)
      const interest = lowb * (blockNumber - debt.startBlock + 100) * debt.feePerBlock / 100000000000
      const totalLowb = Number(lowb) + Number(interest);
      //const risk = (Number(lowb) + interest) * this.state.price / Number(usdt)
      this.setState({debt: {lowb: lowb, usdt: usdt, interest: interest, fee: debt.feePerBlock/100, totalLowb: totalLowb}})
      const lowbContract = new ethers.Contract(lowbAddress, IERC20.abi, provider)
      const lowbBalance = await lowbContract.balanceOf(this.state.account)
      this.setState({lowbBalance: ethers.utils.formatEther(lowbBalance)})
    }
    
  }

  getBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const usdtContract = new ethers.Contract(usdtAddress, IERC20.abi, provider)
    const usdtBalance = await usdtContract.balanceOf(this.state.account)
    const usdtAllowance = await usdtContract.allowance(this.state.account, borrowAddress)
    console.log(usdtBalance, usdtAllowance)
    this.setState({usdtBalance: ethers.utils.formatEther(usdtBalance), usdtAllowance: ethers.utils.formatEther(usdtAllowance)})
  }

  requestAccount= async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const chainId = await window.ethereum.request({ method: 'eth_chainId' })
    this.setState({account: accounts[0], chainId: chainId})
    console.log(accounts[0], this.state.chainId)
    if (chainId === '0x38') {
      this.getDebt()
    }
  }

  approveUsdt = async () => {
    console.log(this.state.toStake, this.state.usdtAllowance)
    if (this.state.usdtAllowance >= this.state.toStake) {
      this.setState({current: this.state.current+1, maxToBorrow: Math.min(this.state.lowbInPool, this.state.toStake/this.state.price*0.85)})
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const usdtContract = new ethers.Contract(usdtAddress, IERC20.abi, signer)
    await usdtContract.approve(borrowAddress, ethers.utils.parseEther(this.state.toStake.toString()))
    this.setState({approveLoading: true})
    const filter = usdtContract.filters.Approval(this.state.account)
    usdtContract.on(filter, async (owner, spender, value, event) => {
      this.setState({current: this.state.current+1, maxToBorrow: Math.min(this.state.lowbInPool, this.state.toStake/this.state.price*0.85)})
    })
  }

  approveLowb = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const lowbContract = new ethers.Contract(lowbAddress, IERC20.abi, signer)
    await lowbContract.approve(borrowAddress, ethers.utils.parseEther(this.state.lowbBalance))
    this.setState({approveLoading: true})
    const filter = lowbContract.filters.Approval(this.state.account)
    lowbContract.on(filter, async (owner, spender, value, event) => {
      this.setState({approveLoading: false, approveDisable: true, borrowDisable: false})
    })
  }

  borrow = async () => {
    //this.setState({status: 'finish'})
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(borrowAddress, BorrowLowb.abi, signer)
    await contract.borrowLowb(ethers.utils.parseEther(this.state.toBorrow.toString()), ethers.utils.parseEther(this.state.toStake.toString()))
    this.setState({borrowLoading: true})
    const filter = contract.filters.LowbBorrowed(this.state.account)
    contract.on(filter, async (user, lowbAmount, usdtAmount, event) => {
      this.setState({status: 'finish'})
      await this.getDebt()
      this.setState({approveLoading: false, borrowLoading: false})
      message.success('Success!')
      this.getPoolInfo()
    })
  }

  returnLowb = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(borrowAddress, BorrowLowb.abi, signer)
    await contract.returnAllLowb()
    this.setState({borrowLoading: true})
    const filter = contract.filters.ReturnAllLowb(this.state.account)
    contract.on(filter, async (user, lowbAmount, usdtAmount, interest, event) => {
      await this.getDebt()
      this.setState({approveDisable: false, borrowDisable: true, borrowLoading: false})
      message.success('Success!')
      this.getPoolInfo()
    })
  }

  lockUsdt = async (id, userAddress) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(borrowAddress, BorrowLowb.abi, signer)
    await contract.lockUsdt(userAddress)
    this.state.riskDebts[id].loading = true;
    const filter = contract.filters.UsdtLocked(this.state.account)
    contract.on(filter, async (user, borrower, usdtAmount, risk, event) => {
      this.getPoolInfo()
    })
  }

  render() {
    const t = this.props.t
    const steps = [
      {
        title: t('批准质押额度'),
        content: 'First-content',
      },
      {
        title: t('确认借币数量'),
        content: 'Second-content',
      }
    ];

    if (!this.state.infoGet) {
      if (this.state.chainId === -1 && typeof window.ethereum !== 'undefined') {
        this.requestAccount()
      }
      this.setState({infoGet: true})
      this.getPoolInfo();
    }
    

    return (
      <div>
      <h1>{t('lowb借币做空')}</h1>
      <br></br>
      <h2>{t('借币池状态')}</h2>
      <Row gutter={[16, 16]}>
        <Col>
          <Card>
            <Statistic
              title={t("usdt质押数量")}
              value={this.state.usdtInPool-this.state.usdtToBuyBack}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Statistic
              title={t("usdt清算数量")}
              value={this.state.usdtToBuyBack}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Statistic
              title={t("lowb价格")}
              value={this.state.price}
              precision={8}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Statistic
              title={t("APR")}
              value={this.state.feePerBlock/100*1.0886}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <br></br>
      <h2>{t("loanList")}</h2>
      <Row gutter={[16, 16]}>
        {this.state.riskDebts.map(item => (
        <Col key={item.id}>
          <Card title={item.address.slice(0, 6)+'...'+item.address.slice(-4)}>
            <Statistic
              title={t("风险度")}
              value={item.risk*100}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              suffix="%"
            />
            <Statistic
              title={t("质押USDT数量")}
              value={item.stake}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
            />
            <br></br>
            <Button block disabled={item.risk<=0.95 || this.state.chainId !== '0x38'} loading={item.loading} onClick={() => this.lockUsdt(item.id, item.address)}>清算</Button>
          </Card>
        </Col>
        ))}
      </Row>
      <br></br>
      {this.state.chainId === '0x38' && this.state.debt && this.state.debt.lowb > 0 && (
        <div>
      <h2>{t("loanInfo")}</h2>
      <Row gutter={[16, 16]}>
        <Col>
          <Statistic title={t("风险度")} value={this.state.debt.totalLowb*this.state.price/this.state.debt.usdt*100} precision={2} suffix="%"/>
        </Col>
        <Col>
          <Statistic title={t("质押USDT数量")} value={this.state.debt.usdt} precision={2} />
        </Col>
        <Col>
          <Statistic title={t("借出lowb数量")} value={this.state.debt.lowb} precision={1}/>
        </Col>
        <Col>
          <Statistic title={t("借币费用")} value={this.state.debt.interest} precision={2} />
        </Col>
        <Col>
          <Statistic title={t("APR")} value={this.state.debt.fee*1.0886} precision={2} suffix="%"/>
        </Col>
        <Col>
          <Statistic title={t("总计待还款")} value={this.state.debt.totalLowb} precision={1}/>
        </Col>
      </Row>
      <br></br>
      
      
      {this.state.lowbBalance <= this.state.debt.totalLowb && (
        <p>{t("当前余额不足")}</p>
      )}
      {this.state.lowbBalance > this.state.debt.totalLowb && (
        <Space>
          <Button type="primary" loading={this.state.approveLoading} disabled={this.state.approveDisable} onClick={() => this.approveLowb()}>
          {t("approve")}
          </Button>
          <Button type="primary" loading={this.state.borrowLoading} disabled={this.state.borrowDisable} onClick={() => this.returnLowb()}>
          {t("立即还款")}
          </Button>
        </Space>
      )}
      
      <span> {t("钱包余额")}: {Math.floor(this.state.lowbBalance)} lowb</span>
      
      <br></br><br></br>
        </div>
      )}
      
      {this.state.chainId === '0x38' && this.state.debt && this.state.debt.lowb <= 0 && (
        <div>
      <h2>{t("质押借币")}</h2>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Statistic title={t("USDT可用数量")} value={this.state.usdtBalance} precision={2} />
        </Col>
        <Col span={12}>
          <Statistic title={t("lowb可用数量")} value={Math.floor(this.state.lowbInPool)} />
        </Col>
      </Row>
      <br></br>
      <Steps current={this.state.current} status={this.state.status}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <br></br>
      <div className="steps-action">
        {this.state.current === 0 && (
          <Space>
            <InputNumber style={{width: 250,}} addonAfter="USDT" min={50} max={this.state.usdtBalance} defaultValue={50} onChange={(value) => this.setState({toStake: value})}/>
            <Button type="primary" onClick={() => this.approveUsdt()} loading={this.state.approveLoading}>
            {t("approve")}
            </Button>
          </Space>
        )}
        {this.state.current === 1 && (
          <Space>
            <InputNumber style={{width: 250,}} addonAfter="lowb" min={1} max={this.state.lowbInPool} defaultValue={1} onChange={(value) => this.setState({toBorrow: value})}/>
            <Button type="primary" onClick={() => this.borrow()} loading={this.state.borrowLoading}>
              {t("质押借币")}
            </Button>
            {t("质押数量")}: {this.state.toStake}USDT; {t("最大可借")}: {Math.floor(this.state.maxToBorrow)}lowb
          </Space>
        )}
      </div>
      <br></br>
        </div>
      )}
      
      
      <h2>{t('lowb借币机制介绍')}</h2>
      <p>{t('用户可以抵押')}</p>
      <p>{t('借币费的计算公式')}</p>
      <p>{t('风险度的计算公式')}</p>
      <p>{t('用户归还全部的')}</p>
      <p>{t('但是当风险度超过95%时')}</p>
      <p>{t('被强制清算后')}</p>
      <h2>{t('如何借币做空')}</h2>
      <p>{t('假设lowb的价格为1美元')}</p>
      <p>{t('第二天')}</p>
      <p>{t('另一种可能是第二天')}</p>
      </div>
    );
  }
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


class GameIntroduction extends React.Component {
 
  render() {
    console.log(this.props)
    if (this.props.gameKey === "2") {
      return <LoserWorldIntroduction />;
    } else if (this.props.gameKey === "1") {
      return <LoserLandIntroduction t={this.props.t} />;
    } else if (this.props.gameKey === "0") {
      return <LoserPokerIntroduction t={this.props.t} />;
    } else if (this.props.gameKey === "3") {
      return <LowbCraftIntroduction t={this.props.t} />;
    } else if (this.props.gameKey === "4") {
      return <LoserVault t={this.props.t} />;
    }
    return <Game1Introduction />;
  }
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
            
            {/* <Menu.Item key="1" icon={<DownOutlined />}>
              LoserPoker
            </Menu.Item> */}
            <Menu.Item key="1" icon={<VideoCameraOutlined />}>
              {t('Loser Land')}
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              {t('Peachland Stone Gate')}
            </Menu.Item>
            <Menu.Item key="3" icon={<DownOutlined />}>
              LowbCraft
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              {t('LoserVault')}
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
              minWidth: 500,
            }}
          >
            <GameIntroduction gameKey={this.state.key} t={t} />

          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withTranslation()(App)