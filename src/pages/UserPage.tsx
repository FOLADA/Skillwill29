import useGetUsers from '../hooks/useGetUsers'

const UserPage:React.FC = () => {
    const user = useGetUsers()
  return (
    <div>
      <ul>
        {user.map(({id,name}) => 
            (<li key={id}>
        {name}
        </li>))}
      </ul>
    </div>
  )
}

export default UserPage
