import React from 'react'
import Footer from '../common-components/Footer';
import Header from '../common-components/Header'

const Content: React.FunctionComponent = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <div className='mx-auto container max-w-4xl'>
                <Header/>
            </div>        
            <div className='mx-auto container max-w-4xl flex-grow border border-red-800'>
                code goes here
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}


export default Content;