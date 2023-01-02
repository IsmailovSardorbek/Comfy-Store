import React from 'react'

type WindowLocationContext = {
    location: string
}

const Context = React.createContext({} as WindowLocationContext)

export default Context
