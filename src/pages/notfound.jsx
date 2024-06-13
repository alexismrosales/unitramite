const NotFound = () => (
  <div className="h-auto w-full mt-64 flex items-center jusify-center flex-col">
    <h1 className="text-center text-cadet-gray text-5xl">No se ha podido validar la página</h1>
    <img src={process.env.PUBLIC_URL + "/" + "resources/close.png"} className="size-64" />
  </div>
)

export default NotFound
