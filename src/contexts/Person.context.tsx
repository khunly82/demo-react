import { createContext, useState, type PropsWithChildren } from "react"

export interface Person {
    name: string
    gender: 'M'|'F'|'X'
}

export interface PersonContextInterface {
    add: (p: Person) => void
    deletePerson: (p: Person) => void
    persons: Person[]
}

const PersonContext = createContext<PersonContextInterface|null>(null)

export function PersonContextProvider(props: PropsWithChildren) {
    const [persons, setPersons] = useState<Person[]>([
        { name: 'Khun', gender: 'M' },
        { name: 'Thierry', gender: 'M' },
        { name: 'Samuel', gender: 'X' },
        { name: 'Caroline', gender: 'F' },
    ])

    function add(p: Person) {
        setPersons(old => [...old, p])
    }

    function deletePerson(p: Person) {
        setPersons(old => old.filter(pe => pe.name !== p.name ))
    }

    return <PersonContext.Provider value={{ persons, add, deletePerson }}>
        { props.children }
    </PersonContext.Provider>
}

export default PersonContext