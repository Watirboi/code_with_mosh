import ListGroup from "./components/ListGroup";


function App() {
  let items: string[] = ["New York", "San Francisco", "Tokyo", "Paris"];

  return (
    <div><ListGroup items={items} heading="Cities" /></div>
  )
}

export default App;