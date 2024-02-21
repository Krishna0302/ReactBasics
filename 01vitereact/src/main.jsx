import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h2>Custom hiiii!</h2>
    </div>
  )
}

const anotherElement = (
   <a href="https://google.com" target='_blank'>Click me to visit Google</a>
)


const anotheruser = 'krishna'
const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  'click me go to google website',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp />
    // anotherElement
    reactElement
    // <App/>
)
