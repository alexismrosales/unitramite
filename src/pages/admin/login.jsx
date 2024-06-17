import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { handleValidateCredentials } from "../../services/admin";
import style from "./stylesLogin.module.css"

const Login = props => {
  // Hooks de los datos
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [notValid, setNotValid] = useState(false);

  // Inputs
  const handleInputUsername = (e) => setUsername(e.target.value);
  const handleInputPassword = (e) => setPassword(e.target.value);

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // En caso que alguno de los campos estén vacio
    if (!username.trim() || !password.trim()) {
      setError(true);
      setNotValid(false);
    }
    else {
      isValid = submitLogin(username, password);
      if (!isValid) {
        setNotValid(true);
        setError(false);
      }
    }
  }
  // Tipo de usuario
  useEffect(() => {
    props.setAdmin(false);
  }, []);


  return (
    <div className="h-auto pt-28 flex items-center">
      <div className={style.container}>
        <div className="flex items-center justify-center">
          <img src={process.env.PUBLIC_URL + "/" + "logo.png"} className="size-100" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center p-32">
            <h2 className={style.subtitle}>Inicio de sesión</h2>
            <p className={style.description}>Por favor, inicie sesión para acceder a las funcionalidades exclusivas para el personal administrativo y administradores.</p>
            <input type="text" placeholder="Usuario" value={username} onChange={handleInputUsername} className={style.inputs} />
            <input type="text" placeholder="Contraseña" value={password} onChange={handleInputPassword} className={style.inputs} />
            <button type="submit" className={style.submit}>Iniciar sesión</button>
            {error && <label className="text-red-400">Error: El campo no puede estar vacío.</label>}
            {notValid && <label className="text-red-400">Error: Los datos ingresados no son correctos.</label>}
          </div>
        </form>
      </div>
    </div>
  )
}

const redirect = async () => {
  const navigate = useNavigate();
  navigate({
    pathname: "/admin"
  })
}

const submitLogin = async (username, password) => {
  adminItem = await handleValidateCredentials(username, password);
  // Si es null, sabemos que no fue valido
  if (adminItem == null) {
    return false;
  }
  // Almacenamos el administrador INCLUYENDO el token
  sessionStorage.setItem(adminItem);
  // Redireccionamos a la pagina principal de administrador
  redirect();
}


export default Login
