export default ({ w, h, color }) => {
  const commonStyle = {
    width: w,
    height: h,
    margin: 20,
    backgroundColor: color,
    transition: 'border-radius .3s cubic-bezier(0, 0.61, 0, 1.09)',
  };

  const triangleWidth = w / 2;

  const shapeStyle = {
    square: {
      ...commonStyle,
    },
    circle: {
      ...commonStyle,
      borderRadius: '50%',
    },
    triangle: {
      ...commonStyle,
      width: 0,
      height: 0,
      borderLeft: `${triangleWidth}px solid transparent`,
      borderRight: `${triangleWidth}px solid transparent`,
      borderBottom: `${w}px solid ${color}`,
      backgroundColor: 'transparent',
    }
  };

  return shapeStyle;
};
