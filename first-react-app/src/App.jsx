import Card from './Card.jsx';
import List from './List.jsx';
function App() {
  return (
    <>
      <Card name='Mohammed Faisal Adamu' title={true} EmploymentStatus={true}></Card>
      <Card name='Mr Charles' title={false} EmploymentStatus={false}></Card>
      <Card></Card>
      <List></List>
    </>
  );
}

export default App
