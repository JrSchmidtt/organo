import "./FieldText.css"

const FieldText = (props) => {
    const { label, placeholder, required } = props

    const handleChange = (event) => {
        props.handleChange(event.target.value)
    }

    return (
        <div className="field">
            <label className="field__label" >{label}</label>
            <input onChange={handleChange} className="field__input" type="text" placeholder={placeholder} required={required} />
        </div>
    )
}

export default FieldText