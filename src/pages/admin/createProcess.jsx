import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Dropdown from "react-dropdown"
import { useState } from "react";

import "react-dropdown/style.css"
import style from "./stylesForms.module.css";

const CreateProcess = () => {
  const [editorData, setEditorData] = useState("");
  const [visibility, setVisibility] = useState("");
  const [priority, setPriority] = useState("");
  const imgPath = process.env.PUBLIC_URL + "/resources/icons/";
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className="flex flex-row w-auto h-auto">
        <div className="h-96 w-8/12 p-10">
          <p className="text-gray-500"> Crea un nuevo trámite </p>
          <input type="text" className={style.input} placeholder="Introduzca el título del trámite" />
          <CKEditor
            editor={ClassicEditor}
            data={editorData}
            onChange={(event, editor) => {
              const data = editor.getData();
              setEditorData(data);
            }}
          />
        </div>
        <div className="w-1/4 h-full pt-10">
          <div className={style.card}>
            <div className={style.cardTitle}>
              <p className="text-lg">Publicar</p>
              <button className={style.button}>Previsualización</button>
            </div>
            <span className="flex items-center"> <img src={imgPath + "flag.png"} alt="eye" className="size-6 mr-3" /> <p>Estado: estado</p> </span>
            <span className="flex items-center"> <img src={imgPath + "eye.png"} alt="eye" className="size-7 mr-2" /> <p>Visibilidad: previsualización</p> </span>
          </div>
          <div className={style.card}>
            <span className="flex items-center">
              <img src={imgPath + "eye.png"} alt="eye" className="size-7 mr-2" />
              <p>Visibilidad:</p>
              <Dropdown options={["Público", "Privado"]} onChange={(event) => setVisibility(event.value)} value={visibility} placeholder="Opciones" className="pl-8" />
            </span>
          </div>
          <div className={style.card}>
            <span className="flex items-center">
              <img src={imgPath + "list.png"} alt="eye" className="size-6 mr-4" />
              <p>Prioridad:</p>
              <Dropdown options={["Urgente", "Informativo", "Eventos especiales", "Informativos"]} onChange={(event) => setPriority(event.value)} value={priority} placeholder="Opciones" className="pl-8" />
            </span>
          </div>

        </div>

      </div>
    </form>
  )
}


export default CreateProcess;
