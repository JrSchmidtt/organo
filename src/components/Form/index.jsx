import './Form.css'
import FieldText from '../FieldText'
import DropDownList from '../DropDownList'

const Form = () => {
    const squads = ['Frontend', 'Backend', 'Fullstack', 'Mobile', 'DevOps', 'Marketing']
    return (
        <section className='Form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <FieldText label="Nome" placeholder="Digite seu nome" />
                <FieldText label="Cargo" placeholder="Digite seu cargo" />
                <FieldText label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropDownList options={squads} label="Selecione seu Squad" />
            </form>
        </section>
    )
}

export default Form