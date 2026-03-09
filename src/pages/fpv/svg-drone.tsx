import React from 'react';

interface DroneSvgProps {
  className?: string;
}

interface PropellerProps {
  cx: number;
  cy: number;
  outerRadius: number;
  innerRadius: number;
  flipHorizontal: boolean;
  flipVertical: boolean;
}

const DroneSvg: React.FC<DroneSvgProps> = ({
  className = ''
}) => {
  const width = 400;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;
  const centralBoxSize = 120;
  const propellerSize = 140;
  const propellerOffset = 180;
  const propellerOffsetDiagonal = propellerOffset / Math.sqrt(2); // 对角线方向的偏移量
  const armWidth = 20;
  const armLength = propellerOffset * 2 + armWidth;

  // 两个斜着的长方形机臂：呈 X 形
  const arms = [
    { // 左上到右下的机臂
      centerX: centerX,
      centerY: centerY,
      length: armLength,
      width: armWidth,
      angle: 45, // 45度角
      propellers: [
        {
          x: centerX - propellerOffsetDiagonal,
          y: centerY - propellerOffsetDiagonal
        }, // 左上桨叶
        {
          x: centerX + propellerOffsetDiagonal,
          y: centerY + propellerOffsetDiagonal
        }  // 右下桨叶
      ]
    },
    { // 右上到左下的机臂
      centerX: centerX,
      centerY: centerY,
      length: armLength,
      width: armWidth,
      angle: -45, // -45度角
      propellers: [
        {
          x: centerX + propellerOffsetDiagonal,
          y: centerY - propellerOffsetDiagonal
        }, // 右上桨叶
        {
          x: centerX - propellerOffsetDiagonal,
          y: centerY + propellerOffsetDiagonal
        }  // 左下桨叶
      ]
    },
  ];

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
    >
      {/* 机臂 */}
      {arms.map((arm, index) => (
        <rect
          key={`arm-${index}`}
          x={-arm.length / 2}
          y={-arm.width / 2}
          width={arm.length}
          height={arm.width}
          rx={arm.width / 2}
          ry={arm.width / 2}
          fill="none"
          stroke="#333"
          strokeWidth="2"
          transform={`translate(${arm.centerX}, ${arm.centerY}) rotate(${arm.angle})`}
        />
      ))}

      {/* 桨叶组件 - 只保留左上 */}
      {arms.flatMap((arm, armIndex) =>
        arm.propellers.map((prop, propIndex) => {
          return (
            <Propeller
              key={`propeller-${armIndex}-${propIndex}`}
              cx={prop.x}
              cy={prop.y}
              flipHorizontal={(armIndex ^ propIndex) === 1} // 右侧桨叶水平翻转
              flipVertical={propIndex === 1} // 下侧桨叶垂直翻转
              outerRadius={propellerSize / 2}
              innerRadius={7}
            />
          );
        })
      )}

      {/* 中控区域 */}
      <rect
        x={centerX - centralBoxSize / 2}
        y={centerY - centralBoxSize / 2}
        width={centralBoxSize}
        height={centralBoxSize}
        rx="8"
        ry="8"
        fill="#3498db"
        stroke="#2980b9"
        strokeWidth="3"
      />

      {/* 中控向上箭头 */}
      <path
        d={`M ${centerX} ${centerY - 35} L ${centerX - 15} ${centerY - 10} L ${centerX - 8} ${centerY - 10} L ${centerX - 8} ${centerY + 15} L ${centerX + 8} ${centerY + 15} L ${centerX + 8} ${centerY - 10} L ${centerX + 15} ${centerY - 10} Z`}
        fill="white"
        stroke="none"
      />
    </svg>
  );
};

const Propeller: React.FC<PropellerProps> = ({ cx, cy, outerRadius, innerRadius, flipHorizontal, flipVertical }) => {
  const arrowRadius = outerRadius * 0.7;

  // 根据翻转状态调整缺口位置和箭头位置
  const startAngle = 20;
  const endAngle = 360 - startAngle;

  // 起始和结束点
  const startX = cx + arrowRadius * Math.cos(startAngle * Math.PI / 180);
  const startY = cy + arrowRadius * Math.sin(startAngle * Math.PI / 180);
  const endX = cx + arrowRadius * Math.cos(endAngle * Math.PI / 180);
  const endY = cy + arrowRadius * Math.sin(endAngle * Math.PI / 180);

  // 箭头在结束位置（缺口上方）
  const arrowX = cx + arrowRadius * Math.cos(endAngle * Math.PI / 180);
  const arrowY = cy + arrowRadius * Math.sin(endAngle * Math.PI / 180);

  // 箭头方向基于endAngle和翻转状态计算
  const arrowDirection = endAngle - 90;

  // 箭头头部朝切线方向
  const arrowSize = 12;
  const arrowX1 = arrowX + arrowSize * Math.cos((arrowDirection - 30) * Math.PI / 180);
  const arrowY1 = arrowY + arrowSize * Math.sin((arrowDirection - 30) * Math.PI / 180);
  const arrowX2 = arrowX + arrowSize * Math.cos((arrowDirection + 30) * Math.PI / 180);
  const arrowY2 = arrowY + arrowSize * Math.sin((arrowDirection + 30) * Math.PI / 180);

  const propeller = '#333';
  const arrowColor = '#e74c3c';

  return (
    <g transform={`translate(${cx}, ${cy}) scale(${flipHorizontal ? -1 : 1}, ${flipVertical ? -1 : 1}) translate(${-cx}, ${-cy})`}>
      {/* 中心点 */}
      <circle
        cx={cx}
        cy={cy}
        r={3}
        fill={propeller}
      />

      {/* 内圆 */}
      <circle
        cx={cx}
        cy={cy}
        r={innerRadius}
        fill="none"
        stroke={propeller}
        strokeWidth="2"
        opacity="0.8"
      />

      {/* 外圆 */}
      <circle
        cx={cx}
        cy={cy}
        r={outerRadius}
        fill="none"
        stroke={propeller}
        strokeWidth="4"
        opacity="0.8"
      />

      {/* 旋转箭头 - 优弧覆盖上半部分 */}
      <path
        d={`M ${startX} ${startY} A ${arrowRadius} ${arrowRadius} 0 1 1 ${endX} ${endY}`}
        fill="none"
        stroke={arrowColor}
        strokeWidth="3"
        opacity="0.8"
      />

      {/* 箭头头部朝斜下 */}
      <path
        d={`M ${arrowX} ${arrowY} L ${arrowX1} ${arrowY1} M ${arrowX} ${arrowY} L ${arrowX2} ${arrowY2}`}
        fill="none"
        stroke={arrowColor}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />
    </g>
  );
};

export default DroneSvg;
