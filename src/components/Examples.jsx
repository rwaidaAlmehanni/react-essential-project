import { useState } from 'react'
import TabButton from "./TabButton.jsx"
import Section from "./Section.jsx"
import { examplesData } from "../data"
import Tabs from './Tabs.jsx'

export default function Examples() { 
  const [tabData, setTabData] = useState(null) 

  let tabContent = "No content selected!!"
  if (tabData) { 
    tabContent = <div id="tab-content">
            <h3>{examplesData[tabData].title}</h3>
            <p>{examplesData[tabData].description}</p>
            <pre>
              <code>
               {examplesData[tabData].code} 
              </code>
            </pre>
          </div>
  }

   function handleClick(tabValue) { 
    setTabData(tabValue)
    }
    return (
      <Section title={"Examples"} id="examples">
        <Tabs
          buttons={ 
          <>
            <TabButton isSelected={tabData === 'component'} onClick={() => handleClick('component')}>Component</TabButton>
            <TabButton isSelected={tabData === 'jsx'} onClick={() => handleClick('jsx') }>Jsx</TabButton>
            <TabButton isSelected={tabData === 'state'} onClick={() => handleClick('state')}>State</TabButton>
            <TabButton isSelected={tabData === 'props'} onClick={() => handleClick('props') }>Props</TabButton>
          </>
        }>
          {tabContent}
        </Tabs>
      </Section>  
    )
}