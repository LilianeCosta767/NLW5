// FORMAS DE CONSUMIR OS DADOS DE JSON
// SPA: explicação no DOC
// SSR: 
// SSG: 

import { useEffect } from "react"


export default function Home(props) {
  console.log(props.episodes)

  return (
    <h1>Index</h1>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, // a cada 8 horas que a pessoa acessar a página será gerado um novo HTML, 3 vezes por dia para a chamada dos dados na API
  }
}