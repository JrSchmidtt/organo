import './Form.css'
import FieldText from '../FieldText'
import DropDownList from '../DropDownList'
import Button from '../Button'
import { useState } from 'react'
import squads from '../../config/squads'

const Form = (props) => {
    
    const squadNames = squads.map((squad) => {
        return squad.name
    })

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [squad, setSquad] = useState(squadNames[0])

    const handleSubmit = (event) => {
        event.preventDefault()
        props.onRegisterPeople({name, role, image, squad})
        console.log('Form Send..' )
    }

    return (
        <section className='Form'>
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <FieldText 
                    required={true} 
                    label="Nome" 
                    value={name} 
                    handleChange={value => setName(value)}
                    placeholder="Digite seu nome" />
                <FieldText 
                    required={true} 
                    label="Cargo" 
                    value={role}
                    handleChange={value => setRole(value)}
                    placeholder="Digite seu cargo" />
                <FieldText 
                    label="Imagem" 
                    value={image} 
                    handleChange={value => setImage(value)}
                    placeholder="Digite o endereço da imagem" />
                <DropDownList 
                    required={true} 
                    options={squadNames} 
                    value={squad}
                    handleChange={value => setSquad(value)}
                    label="Selecione seu Squad" />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}
export default Form