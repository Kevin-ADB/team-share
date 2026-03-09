import React from 'react';
import Presentation, { ISlide } from '../../common/presentation';
import '../../styles/fpv.css';
import { BASE_URL } from './common';
import ControllerSvg from './svg-controller';
import DroneSvg from './svg-drone';
import PropellerGroupSvg from './svg-propeller-group';

const FPV: React.FC = () => {
  const slides: ISlide[] = [
    {
      id: 'slide-1',
      title: '警察来电',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>关于选题</h1>
          </div>
          <div className="phone-call-screen">
            <div className="phone-frame">
              <div className="phone-status">
                <span className="signal">📶</span>
                <span className="battery">🔋</span>
              </div>
              <div className="call-info">
                <div className="caller-avatar">👮‍♂️</div>
                <div className="caller-name">警察</div>
                <div className="call-status">来电中...</div>
              </div>
              <div className="call-actions">
                <div className="decline-btn">📞</div>
                <div className="accept-btn">📞</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'slide-2',
      title: 'FPV Drone',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>FPV Drone</h1>
          </div>
          <div className="fpv-intro">
            <div className="fpv-definition">
              <div className="definition-item">
                <h3>FPV</h3>
                <p>First Person View</p>
              </div>
              <div className="definition-item">
                <h3>FPV Drone</h3>
                <p>
                  现在一般特指
                  <strong>穿越机</strong>
                  ，即多旋翼无人机的一种，强调飞行的操控感和第一视角的体验
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'slide-3.1',
      title: 'FPV Drone 与其它多旋翼无人机的区别',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>FPV Drone 与其它多旋翼无人机的区别（操控篇）</h1>
          </div>
          <div className="comparison-table-container">
            <div className="table comparison-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>其它多旋翼无人机</th>
                    <th>FPV Drone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>操控方式</strong></td>
                    <td>
                      <div className="scenario-list">
                        <p>
                          <strong>自动稳定飞行</strong>：大多数供自动稳定功能，飞手只需控制方向和速度，飞行器会自动保持水平和一定的高度。
                        </p>
                        <p>
                          <strong>全自动飞行模式</strong>：有些提供预设的飞行模式，如环绕、跟随、定点等，只需设置好参数，飞行器会自动执行相应的飞行任务。
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="scenario-list">
                        <p className="primary-mode">
                          <strong>Acro 模式（手动模式）</strong>: 飞行器不主动提供任何姿态稳定，飞手需要完全控制飞行器的姿态和速度。这种模式适合专业飞手和竞速飞行，提供最大的操控自由度和飞行性能，但需要较高的飞行技能。
                        </p>
                        <p className="secondary-mode">
                          <strong>Angle 模式（自稳模式）</strong>: 飞行器提供基本的姿态稳定，飞手只需控制方向和速度，飞行器会自动保持水平和一定的高度。这种模式适合初学者，降低了操作难度。
                        </p>
                        <p className="secondary-mode">
                          <strong>Horizon 模式（半自稳模式）</strong>: 结合了 Acro 和 Angle 模式的特点，飞行器在小幅度操作时提供姿态稳定，在大幅度操作时允许翻滚等特技动作。这种模式适合有一定飞行经验的飞手，既能享受操控感又不失安全性。
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>操控特点</strong></td>
                    <td>
                      <div className="scenario-list">
                        <p><strong>依赖自动化系统</strong>：大多数民用无人机依赖自动化系统进行飞行，飞手只需设置参数即可完成任务。</p>
                        <p><strong>追求稳定性和安全性</strong>：民用无人机强调飞行的稳定性和安全性，适合拍摄、测绘等任务。</p>
                      </div>
                    </td>
                    <td>
                      <div className="scenario-list">
                        <p><strong>高度依赖飞手技能</strong>：FPV Drone 最常用的操作模式是 Acro 模式，几乎不提供姿态稳定，飞手需要具备比较熟练的飞行技能才能安全操控。</p>
                        <p><strong>追求操控感</strong>：FPV Drone 强调飞行的操控感，飞手可以通过不同的操控模式体验不同的飞行乐趣。</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'slide-3.2',
      title: 'FPV Drone 与其它多旋翼无人机的区别（性质篇）',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>FPV Drone 与其它多旋翼无人机的区别（性质篇）</h1>
          </div>
          <div className="comparison-table-container">
            <div className="table comparison-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>其它多旋翼无人机</th>
                    <th>FPV Drone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>续航时间</strong></td>
                    <td>
                      <strong>较长</strong>：消费级约30分钟以上；工业级或军用级可达数小时至数十小时。
                    </td>
                    <td>
                      <strong>较短</strong>：激烈飞行下通常为 <strong>5到30分钟</strong>。
                    </td>
                  </tr>
                  <tr>
                    <td><strong>成本</strong></td>
                    <td>
                      <strong>高单价、低损耗率</strong>：高端机或军用机价格昂贵，通常设计上更注重耐用性和可靠性，损耗率较低。
                    </td>
                    <td>
                      <strong>低成本、高损耗率</strong>：单机成本可低至数百元，设计上可承受高损耗。
                    </td>
                  </tr>
                  <tr>
                    <td><strong>核心定位</strong></td>
                    <td>
                      <strong>多功能工具</strong>：强调稳定性、自动化和任务执行能力，满足各种应用需求。
                    </td>
                    <td>
                      <strong>沉浸式飞行工具</strong>：追求操控感、灵活性和第一视角的刺激。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'slide-3.3',
      title: 'FPV Drone 与其它多旋翼无人机的区别（用途篇）',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>FPV Drone 与其它多旋翼无人机的区别（用途篇）</h1>
          </div>
          <div className="comparison-table-container">
            <div className="table comparison-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>其它多旋翼无人机</th>
                    <th>FPV Drone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>民用</strong></td>
                    <td>
                      <div className="scenario-list">
                        <p><strong>1. 影视航拍</strong>：平稳拍摄风光、城市全景。</p>
                        <p><strong>2. 测绘建模</strong>：按规划航线自动飞行，采集测绘数据。</p>
                        <p><strong>3. 电力巡检</strong>：自动环绕电线塔进行拍照检查。</p>
                        <p><strong>4. 物流配送</strong>：点对点自动运输货物。</p>
                        <p><strong>5. 农业植保</strong>：自动完成农田的喷洒与监测。</p>
                      </div>
                    </td>
                    <td>
                      <div className="scenario-list">
                        <p><strong>1. 竞速比赛</strong>：在复杂赛道中竞速穿越。</p>
                        <p><strong>2. 特技拍摄</strong>：拍摄穿越窗户、树林等极具动感的镜头。</p>
                        <p><strong>3. 自由穿越飞行</strong>：以第一视角探索复杂地形。</p>
                        <p><strong>4. 沉浸式体验</strong>：纯粹享受飞行操控乐趣。</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>军用</strong></td>
                    <td>
                      <div className="scenario-list">
                        <p><strong>1. 战略/战役级侦察监视</strong>：长航时、大范围战场监控。</p>
                        <p><strong>2. 通信中继与后勤运输等</strong>：保障通讯、运输紧急物资。</p>
                      </div>
                    </td>
                    <td>
                      <div className="scenario-list">
                        <p><strong>1. 战术级突袭与侦察</strong>：快速穿越复杂环境，进行侦察或<strong>自杀式攻击</strong>。</p>
                        <p><strong>2. 反装甲/反器材</strong>：挂载小型弹头，打击坦克、火炮等目标。</p>
                        <p><strong>3. 炮兵校射与电子战</strong>：提供实时目标修正或进行近距离干扰。</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'slide-4.1',
      title: '入坑指"难" -- 人财两空',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>入坑指"难" -- 人财两空</h1>
          </div>
          <div className="comparison-table-container">
            <div className="process-steps">
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>没朋友</h3>
                  <p>超小众，技术宅居多</p>
                </div>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>没钱</h3>
                  <p>炸机、飞丢、新设备</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'slide-4.2',
      title: '入坑指"难" -- 猫一天狗一天',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>入坑指"难" -- 猫一天狗一天</h1>
          </div>
          <div className="comparison-table-container">
            <div className="table comparison-table">
              <table>
                  <thead>
                    <tr>
                      <th>政策维度</th>
                      <th>核心内容与要求</th>
                      <th>关键日期/状态</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>1. 法律依据与处罚</strong></td>
                      <td>
                        <strong>新修订《治安管理处罚法》</strong> 首次明确将无人机"黑飞"列为妨害公共安全行为，可处以罚款、没收设备或拘留。
                      </td>
                      <td>已于 <strong>2026年1月1日</strong> 施行。</td>
                    </tr>
                    <tr>
                      <td><strong>2. 实名登记规定</strong></td>
                      <td>
                        所有人必须通过 <strong>"民用无人驾驶航空器综合管理平台"（UOM）</strong> 完成实名登记。未登记飞行最高可罚款2万元。
                      </td>
                      <td>持续有效，飞行前必须完成。</td>
                    </tr>
                    <tr>
                      <td><strong>3. 空域分类管理</strong></td>
                      <td>
                        <div className="airspace-info">
                          <p><strong>管制空域</strong>（如机场周边、120米以上空域）飞行<strong>必须提前申请批准</strong>。</p>
                          <p><strong>适飞空域</strong>（轻型无人机真高120米以下）飞行，无需申请。</p>
                        </div>
                      </td>
                      <td>持续有效，飞行前必须查询确认。</td>
                    </tr>
                    <tr>
                      <td><strong>4. 强制性技术新规（即将实施）</strong></td>
                      <td>
                        <strong>《运行识别规范》</strong> 要求无人机飞行时<strong>主动实时报送身份、位置等信息</strong>。不具备此功能的无人机原则上将不能飞行。
                      </td>
                      <td><strong>2026年5月1日</strong> 起正式实施。</td>
                    </tr>
                    <tr>
                      <td><strong>5. 其他国家标准</strong></td>
                      <td>
                        <div className="standards-info">
                          <p><strong>《实名登记及激活要求》</strong>：细化登记管理。</p>
                          <p><strong>《唯一产品识别码》</strong>：要求无人机"一机一码"。</p>
                        </div>
                      </td>
                      <td>分别于 <strong>2026年5月1日</strong> 和 <strong>2027年1月1日</strong> 实施。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      ),
    },
    {
      id: 'slide-4.3',
      title: '入坑指"难" -- 合法飞行',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>入坑指"难" -- 合法飞行</h1>
          </div>
          <div className="comparison-table-container">
            <div className="info-container">
              <div className="info-card">
                <div className="info-header">
                  <h3>🏠 室内</h3>
                </div>
                <div className="info-content">
                  <div className="info-list">
                    <div className="info-item">
                      <div className="info-icon">🏠</div>
                      <div className="info-text">
                        <strong>不受管制</strong>：室内随便飞
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-card">
                <div className="info-header">
                  <h3>🟦 适飞空域（<a href="https://uom.caac.gov.cn" target="_blank" rel="noopener noreferrer">UOM 平台</a>查询蓝色适飞空域）</h3>
                </div>
                <div className="info-content">
                  <div className="info-list">
                    <div className="info-item">
                      <div className="info-icon">✅</div>
                      <div className="info-text">
                        <strong>120米以下飞行</strong>：微型（&lt;250g）、轻型（250g-4kg）无人机<strong>无需报备</strong>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="info-icon">📋</div>
                      <div className="info-text">
                        <strong>小型无人机（4kg-150kg）</strong>：需要事先<strong>考证</strong>，但同样<strong>无需报备</strong>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="info-icon">🗂️</div>
                      <div className="info-text">
                        <strong>其它情况</strong>：均需提前<strong>申请报备</strong>（审批通过难度众说纷纭，我还没试过）
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'slide-4.4',
      title: '入坑指"难" -- 入坑拢共分三步',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>入坑指"难" -- 入坑拢共分三步</h1>
          </div>
          <div className="comparison-table-container">
            <div className="process-steps">
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>如入</h3>
                  <div className="step-description">
                    <p>买个手柄用模拟器练习</p>
                    <a href="https://www.bilibili.com/video/BV1ZPTTzEER7" target="_blank" rel="noopener noreferrer">新人入门必练模拟器</a>
                  </div>
                </div>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>算入</h3>
                  <p>买个眼镜，耐摔的无人机起飞</p>
                </div>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>入</h3>
                  <p>DIY、花飞、竞速、裸眼，等等</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'slide-5',
      title: '固定翼飞机的飞行原理',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>固定翼飞机的飞行原理</h1>
          </div>
          <img 
            src={`${BASE_URL}images/fpv-001.jpg`} 
            alt="固定翼飞机飞行原理示意图"
            className="principle-image"
          />
        </div>
      ),
    },
    {
      id: 'slide-6',
      title: '遥控器以及操作映射',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>遥控器以及操作映射</h1>
          </div>
          <div className="step-card">
            <div className="step-content">
              <h3>（遥控器展示环节）</h3>
            </div>
          </div>
          <div className="comparison-table-container">
            <div className="table compact-table">
              <table>
                <thead>
                  <tr>
                    <th>姿态控制</th>
                    <th>操控项</th>
                    <th>美国手（Mode 2）</th>
                    <th>日本手（Mode 1）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>横滚（Roll）</strong></td>
                    <td><strong>副翼（Aileron，A）</strong></td>
                    <td><ControllerSvg width={160} height={80} rightStickHighlights={{ left: 'negative', right: 'positive' }} /></td>
                    <td className="obscured-column"><ControllerSvg width={160} height={80} leftStickHighlights={{ left: 'negative', right: 'positive' }} /></td>
                  </tr>
                  <tr>
                    <td><strong>俯仰（Pitch）</strong></td>
                    <td><strong>升降舵（Elevator，E）</strong></td>
                    <td><ControllerSvg width={160} height={80} rightStickHighlights={{ up: 'positive', down: 'negative' }} /></td>
                    <td className="obscured-column"><ControllerSvg width={160} height={80} leftStickHighlights={{ up: 'positive', down: 'negative' }} /></td>
                  </tr>
                  <tr className="throttle-row">
                    <td><strong>油门（Throttle）</strong></td>
                    <td><strong>油门（Throttle，T）</strong></td>
                    <td><ControllerSvg width={160} height={80} leftStickHighlights={{ up: 'positive', down: 'negative' }} /></td>
                    <td className="obscured-column"><ControllerSvg width={160} height={80} rightStickHighlights={{ up: 'positive', down: 'negative' }} /></td>
                  </tr>
                  <tr>
                    <td><strong>偏航（Yaw）</strong></td>
                    <td><strong>方向舵（Rudder，R）</strong></td>
                    <td><ControllerSvg width={160} height={80} leftStickHighlights={{ left: 'negative', right: 'positive' }} /></td>
                    <td className="obscured-column"><ControllerSvg width={160} height={80} rightStickHighlights={{ left: 'negative', right: 'positive' }} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'slide-7',
      title: 'FPV Drone 的硬件构成',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>FPV Drone 的硬件构成</h1>
          </div>
          <div className="comparison-table-container">
            <div className="two-column-layout">
              <div>
                <div className="component-list">
                  <div>• 机架</div>
                  <div>• 摄像头 + 图传、天线</div>
                  <div>• 飞行控制器 + 接收机</div>
                  <div>• 桨叶 + 电机、电子调速器</div>
                  <div>• 电池</div>
                  <div style={{ fontSize: '0.9em', marginTop: '10px', borderLeft: 'none', paddingLeft: '0' }}>
                    （<strong>飞行控制器</strong>自带<strong>陀螺仪</strong>和<strong>加速度计</strong>，有时甚至自带<strong>电子调速器</strong>。）
                  </div>
                </div>
              </div>
              <img
                src={`${BASE_URL}images/fpv-002.jpg`}
                alt="FPV Drone 构成示意图"
                className="principle-image-compact"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'slide-8',
      title: 'FPV Drone 的飞行原理',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>FPV Drone 的飞行原理</h1>
          </div>
          <div className="comparison-table-container">
            <div className="drone-diagram-container">
              <DroneSvg />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'slide-9',
      title: 'FPV Drone 的操控及原理',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>FPV Drone 的操控及原理</h1>
          </div>
          <div className="comparison-table-container">
            <div className="table compact-table">
              <table>
                <thead>
                  <tr>
                    <th>姿态控制</th>
                    <th>操控项（名称）</th>
                    <th>控制器（美国手）</th>
                    <th>桨叶组合</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>横滚（Roll）</strong></td>
                    <td><strong>副翼（Aileron，A）</strong></td>
                    <td><ControllerSvg width={160} height={80} rightStickHighlights={{ left: 'negative', right: 'positive' }} /></td>
                    <td><PropellerGroupSvg positives={{ frontLeft: true, backLeft: true }} /></td>
                  </tr>
                  <tr>
                    <td><strong>俯仰（Pitch）</strong></td>
                    <td><strong>升降舵（Elevator，E）</strong></td>
                    <td><ControllerSvg width={160} height={80} rightStickHighlights={{ up: 'positive', down: 'negative' }} /></td>
                    <td><PropellerGroupSvg positives={{ backLeft: true, backRight: true }} /></td>
                  </tr>
                  <tr className="throttle-row">
                    <td><strong>油门（Throttle）</strong></td>
                    <td><strong>油门（Throttle，T）</strong></td>
                    <td><ControllerSvg width={160} height={80} leftStickHighlights={{ up: 'positive', down: 'negative' }} /></td>
                    <td><PropellerGroupSvg positives={{ frontLeft: true, frontRight: true, backLeft: true, backRight: true }} /></td>
                  </tr>
                  <tr>
                    <td><strong>偏航（Yaw）</strong></td>
                    <td><strong>方向舵（Rudder，R）</strong></td>
                    <td><ControllerSvg width={160} height={80} leftStickHighlights={{ left: 'negative', right: 'positive' }} /></td>
                    <td><PropellerGroupSvg positives={{ frontRight: true, backLeft: true }} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="step-card">
            <div className="step-content">
              <h3>（再简单说一下 AirMode 的事儿）</h3>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'slide-10',
      title: '看看视频 + Q & A',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>看看视频 + Q & A</h1>
          </div>
          <div className="comparison-table-container">
            <div className="component-list">
              <div>• <a href="https://www.bilibili.com/video/BV1ZPTTzEER7" target="_blank" rel="noopener noreferrer">新人入门必练模拟器</a></div>
              <div>• <a href="https://www.bilibili.com/video/BV1vtimYdExX" target="_blank" rel="noopener noreferrer">10 小时留念</a></div>
              <div>• <a href="https://www.bilibili.com/video/BV1bWcze9EDJ" target="_blank" rel="noopener noreferrer">46 小时留念</a></div>
              <div>• <a href="" target="_blank" rel="noopener noreferrer">“颐和园”的真机</a></div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Presentation slides={slides} />
  );
};

export default FPV;
