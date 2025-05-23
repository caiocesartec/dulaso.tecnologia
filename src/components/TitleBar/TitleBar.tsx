import "./TitleBar.css";

type TitleBarProps = {
  titulo: string;
};

export default function TitleBar({ titulo }: TitleBarProps) {
  return (
    <section>
      <h2>{titulo}</h2>
    </section>
  );
}
