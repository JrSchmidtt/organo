import './ProfileCard.css';
import { AiFillCloseCircle } from "react-icons/ai";

const ProfileCard = ({id, name, role, squadName, image, deletePeopleCard }) => {
    if (!image) {
        image = 'https://github.com/github.png'
    }
    return (
        <section className='profile'>
            <div className='delete'>
                <button onClick={() => deletePeopleCard(id)}>
                    <AiFillCloseCircle/>
                </button>
            </div>
            <div className='header'>
                <img src={image} alt='Profile Image' />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
                <h5>{squadName}</h5>
            </div>
        </section>
    )
}

export default ProfileCard