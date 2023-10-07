import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import data from './data'

export default function App(){
    const content = data.map(item => 
        <Content
            key={item.id} 
            {...item}
        />
    )
    
    return (
        <div>
            <Navbar />
            {content}
        </div>
    )
}