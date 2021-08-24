import React from 'react'
import { loginUser } from '../../lib/api'
import { useHistory } from 'react-router'

const Login = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    FormData: {
      email: '',
      password: ''
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await loginUser(state.FormData)
      console.log('reponse from api', res)

      if (res.status === 200) {
        history.push('/')
      }
    } catch (err) {
      console.log('Error login in', err)
    }
  }

  const handleChange = (e) => {
    const newData = {
      ...state.FormData,
      [e.target.name]: e.target.value
    }
    setState({ FormData: newData })
  }
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            onSubmit={handleSubmit}
            className="column is-half is-offset-one-quarter"
          >
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Email"
                  name="email"
                  value={state.FormData.email}
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={state.FormData.password}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="field">
              <input
                type="submit"
                value="Login"
                className="button is-fullwidth is-danger"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
