import Card from './Card.jsx';
import List from './List.jsx';
function App() {
  const Footballers = [
    {name: 'VINI', age: 24, goals: 30},
    {name: 'Rodrygo', age: 23, goals: 20},
    {name: 'Mbappe', age: 23, goals: 50},
    {name: 'Bellingham', age: 21, goals: 32}
]
  return (
    <>
      <Card name='Mohammed Faisal Adamu' title={true} EmploymentStatus={true}></Card>
      <Card name='Mr Charles' title={false} EmploymentStatus={false}></Card>
      <Card></Card>
      <List lists={Footballers}></List>
    </>
  );
}

export default App
