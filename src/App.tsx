import { use } from "react"
import Hello from "./components/Hello"
import PersonContext from "./contexts/Person.context"

function App() {

    const personContext = use(PersonContext)!


    function addPerson() {
        personContext.add({ name: 'Valentyn', gender: 'M' })
    }

    return <>
        { personContext.persons.map(p => <Hello key={p.name} {...p} />) }
        <button onClick={addPerson}>+</button>
    </>
}

export default App


