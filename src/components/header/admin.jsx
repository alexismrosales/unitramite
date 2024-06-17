import { useNavigate } from "react-router-dom";
import style from "./styles.module.css"

const AdminHeader = props => {
  const navigate = useNavigate();
  const onClickSession = () => {
    // Borramos los datos de la sesión
    sessionStorage.removeItem("adminData");
    // Cambiamos el estado
    props.onLogout();
    // Redireccionamos al login
    navigate("/admin/login");
  }

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
            <a className="font-medium">Inicio</a>
          </li>
          <li>
            <button type="button" onClick={onClickSession} className="font-medium">Cerrar sesión</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default AdminHeader

