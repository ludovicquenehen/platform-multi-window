export const isInWindow = ({ x: objectX, y: objectY }, { width, height, x, y }) => {
  // x /= 15;
  // y /= 15;
  // width /= 15;
  // height /= 15;
  // console.log(x < objectX && objectX < x + width && y < objectY && objectY < y + height ? "isIN" : "isOUT");
  return x < objectX && objectX < x + width && y < objectY && objectY < y + height;
};
