import cons1 from './assets/components.png'
import cons2 from './assets/config.png'
import cons3 from './assets/jsx-ui.png'
import cons4 from './assets/state-mgmt.png'

export const coreConceptsDate = [
    {
        tite: 'test1',
        description: 'test1 description',
        image: cons1
    },
     {
        tite: 'test2',
        description: 'test2 description',
        image: cons2
    },
      {
        tite: 'test3',
        description: 'test3 description',
        image: cons3
    },
       {
        tite: 'test4',
        description: 'test4 description',
        image: cons4
    }
] 

export const examplesData = {
    component: {
        title: 'Component',
        description: 'Component description',
        code: `function component () {
            return (<h1>hello</h1>)
        }`
    },
     jsx:{
        title: 'Jsx',
         description: 'Jsx description',
         code: `<h1>hello</h1>`
    },
      props:{
        title: 'Props',
          description: 'Props description',
         code: `function component ({children}) {
            return (<h1>{children}</h1>)
        }`
    },
       state:{
        title: 'State',
           description: 'State description',
           code: `function component () {
            const [data, setData] = useState('hello')
            return (<div onClick={() => setData('hello world')}>{data}</h1>)
        }`
    }
}