import style from "./styles.module.css"

const AdminHeader = props => {
  console.log(props.isAdmin)
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
          {props.isAdmin ? null : (
            <>
              <li className>
                <a className="font-medium">Inicio</a>
              </li>
              <li>
                <a className="font-medium">Cerrar sesión</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}
export default AdminHeader

