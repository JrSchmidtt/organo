import './Form.css'
import FieldText from '../FieldText'

const Form = () => {
    return (
        <section className='Form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <FieldText label="Nome" placeholder="Digite seu nome" />
                <FieldText label="Cargo" placeholder="Digite seu cargo" />
                <FieldText label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Form