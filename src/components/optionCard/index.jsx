import style from "./styles.module.css"
const OptionCard = props => {
  let title = props.title
  let path = props.image
  let id = props.id
  return (
    <button className={style.card}>
      <img src={process.env.PUBLIC_URL + path} className="m-7 size-10" alt={id} />
      <h3 className={style.title}>{title}</h3>
    </button>
  )
}

export default OptionCard
