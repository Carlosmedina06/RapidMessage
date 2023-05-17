import getUsers from '../actions/getUsers'
import Sidebar from '../components/sidebar/Sidebar'

import Userlist from './components/Userlist'

export default async function UsersLayout({ children }: { children: React.ReactNode }) {
  const users = await getUsers()

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <Userlist items={users} />
        {children}
      </div>
    </Sidebar>
  )
}
