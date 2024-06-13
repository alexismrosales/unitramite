import style from "./styles.module.css"
const HomePage = () => {
  return (
    <div>
      <div className={style.imageHolder}>
        <img src="resources/main.jpeg" className="size-1/4 rounded-full" />
      </div>
      <div className={style.introduction}>
        <h1 className={style.title}> <span className={style.title1}>Uni</span><span className={style.title2}>Trámites</span> en <span className={style.title3}>ESCOM</span>
        </h1>
        <p className={style.text}>Bienvenido a Trámites ESCOM, tu portal en línea para la consulta y difusión de información sobre diversos trámites escolares en la ESCOM. Aquí podrás encontrar de manera rápida y sencilla toda la información que necesitas sobre trámites académicos y administrativos, así como acceder a nuestro calendario de eventos y fechas importantes. </p>
        <div className="flex flex-row justify-center space-x-20 my-2">
          <button className={style.buttons}>Revisar trámites disponibles</button>
          <button className={style.buttons}>Checar calendario</button>
        </div>
      </div>
    </div>
  )
}
export default HomePage
