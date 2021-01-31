import React, { useEffect, useState } from 'react'
import {Loading} from './Components/Loading'
import { AppRouter } from './routes/AppRouter';


export const App = () => {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    },2500)
  }, [])

  return (
    <div>
      {isLoading ? 
        <Loading /> : 
        <AppRouter/>
      }
    </div>
  )
}
