import OptionCard from "../../components/optionCard"
import style from "./styles.module.css"
const AdminHomePage = () => {
  const adminData = JSON.parse(sessionStorage.getItem("adminData"));
  const username = adminData.username;
  const options = ["Gestión de trámites", "Crear trámites", "Informes", "Gestión de usuarios"];
  const routes = ["/", "/admin/crearTramite", "/", "/"];

  return (
    <div className="flex items-center justify-center h-[32rem] w-full">
      <div className={style.container}>
        <div>
          <h2 className={style.title}> Hola <span className={style.name}>{username}</span> </h2>
          <p className="text-xl">Elije la opción que desees.</p>
        </div>
        <div id="options" className={style.cards}>
          {options.map((option, i) => (
            <OptionCard title={option} id={`${i + 1}-card`} image={`/resources/optionCards/${i + 1}-card.png`} redirect={routes[i]} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default AdminHomePage
