import React from 'react'
import { getAllWines } from '../lib/api'
import WineCard from './WineCard'

const WineIndex = () => {
  const [state, setState] = React.useState({ wines: [] })

  const fetchWinesFromApi = async () => {
    try {
      const results = await getAllWines()
      setState({ wines: results.data })
    } catch (err) {
      console.log('ann error has occured fetching the wines', err)
    }
  }
  React.useEffect(() => {
    fetchWinesFromApi()
  }, [])
  console.log(state)
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {state.wines.map((wine) => (
            <WineCard
              key={wine._id}
              _id={wine._id}
              name={wine.name}
              origin={wine.orgin}
              image={wine.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WineIndex
