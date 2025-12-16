import "../Design System/Cards.css";
import type { ReactNode } from "react";

type CardTitle = {
  icon: ReactNode;
  title: string;
  text: string;
};

function Cards({ title, text, icon }: CardTitle) {
  return (
    <article className="sirrtech__card">
      <div className="sirrtech__card__icon">{icon}</div>
      <div className="sirrtech__card__description">
        <h3 className="sirrtech__card__description-title">{title}</h3>
        <p className="sirrtech__card__description-text">{text}</p>
      </div>
    </article>
  );
}

export default Cards;
