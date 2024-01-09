import CoreConcept from "./CoreConcept.jsx"
import Section from "./Section.jsx"
import { coreConceptsDate } from '../data.js'

export default function CoreConcepts() { 
    return (
        <Section title={"Time to get started!"} id="core-concepts">
          <ul>
           <CoreConcept {...coreConceptsDate[0]} />
           <CoreConcept {...coreConceptsDate[1]}/>
           <CoreConcept {...coreConceptsDate[2]}/>
           <CoreConcept {...coreConceptsDate[3]}/>
          </ul>
        </Section>   
    )
}