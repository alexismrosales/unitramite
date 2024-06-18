import { useNavigate } from "react-router-dom";
import style from "./styles.module.css"
const OptionCard = props => {
  const navigate = useNavigate();
  let title = props.title;
  let redirect = props.redirect;
  let path = props.image;
  let id = props.id;

  const onClick = () => {
    navigate(redirect);
  }
  return (
    <button onClick={onClick} className={style.card}>
      <img src={process.env.PUBLIC_URL + path} className="m-7 size-10" alt={id} />
      <h3 className={style.title}>{title}</h3>
    </button>
  )
}

export default OptionCard
