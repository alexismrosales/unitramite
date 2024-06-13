import { useEffect } from "react"
import style from "./stylesLogin.module.css"

const Login = props => {

  useEffect(() => {
    props.setAdmin(false);
  }, []);

  return (
    <div className="h-auto pt-28 flex items-center">
      <div className={style.container}>
        <div className="flex items-center justify-center">
          <img src={process.env.PUBLIC_URL + "/" + "logo.png"} className="size-100" />
        </div>
        <form>
          <div className="flex flex-col items-center justify-center p-32">
            <h2 className={style.subtitle}>Inicio de sesión</h2>
            <p className={style.description}>Por favor, inicie sesión para acceder a las funcionalidades exclusivas para el personal administrativo y administradores.</p>
            <input type="text" placeholder="Usuario" className={style.inputs} />
            <input type="text" placeholder="Contraseña" className={style.inputs} />
            <button type="submit" className={style.submit}>Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
