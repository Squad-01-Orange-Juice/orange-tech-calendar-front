

const EventForm = () => {
  return (
    <form className="form">
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
    </form>
  )
}

export default EventForm
