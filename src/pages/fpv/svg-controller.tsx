import React from 'react';
import { getHighlightColorFromType, HighlightColorType } from './common';

interface ControllerSvgProps {
  width?: number;
  height?: number;
  className?: string;
  leftStickHighlights?: {
    up?: HighlightColorType;
    down?: HighlightColorType;
    left?: HighlightColorType;
    right?: HighlightColorType;
  };
  rightStickHighlights?: {
    up?: HighlightColorType;
    down?: HighlightColorType;
    left?: HighlightColorType;
    right?: HighlightColorType;
  };
}

class ControllerSvg extends React.Component<ControllerSvgProps> {
  render() {
    const { width = 300, height = 150, className, leftStickHighlights, rightStickHighlights } = this.props;
    const {
        up: leftUp,
        down: leftDown,
        left: leftLeft,
        right: leftRight
    } = leftStickHighlights || {};
    const {
        up: rightUp,
        down: rightDown,
        left: rightLeft,
        right: rightRight
    } = rightStickHighlights || {};
    
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 300 150"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 控制器主体 - 长方形 */}
        <rect
          x="2"
          y="2"
          width="296"
          height="146"
          rx="15"
          ry="15"
          fill="none"
          stroke="#8ca3c7"
          strokeWidth="2"
        />
        
        {/* 左摇杆 */}
        <g>
          {/* 左摇杆底座 */}
          <circle
            cx="80"
            cy="75"
            r="55"
            fill="none"
            stroke="#8ca3c7"
            strokeWidth="3"
          />
          
          {/* 左摇杆四个箭头 */}
          {/* 上箭头 */}
          <path
            d="M80 40 L65 58 L72 58 L72 72 L88 72 L88 58 L95 58 Z"
            fill={getHighlightColorFromType(leftUp)}
            stroke="#8ca3c7"
            strokeWidth="2"
          />
          {/* 下箭头 */}
          <path
            d="M80 110 L95 92 L88 92 L88 78 L72 78 L72 92 L65 92 Z"
            fill={getHighlightColorFromType(leftDown)}
            stroke="#8ca3c7"
            strokeWidth="2"
          />
          {/* 左箭头 */}
          <path
            d="M30 75 L48 60 L48 68 L62 68 L62 82 L48 82 L48 90 Z"
            fill={getHighlightColorFromType(leftLeft)}
            stroke="#8ca3c7"
            strokeWidth="2"
          />
          {/* 右箭头 */}
          <path
            d="M130 75 L112 90 L112 82 L98 82 L98 68 L112 68 L112 60 Z"
            fill={getHighlightColorFromType(leftRight)}
            stroke="#8ca3c7"
            strokeWidth="2"
          />
        </g>
        
        {/* 右摇杆 */}
        <g>
          {/* 右摇杆底座 */}
          <circle
            cx="220"
            cy="75"
            r="55"
            fill="none"
            stroke="#8ca3c7"
            strokeWidth="3"
          />
          
          {/* 右摇杆四个箭头 */}
          {/* 上箭头 */}
          <path
            d="M220 40 L205 58 L212 58 L212 72 L228 72 L228 58 L235 58 Z"
            fill={getHighlightColorFromType(rightUp)}
            stroke="#8ca3c7"
            strokeWidth="2"
          />
          {/* 下箭头 */}
          <path
            d="M220 110 L235 92 L228 92 L228 78 L212 78 L212 92 L205 92 Z"
            fill={getHighlightColorFromType(rightDown)}
            stroke="#8ca3c7"
            strokeWidth="2"
          />
          {/* 左箭头 */}
          <path
            d="M170 75 L188 60 L188 68 L202 68 L202 82 L188 82 L188 90 Z"
            fill={getHighlightColorFromType(rightLeft)}
            stroke="#8ca3c7"
            strokeWidth="2"
          />
          {/* 右箭头 */}
          <path
            d="M270 75 L252 90 L252 82 L238 82 L238 68 L252 68 L252 60 Z"
            fill={getHighlightColorFromType(rightRight)}
            stroke="#8ca3c7"
            strokeWidth="2"
          />
        </g>
      </svg>
    );
  }
}

export default ControllerSvg;
