import style from "./styles.module.css"

const Header = () => {
  return (
    <nav className={style.container}>
      <a className={style.title}>
        <img src={process.env.PUBLIC_URL + "/" + "logo.png"} className={style.logo} />
        <h1 className={style.mainTitle}>
          <span className={style.title1}>Uni</span><span className={style.title2}>Trámites</span>
        </h1>
      </a>
      <div className={style.navbarMenu}>
        <ul className={style.ul}>
          <li className>
            <a className="font-medium">Trámites</a>
          </li>
          <li>
            <a className="font-medium">Calendario</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Header

