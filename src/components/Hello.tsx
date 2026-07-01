import { use, useState } from "react"
import type { Person } from "../contexts/Person.context"
import PersonContext from "../contexts/Person.context"

export default function Hello(props: Person) {

    const personContext = use(PersonContext)!

    const [name, setName] = useState(props.name)

    const style = {
        color: 
            props.gender === 'M' ? 'blue'
            : props.gender === 'F' ? 'pink'
            : 'black' 
    }

    function clickHandler() {
        setName('Mike')
    }

    return <>
        { name === 'Khun' && <p>🦄</p> }
        <p style={style}>Hello {name} !!</p>
        <button onClick={clickHandler}>Change</button>
        <button onClick={() => personContext.deletePerson(props)}>delete</button>
    </> 
}