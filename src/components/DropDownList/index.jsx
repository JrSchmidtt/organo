import './DropDownList.css'

const DropDownList = (props) => {
    const { label, options, required } = props

    const handleChange = (event) => {
        props.handleChange(event.target.value)
    }

    return (
        <div className='drop-down-list'>
            <label>{label}</label>
            <select required={required} onChange={handleChange} value={props.value} >
                {options.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDownList