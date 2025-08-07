'use client'
import React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

function AppSidebar() {
    return (
        <Sidebar >
        <SidebarHeader className='bg-accent'/>
            <SidebarContent className='bg-accent'>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
        <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar;