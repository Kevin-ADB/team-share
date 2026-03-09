// FPV 相关组件的通用定义

export type HighlightColorType = 'positive' | 'negative';

// 根据类型获取颜色
export const getHighlightColorFromType = (type?: HighlightColorType): string => {
    switch (type) {
        case 'negative':
            return '#8800ff';
        case 'positive':
            return '#dd0000';
        default:
            return "none";
    }
};
