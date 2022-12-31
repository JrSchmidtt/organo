import ProfileCard from '../ProfileCard';
import './Squad.css';

const Squad = ({ squadName, primaryColor, secondaryColor, peopleList, deletePeopleCard, changeColor }) => {
    const squadStyle = {
        backgroundColor: secondaryColor,
    }
    const squadNameStyle = {
        borderColor: primaryColor,
    }
    const colorPicker = (e) => {
        console.log(e.target.value)
        changeColor(e.target.value, squadName);
    }
    return (
        (peopleList.length > 0) ?
            <section className="squad" style={squadStyle}>
                <h3 style={squadNameStyle}>{squadName}</h3>
                <input type='color' value={secondaryColor} onChange={e => colorPicker(e)} className='color-picker'/>
                <div className='cards'>
                    {peopleList.map((people, index) => {
                        return <ProfileCard
                            key={index}
                            name={people.name}
                            role={people.role}
                            image={people.image}
                            squadName={people.squad}
                            deletePeopleCard={deletePeopleCard}
                        />
                    })}
                </div>
            </section>
            : undefined
    );
}
export default Squad;