import React from 'react';
import { getHighlightColorFromType } from './common';

interface PropellerGroupSvgProps {
  positives: {
    frontLeft?: boolean;
    frontRight?: boolean;
    backLeft?: boolean;
    backRight?: boolean;
  };
}

function getHighlightColor(isPositive?: boolean): string {
  return getHighlightColorFromType(isPositive ? 'positive' : 'negative');
}

const PropellerGroupSvg: React.FC<PropellerGroupSvgProps> = ({
  positives: {
    frontLeft,
    frontRight,
    backLeft,
    backRight
  },
}) => {
  const width = 120;
  const height = 80;
  const centerX = width / 2;
  const centerY = height / 2;
  const propellerRadius = 8;
  const offsetX = 25;
  const offsetY = 15;
  
  // 四个桨叶的位置
  const positions = {
    frontLeft: { x: centerX - offsetX, y: centerY - offsetY },
    frontRight: { x: centerX + offsetX, y: centerY - offsetY },
    backLeft: { x: centerX - offsetX, y: centerY + offsetY },
    backRight: { x: centerX + offsetX, y: centerY + offsetY }
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {/* 中心连线 */}
      <line
        x1={positions.frontLeft.x}
        y1={positions.frontLeft.y}
        x2={positions.backRight.x}
        y2={positions.backRight.y}
        stroke="#666"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1={positions.frontRight.x}
        y1={positions.frontRight.y}
        x2={positions.backLeft.x}
        y2={positions.backLeft.y}
        stroke="#666"
        strokeWidth="1"
        opacity="0.5"
      />
      
      {/* 左前桨叶 */}
      <circle
        cx={positions.frontLeft.x}
        cy={positions.frontLeft.y}
        r={propellerRadius}
        fill={getHighlightColor(frontLeft)}
        stroke="#333"
        strokeWidth="2"
      />
      
      {/* 右前桨叶 */}
      <circle
        cx={positions.frontRight.x}
        cy={positions.frontRight.y}
        r={propellerRadius}
        fill={getHighlightColor(frontRight)}
        stroke="#333"
        strokeWidth="2"
      />
      
      {/* 左后桨叶 */}
      <circle
        cx={positions.backLeft.x}
        cy={positions.backLeft.y}
        r={propellerRadius}
        fill={getHighlightColor(backLeft)}
        stroke="#333"
        strokeWidth="2"
      />
      
      {/* 右后桨叶 */}
      <circle
        cx={positions.backRight.x}
        cy={positions.backRight.y}
        r={propellerRadius}
        fill={getHighlightColor(backRight)}
        stroke="#333"
        strokeWidth="2"
      />
    </svg>
  );
};

export default PropellerGroupSvg;