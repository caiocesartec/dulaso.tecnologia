import "./TitleBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

type TitleBarProps = {
  titulo: string;
};

export default function TitleBar({ titulo }: TitleBarProps) {
  return (
    <section className="titleBar">
      <FontAwesomeIcon
        icon={faTerminal}
        style={{ color: "#04F46B", fontSize: "50px", marginRight: "10px" }}
      />
      <h2>{titulo}</h2>
    </section>
  );
}
