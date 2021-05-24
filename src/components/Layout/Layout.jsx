import { Container } from '@material-ui/core'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

export default function Layout( {children }) {
    return (
        <div>
            <Header />
            <Container>
            {children}
            </Container>
            <Footer />
        </div>
    )
}
