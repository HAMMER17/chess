import React, { useReducer } from 'react'
import Board from './components/Board'
import AppContext from './context/Context'
import { reducer } from './reducer/reducer'
import { initGameState } from './constant'

const App = () => {
  const [appState, dispatch] = useReducer(reducer, initGameState)

  const providerState = { appState, dispatch }
  return (
    <AppContext.Provider value={providerState}>
      <div className='app'>
        <Board />
      </div>
    </AppContext.Provider>

  )
}

export default App
