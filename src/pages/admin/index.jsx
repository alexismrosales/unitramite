import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import OptionCard from "../../components/optionCard"
import style from "./styles.module.css"
const AdminHomePage = props => {
  const navigate = useNavigate()
  const Redirect = () => {
    navigate({
      pathname: '/notfound'
    })
  }
  const options = ["Gestión de trámites", "Crear trámites", "Informes", "Gestión de usuarios"]

  useEffect(() => {
    props.setAdmin(true)
  }, [])

  if (props.status) {
    return (
      <div className="flex items-center justify-center h-[32rem] w-full">
        <div className={style.container}>
          <div>
            <h2 className={style.title}> Hola <span className={style.name}>{props.user.username}</span> </h2>
            <p className="text-xl">Elije la opción que desees.</p>
          </div>
          <div id="options" className={style.cards}>
            {options.map((option, i) => (
              <OptionCard title={option} id={`${i + 1}-card`} image={`/resources/optionCards/${i + 1}-card.png`} />
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    Redirect()
    return (
      <div></div>
    )
  }
}
export default AdminHomePage
