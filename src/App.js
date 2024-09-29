function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert("正在播放！")}>播放电影</Button>
      <Button onSmash={() => alert("正在上传！")}>上传图片</Button>
    </div>
  );
}
