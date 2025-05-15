/**
 * [Configuracion nucleo del sistema]
 */
import React, { memo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


/**
 * [Jerarquía de componentes]
 */
import Layout from './components/layout/Layout'


/**
 * [Capa de servicios]
 */


/**
 * [Assets]
 */


const Application = memo( () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} />
            </Routes>
        </Router>
    )
})

export default Application;