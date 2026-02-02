import React, { useState } from 'react';
import Presentation, { Slide } from '../../common/presentation';

const FPV: React.FC = () => {
  const [helloMessage, setHelloMessage] = useState('');

  const handleHelloClick = () => {
    const messages = [
      '🚁 Hello FPV World!',
      '✈️ 准备起飞...',
      '🎮 FPV 操控就绪！',
      '🌟 享受第一人称飞行体验！'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setHelloMessage(randomMessage);
  };

  const slides: Slide[] = [
    {
      id: 'slide-1',
      title: 'FPV 穿越机世界',
      content: (
        <div className="slide-content">
          <h1>FPV 穿越机世界</h1>
          <h2>Hello World!</h2>
          <p>欢迎来到激动人心的 FPV 飞行体验</p>
          <div className="author">
            <p>分享者：你的名字</p>
            <p>日期：2026年2月</p>
          </div>
        </div>
      )
    },
    {
      id: 'slide-2',
      title: '什么是 FPV？',
      content: (
        <div className="slide-content">
          <h1>什么是 FPV？</h1>
          <ul>
            <li>FPV = First Person View（第一人称视角）</li>
            <li>通过机载摄像头实时传输画面</li>
            <li>飞手戴着 FPV 眼镜或看着屏幕操控</li>
            <li>就像自己在飞机里驾驶一样！</li>
          </ul>
        </div>
      )
    },
    {
      id: 'slide-3',
      title: 'Hello World Demo',
      content: (
        <div className="slide-content">
          <h1>Hello World Demo</h1>
          <div className="demo-container">
            <div id="hello-output">
              {helloMessage && (
                <div className="hello-message">
                  <h3>{helloMessage}</h3>
                  <p>这就是 FPV 带给我们的激动人心的体验！</p>
                </div>
              )}
            </div>
            <button
              id="hello-btn"
              onClick={handleHelloClick}
            >
              点击体验 FPV 感觉
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <Presentation 
      slides={slides} 
      title="FPV Drone Presentation" 
    />
  );
};

export default FPV;
