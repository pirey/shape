export default ({ w, h, color }) => {
  const triangleW = (parseFloat(w) / 2) + 'px';
  return {
    square: {
      width: w,
      height: h,
      backgroundColor: color,
      margin: '20px',
      transition: 'border-radius .3s cubic-bezier(0, 0.61, 0, 1.09)',
    },
    circle: {
      width: w,
      height: h,
      borderRadius: '50%',
      backgroundColor: color,
      margin: '20px',
      transition: 'border-radius .3s cubic-bezier(0, 0.61, 0, 1.09)',
    },
    triangle: {
      width: '0',
      height: '0',
      backgroundColor: 'transparent',
      borderLeft: `${triangleW} solid transparent`,
      borderRight: `${triangleW} solid transparent`,
      borderBottom: `${w} solid ${color}`,
      margin: '20px',
      transition: 'border-radius .3s cubic-bezier(0, 0.61, 0, 1.09)',
    }
  };
};
