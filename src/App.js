import Banner from './components/Banner';
import Form from './components/Form';
import { useEffect, useState } from 'react';

function App() {
  const [peopleList, setPeople] = useState([]);

  const savePeople = (people) => {
    setPeople([...peopleList, people]);
  }

  useEffect(() => {
    console.log(peopleList);
  }, [peopleList]);

  return (
    <div className="App">
      <Banner />
      <Form onRegisterPeople={people => savePeople(people)}/>
    </div>
  );
}

export default App;