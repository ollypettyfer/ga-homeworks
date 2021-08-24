import React from 'react'
import { useHistory } from 'react-router'
import { registerUser } from '../../lib/api'

const Register = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    FormData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  })
  //stop from from reloading
  const handleSubmit = async (e) => {
    e.preventDefault()
    //if loging is correct push me to login page.
    try {
      const response = await registerUser(state.FormData)
      console.log('response from api', response)

      if (response.status === 200) {
        history.push('/login')
      }
    } catch (err) {
      console.log('error registering user', err)
    }
  }

  const handlechange = (e) => {
    const newFormData = {
      ...state.FormData,
      [e.target.name]: e.target.value
    }
    setState({ FormData: newFormData })
  }
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            onSubmit={handleSubmit}
            className="column is-half is-offset-one-quater box"
          >
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Username"
                  name="username"
                  value={state.FormData.username}
                  onChange={handlechange}
                ></input>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Email"
                  name="email"
                  value={state.FormData.email}
                  onChange={handlechange}
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
                  onChange={handlechange}
                ></input>
              </div>
            </div>

            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Password Confirmation"
                  name="passwordConfirmation"
                  type="password"
                  value={state.FormData.passwordConfirmation}
                  onChange={handlechange}
                ></input>
              </div>
            </div>
            <div className="field">
              <input
                className="button is-fullwidth is-warning"
                type="submit"
                value="Register"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
