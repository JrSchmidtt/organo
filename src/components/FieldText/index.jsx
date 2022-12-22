import "./FieldText.css"

const FieldText = (props) => {
    const { label, placeholder } = props
    return (
        <div className="field">
            <label className="field__label" >{label}</label>
            <input className="field__input" type="text" placeholder={placeholder} />
        </div>
    )
}

export default FieldText