import React from 'react'
import Footer from '../common-components/Footer';
import Header from '../common-components/Header'
import Joke from '../joke';
import Badges from './category-badges';

const Content: React.FunctionComponent = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <div className='mx-auto container max-w-4xl'>
                <Header/>
            </div>        
            <div className='mx-auto container max-w-4xl flex-grow'>
                <Badges/>         
                <Joke/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}


export default Content;