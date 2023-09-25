import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Styles from "./EventForm.module.css";
import axios from "axios"

const API_BASE_URL = "https://orange-tech-calendar-api-production.up.railway.app/eventos"

const EventForm = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [local, setLocal] = useState("");
  const [link, setLink] = useState("");
  const [dataInicial, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [gratuito, setGratuito] = useState(false);
  const [preco, setPreco] = useState("");
  const [tipo, setTipo] = useState("");
  const [modalidade, setModalidade] = useState("");

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = async (evt) => {
    evt.preventDefault();
    // Crie um objeto com os dados do evento

    const dataInicio = new Date(dataInicial).toJSON()
    const dataFinal = new Date(dataFim).toJSON()

    const eventData = {
      nome,
      descricao,
      local,
      link,
      dataInicio,
      dataFinal,
      gratuito,
      preco,
      tipo,
      modalidade,
    };

    console.log(eventData)

    try {
      // Envie os dados para a API usando o Axios
      const response = await axios.post(`${API_BASE_URL}`, eventData, { headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}})

      // Verifique a resposta da API e tome ações apropriadas, por exemplo, exibir uma mensagem de sucesso
      if (response.status === 201) {
        alert('Evento criado com sucesso!');
        // Você pode adicionar mais lógica aqui, como redirecionar o usuário para outra página
      } else {
        alert('Ocorreu um erro ao criar o evento.');
      }
    } catch (error) {
      // Lida com erros de requisição, por exemplo, exibe uma mensagem de erro
      alert('Ocorreu um erro ao criar o evento.');
      console.error(error);
    }
  };

  const nomeChangeHandler: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setNome(evt.target.value);
  };

  const linkChangeHandler: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setLink(evt.target.value);
  };

  const descricaoChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    setDescricao(evt.target.value);
  };

  const dataInicioChangeHandler: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setDataInicio(evt.target.value);
  };

  const dataFimChangeHandler: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setDataFim(evt.target.value);
  };

  const localChangeHandler: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setLocal(evt.target.value);
  };

  const gratuitoChangeHandler: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setGratuito(evt.target.checked);
  };

  const precoChangeHandler: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setPreco(evt.target.value);
  };

  const handleTipoChange: ChangeEventHandler<HTMLSelectElement> = (evt) => {
    setTipo(evt.target.value);
  };

  const handleModalidadeChange: ChangeEventHandler<HTMLSelectElement> = (evt) => {
    setModalidade(evt.target.value);
  };

  return (
    <form className={Styles["form"]} onSubmit={handleSubmitForm}>
      <fieldset>
        <label className="label">Título do Evento</label>
        <input type="text" value={nome} className="input" onChange={nomeChangeHandler} />
      </fieldset>
      <fieldset>
        <label className="label">Link</label>
        <input type="text" value={link} className="input" onChange={linkChangeHandler} />
      </fieldset>
      <fieldset>
        <label className="label">Descrição</label>
        <textarea value={descricao} className="input" onChange={descricaoChangeHandler} />
      </fieldset>
      <fieldset className="grid-2">
        <label className="label">Data de Início</label>
        <input type="date" value={dataInicial} onChange={dataInicioChangeHandler} />

        <label className="label">Data de Fim</label>
        <input type="date" value={dataFim} onChange={dataFimChangeHandler} />
      </fieldset>
      <fieldset>
        <label className="label">Localização</label>
        <input type="text" value={local} className="input" onChange={localChangeHandler} />
      </fieldset>
      <fieldset>
        <label className="label">Gratuito</label>
        <input type="checkbox" checked={gratuito} onChange={gratuitoChangeHandler} />
      </fieldset>
      <fieldset>
        <label className="label">Preço</label>
        <input type="number" value={preco} className="input" onChange={precoChangeHandler} />
      </fieldset>
      <fieldset>
        <label className="label">Tipo</label>
        <select value={tipo} onChange={handleTipoChange} className="select">
          <option value="evento">Evento</option>
          <option value="conferencia">Conferência</option>
          <option value="palestra">Palestra</option>
          <option value="workshop">Workshop</option>
          <option value="hackathon">Hackathon</option>
          <option value="bootcamp">Bootcamp</option>
        </select>
      </fieldset>
      <fieldset>
        <label className="label">Modalidade</label>
        <select value={modalidade} onChange={handleModalidadeChange} className="select">
          <option value="presencial">Presencial</option>
          <option value="online">Online</option>
        </select>
      </fieldset>
      <div className={Styles["buttons"]}>
        <button className="btn">Cancelar</button>
        <button className="btn" type="submit">Adicionar Evento</button>
      </div>
    </form>
  );
};

export default EventForm;
