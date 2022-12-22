import Banner from './components/Banner';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import Squad from './components/Squad';
import squads from './config/squads';

function App() {
  const [peopleList, setPeople] = useState([]);
  const savePeople = (people) => {
    setPeople([...peopleList, people]);
  }

  useEffect(() => {
    console.log("peopleList", peopleList);
  }, [peopleList]);

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
        />
      })}
    </div>
  );
}

export default App;