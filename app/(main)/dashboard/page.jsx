import { Card, CardContent } from '@/components/ui/card'
import CreateAccountDrawer from '@/components/ui/create-account-drawer'
import { Plus } from 'lucide-react'
import React from 'react'

 function DashboardPage() {
    

  return (
    <div className='px-5'>
        {/* Budget Progress */}


        {/* Overview */}

        {/* Account grid */}
        <div className='grid gap-4 md:grid-cols-2 lg:grids-cols-3'>
          <CreateAccountDrawer>
            <Card className='hover:shadow-md transition-shadow cursor-pointer border-dashed'>
              <CardContent className='flex flex-col items-center justify-center text0muted-foreground h-full pt-5'>
                <Plus className="h-10 w-10 mb-2"/>
                <p className='text-sm font-medium'>Add new Account</p>
              </CardContent>
            </Card>
          </CreateAccountDrawer>
        </div>

    </div>
  )
}

export default DashboardPage
