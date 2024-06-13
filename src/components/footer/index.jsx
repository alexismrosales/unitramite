import style from "./styles.module.css"

const Footer = () => {
  return (
    <div className={style.container}>
      <div className="flex justify-center">
        <ul className="flex flex-row justify-center items-center py-1">
          <li><img src={process.env.PUBLIC_URL + "/" + "social/gmail.png"} className="size-7 mr-3" /></li>
          <li><img src={process.env.PUBLIC_URL + "/" + "social/instagram.png"} className="size-6 mr-3" /></li>
          <li><img src={process.env.PUBLIC_URL + "/" + "social/pinterest.png"} className="size-6" /></li>
        </ul>
      </div>
      <div>
      </div>
      <div>
        <ul className="flex flex-row justify-center items-center py-1">
          <li className="mr-2">Inicio</li>
          <li className="mr-2">Calendario</li>
          <li className="mr-2">Trámites</li>
          <li>Información</li>
        </ul>
      </div>
    </div>
  )
}
export default Footer 
