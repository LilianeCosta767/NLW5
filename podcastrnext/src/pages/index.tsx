// FORMAS DE CONSUMIR OS DADOS DE JSON
// SPA: explicação no DOC
// SSR: 
// SSG: 

import { useEffect } from "react"


export default function Home() {
  useEffect(() => {
    
  }, [])

  return (
    <h1>Index</h1>
  )
}

export async fucntion getServerSideProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  .then(response => response.json())
  .then(data => console.log(data))
}