import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import Squad from './components/Squad';
import squadsDefault from './config/squads';

function App() {
  const [peopleList, setPeople] = useState([]);
  const [squads, setSquads] = useState(squadsDefault);
  const savePeople = (people) => {
    setPeople([...peopleList, people]);
  }

  const deletePeople = (e) => {
    console.log("Deletando pessoa", e);
  }

  const changeSecunderyColor = (color, squadName) => {
    console.log("Mudando cor", color, squadName);
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