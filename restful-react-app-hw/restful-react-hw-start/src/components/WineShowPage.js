import React from 'react'
import { useParams } from 'react-router'
import { getSingleWines } from '../lib/api'

const WineShowPage = () => {
  const { id } = useParams()
  const [state, setState] = React.useState({ wines: null })
  const getWinesFromAPi = async () => {
    try {
      const response = await getSingleWines(id)
      setState({ wines: response.data })
    } catch (err) {
      console.error(`an error has occured fetching wines + ${id}, err`)
    }
  }

  React.useEffect(() => {
    getWinesFromAPi()
  }, [])
  console.log('state is', state)

  if (state.wines === null) {
    return <p>Your Wine is being poured...</p>
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">{state.wines.name}</h2>
        <hr />
        <div className="columns">
          <div className="column is-half">
            <h4 className="title is 4">
              <span role="img" aria-label="wine">
                🍷
              </span>
              Tasting Notes
            </h4>
            <hr />
            <p>{state.wines.tastingNotes}</p>
            <hr />

            <h4 className="title is 4">
              <span role="img" aria-label="map">
                🗺
              </span>
              Origin
            </h4>
            <p>{state.wines.origin}</p>
            <hr />
            <h4 className="title is 4">
              <span role="img" aria-label="price">
                💰
              </span>
              Price
            </h4>
            <p>£{state.wines.price}</p>
            <hr />
          </div>
          <div className="column is-half">
            <figure className="image">
              <img src={state.wines.image} alt={state.wines.name}></img>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WineShowPage
