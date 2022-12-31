import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import Squad from './components/Squad';
import squadsDefault from './config/squads';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const squadsList = squadsDefault.map(squad => {
    return {...squad, id: uuidv4()}
  });

  const [peopleList, setPeople] = useState([]);
  const [squads, setSquads] = useState(squadsList);

  const savePeople = (people) => {
    people.id = uuidv4();
    setPeople([...peopleList, people]);
  }

  const deletePeople = (id) => {
    setPeople(peopleList.filter(people => people.id !== id));
  }

  const changeSecunderyColor = (color, squadName) => {
    const newSquads = squads.map(squad => {
      if (squad.name === squadName) {
        squad.secondaryColor = color;
      }
      return squad;
    });
    setSquads(newSquads);
  }

  return (
    <div className="App">
      <Banner />
      <Form onRegisterPeople={people => savePeople(people)} />
      {squads.map(squad => {
        return <Squad
          key={squad.name}
          squadName={squad.name}
          primaryColor={squad.primaryColor}
          secondaryColor={squad.secondaryColor}
          peopleList={peopleList.filter(people => people.squad === squad.name)}
          deletePeopleCard={deletePeople}
          changeColor={changeSecunderyColor}
        />
      })}
    </div>
  );
}

export default App;