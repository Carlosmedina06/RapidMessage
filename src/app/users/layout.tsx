import SideBar from '../components/sidebar/Sidebar'
import getUsers from '../actions/getUsers'

import Userlist from './components/Userlist'

export default async function UserLayout({ children }: { children: React.ReactNode }) {
  const users = await getUsers()

  return (
    // @ts-expect-error Server Component
    <SideBar>
      <div className="h-full">
        <Userlist items={users} />
        {children}
      </div>
    </SideBar>
  )
}
