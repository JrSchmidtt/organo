import './ProfileCard.css';

const ProfileCard = ({ name, role, squadName, image }) => {
    if (!image) {
        image = 'https://github.com/github.png'
    }
    return (
        <section className='colaborador'>
            <div className='cabecalho'>
                <img src={image} alt='Profile Image' />
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{role}</h5>
                <h5>{squadName}</h5>
            </div>
        </section>
    )
}

export default ProfileCard