import './Squad.css';

const Squad = (props) => {
    const { squadName, primaryColor, secondaryColor } = props;
    const squadStyle = {
        backgroundColor: secondaryColor,
    }
    const squadNameStyle = {
        borderColor: primaryColor,
    }
    return (
        <section className="squad" style={squadStyle}>
            <h3 style={squadNameStyle}>{squadName}</h3>
        </section>
    );
}
export default Squad;