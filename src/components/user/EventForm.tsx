import { useState } from "react"
import Styles from "./EventForm.module.css"

const EventForm = () => {
  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [local, setLocal] = useState("")
  const [link, setLink] = useState("")
  const [dataInicio, setDataInicio] = useState("")
  const [grauito, setGratuito] = useState(false)


  return (
    <form className={Styles["form"]}>
      <fieldset>
        <label className="label">Título do Evento</label>
        <input type="text" className="input" />
      </fieldset>
      <fieldset>
        <label className="label">Descrição</label>
        <textarea className="input" />
      </fieldset>
      <fieldset className="grid-2">
        <label className="label">Data de Início</label>
        <input type="date" />
        
        <label className="label">Data de Fim</label>
        <input type="date" />
      </fieldset>
      <fieldset>
        <label className="label">Localização</label>
        <input type="text" className="input" />
      </fieldset>
      <div className={Styles["buttons"]}>
        <button className="btn">Cancelar</button> 
        <button className="btn">Adicionar Evento</button> 
      </div>
    </form>
  )
}

export default EventForm
