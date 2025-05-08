import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  button: ReactNode;
  card?: number;
}
interface CardBodyProps {
  title: string;
  text?: string;
}
function Card(props: CardProps) {
  const { children, button, card } = props;
  const width = {
    width: "18rem",
  };
  return (
    <div className="card" style={width}>
      <div className="card-header">Featured</div>
      <div className="card-body">
        {/* Hola mundo */}
        {children}
        {button}
        {card}

        {/* <CardBody /> */}
      </div>
    </div>
  );
}
export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}
export default Card;
