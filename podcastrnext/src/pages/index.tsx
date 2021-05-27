// FORMAS DE CONSUMIR OS DADOS DE JSON
// SPA: explicação no DOC
// SSR: 
// SSG: 

import { GetStaticProps } from 'next';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useEffect } from "react";
import { api } from '../services/api';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  members: string;
  duration: number;
  durationAsSting: string;
  url: string;
  publishedAt: string;
}

type HomeProps = {
  // episodes: Array<Episode> // array pode ser declarado assim
  episodes: Episode[];        // ou assim
}

export default function Home(props: HomeProps) {
  console.log(props.episodes)

  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  // formatando os dados
  const episodes = data.map(episode => {
    return {
      id: episode.id,
      tittle: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {locale: ptBR}),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url
    };
  })

  return {
    props: {
      episodes,
    },
    revalidate: 60 * 60 * 8, // a cada 8 horas que a pessoa acessar a página será gerado um novo HTML, 3 vezes por dia para a chamada dos dados na API
  }
}