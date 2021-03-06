import React from 'react'
import { Navbar } from 'react-bootstrap'
import Events from '../features/events'
import TopGrid from '../features/top-grid'
import NavigationBar from '../features/navbar'

export default function Home() {
    return (
        
        <div>
            <NavigationBar/>
            <TopGrid/>
            <Events/>
        </div>
        
    )
}
