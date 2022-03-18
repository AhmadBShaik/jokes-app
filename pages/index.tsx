import type { NextPage } from 'next'
import Jokes from '../components/jokes'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Jokes/>
    </div>
  )
}

export default Home
