import Button from "./components/Button/Button";
import PlayBtnIcon from "./components/svgs/PlayBtnIcon";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Button content="Teste"/>
      <Button icon={<PlayBtnIcon />} content="Teste"/>
    </>
  )
}
