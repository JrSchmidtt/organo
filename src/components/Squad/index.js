import ProfileCard from '../ProfileCard';
import './Squad.css';

const Squad = (props) => {
    const { squadName, primaryColor, secondaryColor, peopleList } = props;
    const squadStyle = {
        backgroundColor: secondaryColor,
    }
    const squadNameStyle = {
        borderColor: primaryColor,
    }
    return (
        (peopleList.length > 0) ?
            <section className="squad" style={squadStyle}>
                <h3 style={squadNameStyle}>{squadName}</h3>
                <div className='cards'>
                    {peopleList.map((people, index) => {
                        return <ProfileCard
                            key={index}
                            name={people.name}
                            role={people.role}
                            image={people.image}
                            squadName={people.squad}
                        />
                    })}
                </div>
            </section>
        : undefined
    );
}
export default Squad;