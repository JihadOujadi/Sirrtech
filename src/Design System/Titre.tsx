import "../Design System/Title.css";

type TitleProps = {
  text: string;
  variant?: string;
};

function Title({ text, variant }: TitleProps) {
  return (
    <h2 className={`sirrtech__title${variant ? ` ${variant}` : ""}`}>{text}</h2>
  );
}

export default Title;
