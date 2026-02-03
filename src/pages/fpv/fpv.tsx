import React from 'react';
import Presentation, { Slide } from '../../common/presentation';
import '../../styles/fpv.css';

const FPV: React.FC = () => {
  const slides: Slide[] = [
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
      )
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
                <h3>🎥 FPV 是什么？</h3>
                <p>First Person View - 第一人称视角，通过机载摄像头实时传输画面到飞手眼镜或屏幕</p>
              </div>
              <div className="definition-item">
                <h3>🎮 飞行体验</h3>
                <p>就像坐在飞机驾驶舱里一样，以飞行器的视角看世界，带来沉浸式的飞行体验</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'slide-3',
      title: 'FPV 与普通无人机的区别',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>FPV 与普通无人机的区别</h1>
          </div>
          <div className="comparison-table-container">
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>对比维度</th>
                    <th>FPV 无人机</th>
                    <th>普通无人机</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>操控方式</strong></td>
                    <td>
                      <strong>纯手动 (Acro模式)</strong>：完全依赖飞手手动控制所有姿态，无自动辅助，可实现任意角度、高机动飞行，门槛极高。
                    </td>
                    <td>
                      <strong>自稳模式</strong>：依赖<strong>GPS、气压计、视觉传感器</strong>等系统自动保持姿态、位置稳定，操作简化，易于上手。
                    </td>
                  </tr>
                  <tr>
                    <td><strong>续航时间</strong></td>
                    <td>
                      <strong>较短</strong>：激烈飞行下通常为 <strong>5到30分钟</strong>。
                    </td>
                    <td>
                      <strong>较长</strong>：消费级约30分钟以上；工业级或军用级可达数小时至数十小时。
                    </td>
                  </tr>
                  <tr>
                    <td><strong>成本与规模</strong></td>
                    <td>
                      <strong>低成本、高损耗率</strong>：单机成本可低至数百元，设计上可承受高损耗。
                    </td>
                    <td>
                      <strong>高单价、低损耗率</strong>：民用高端机或军用机价格昂贵，被视为重要资产。
                    </td>
                  </tr>
                  <tr>
                    <td><strong>核心定位与用途</strong></td>
                    <td>
                      <strong>沉浸式飞行工具</strong>：追求操控感、灵活性和第一视角的刺激。
                    </td>
                    <td>
                      <strong>自动化作业平台</strong>：注重效率、稳定和任务成果。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'slide-4',
      title: 'FPV 与普通无人机的区别',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>FPV 与普通无人机的区别</h1>
          </div>
          <div className="comparison-table-container">
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>主要用途</th>
                    <th>FPV 无人机</th>
                    <th>普通无人机</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>民用</strong></td>
                    <td>
                      <div className="scenario-list">
                        <p><strong>1. 竞速比赛</strong>：在复杂赛道中竞速穿越。</p>
                        <p><strong>2. 特技拍摄</strong>：拍摄穿越窗户、树林等极具动感的镜头。</p>
                        <p><strong>3. 自由穿越飞行</strong>：以第一视角探索复杂地形。</p>
                        <p><strong>4. 沉浸式体验</strong>：纯粹享受飞行操控乐趣。</p>
                      </div>
                    </td>
                    <td>
                      <div className="scenario-list">
                        <p><strong>1. 影视航拍</strong>：平稳拍摄风光、城市全景。</p>
                        <p><strong>2. 测绘建模</strong>：按规划航线自动飞行，采集测绘数据。</p>
                        <p><strong>3. 电力巡检</strong>：自动环绕电线塔进行拍照检查。</p>
                        <p><strong>4. 物流配送</strong>：点对点自动运输货物。</p>
                        <p><strong>5. 农业植保</strong>：自动完成农田的喷洒与监测。</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>军用</strong></td>
                    <td>
                      <div className="scenario-list">
                        <p><strong>1. 战术级突袭与侦察</strong>：快速穿越复杂环境，进行侦察或<strong>自杀式攻击</strong>。</p>
                        <p><strong>2. 反装甲/反器材</strong>：挂载小型弹头，打击坦克、火炮等目标。</p>
                        <p><strong>3. 炮兵校射与电子战</strong>：提供实时目标修正或进行近距离干扰。</p>
                      </div>
                    </td>
                    <td>
                      <div className="scenario-list">
                        <p><strong>1. 战略/战役级侦察监视</strong>：长航时、大范围战场监控（如"全球鹰"）。</p>
                        <p><strong>2. 精确打击</strong>：挂载导弹进行定点清除（如"死神"无人机）。</p>
                        <p><strong>3. 通信中继与后勤运输</strong>：保障通讯、运输紧急物资。</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'slide-5',
      title: '多飞行模式无人机',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>多飞行模式无人机</h1>
          </div>
          <div className="multi-mode-container">
            <div className="mode-explanation">
              <div className="explanation-card">
                <h3>🔄 多数无人机支持多种飞行模式的切换</h3>
                <p>FPV 并非独立的无人机类型，而是可以作为多飞行模式无人机的一种<strong>操控模式</strong>。</p>
              </div>
              
              <div className="explanation-card">
                <h3>🌰 应用场景</h3>
                <div className="scenario-examples">
                  <div className="scenario-item">
                    <h4>🚀 抛飞操作</h4>
                    <p>抛出 ➡️ 自稳模式开机 ➡️ 机身稳定 ➡️ 开 FPV 模式</p>
                  </div>
                  <div className="scenario-item">
                    <h4>🔋 安全保护</h4>
                    <p>低电/无信号保护：任何模式 ➡️ 自动回收</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'slide-6',
      title: '入坑指"难"',
      content: (
        <div className="slide-content">
          <div className="slide-title">
            <h1>入坑指"难"</h1>
          </div>
          <div className="comparison-table-container">
            <div className="comparison-table">
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
      )
    }
  ];

  return (
    <Presentation slides={slides} />
  );
};

export default FPV;
