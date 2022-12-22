import './DropDownList.css'

const DropDownList = (props) => {
    const { label, options } = props
    return (
        <div className='drop-down-list'>
            <label>{label}</label>
            <select>
                {options.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDownList