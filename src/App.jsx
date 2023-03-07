import React, { useCallback, useEffect, useState } from 'react';
import { SearchInput } from './components/SearchInput/SearchInput';
import { Card } from './components/Card/Card';
import urlData from './data/data';
import './App.scss'


function App() {
  const [dataUsers, setDataUsers] = useState({})
  const [userValue, setUserValue] = useState('')
  const [hideСard, setHideCard] = useState(true)

  const getUsersData = useCallback(async () => {
    try {
      const response = await fetch(urlData + userValue)
      const userData = await response.json()
      setDataUsers(userData)
      setHideCard(false)
    } catch (error) {
      console.error()
    }
  }, [userValue])

  const changeInputHandler = (e) => {
    setUserValue(e.target.value)
  }

  return (
    <div className='App'>
      <SearchInput onChange={changeInputHandler} onClick={getUsersData} />
      {
        hideСard ? '' : <Card data={dataUsers} />
      }
    </div>
  );
}

export default App;
