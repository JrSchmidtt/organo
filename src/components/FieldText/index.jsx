import "./FieldText.css"

const FieldText = () => {
    return (
        <div className="field">
            <label className="field__label" htmlFor="name">Nome</label>
            <input className="field__input" type="text" id="name" name="name" placeholder="Digite seu nome" />

        </div>
    )
}

export default FieldText