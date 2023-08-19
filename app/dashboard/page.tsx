import type {NextPage} from 'next'
import { preloadTodos } from './todos/page'

const Dashboard: NextPage = () => {
  preloadTodos();
  
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard