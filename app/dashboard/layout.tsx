import SideNav from '@/app/ui/dashboard/sidenav'
import { Children } from 'react'

export default function Layout({children}:{ children: React.ReactNode}){
    return(
        <div>
            <div>
                <SideNav/>
            </div>
            <div>{children}</div>
        </div>
        
    ) 
}