import '@styles/globals.css';
import { Children } from 'react';

export const metadata ={
    title: 'Prompt.ai',
    description:'This is some description about prompt.ai'
}
const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout
