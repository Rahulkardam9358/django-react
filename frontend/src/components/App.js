import React from 'react'

const App = () => {
    return (
        <div>
            {process.env.REACT_APP_PORT}<br/>
            {process.env.REACT_APP_API_URL}
        </div>
    )
}

export default App
