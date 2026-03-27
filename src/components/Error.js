import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err = useRouteError()
  console.log(err)
  return (
    <div>
      <h2> Oops!!</h2>
      <p>Something Went Wrong</p>
    </div>
  )
}

export default Error
