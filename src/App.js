function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div
      onClickCapture={() => {
        /* 这会首先执行 */
        console.log("捕获子元素上的所有事件。");
      }}
      className="Toolbar"
      onClick={() => {
        alert("你点击了 toolbar ！");
      }}
    >
      <Button onClick={() => alert("正在播放！")}>播放电影</Button>
      <Button onClick={() => alert("正在上传！")}>上传图片</Button>
    </div>
  );
}
