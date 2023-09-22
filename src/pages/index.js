import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { useQuery } from '@apollo/client';

import { list } from 'postcss';
import { GET_ROCKETS } from './graphql';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  
  const { data } = useQuery(GET_ROCKETS);
 

  const rockets = data?.rockets || [];


   return (
            <>

      <nav className='flex justify-center items-center h-16 bg-white text-black text-3xl border-2 relative shadow-sm font-mono' role='navigation'>
        <a href='/' className=''>SpaceX</a></nav>

      <div className='text-black  bg-white border-2 p-5 flex flex-col  space-y-6 text-2xl'>
           {rockets.map((rocket) => (

            <div key={rocket.id} className='py-2 space-y-3 border-2 p-4'>
              
              <h1>
                <b>Name: </b>{rocket.name}
              </h1>
              <h1 >
                <b>Description :</b>{rocket.description}
              </h1>
              <h1  >
                <b>Active:</b> {rocket.active}
              </h1>
              <h1 >
                <b>Cost: </b>{rocket.cost_per_launch}
              </h1>
              <h1>
                <b>Boosters: </b>{rocket.boosters}
              </h1>
              <h1>
                <b>Success Rate: </b>{rocket.success_rate_pct}
              </h1>
            </div>))}
       </div>
    </>
  )}