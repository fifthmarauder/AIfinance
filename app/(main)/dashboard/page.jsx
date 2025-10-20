import { Suspense } from "react";
import { getUserAccounts } from "@/actions/dashboard";
import { getDashboardData } from "@/actions/dashboard";
import { getCurrentBudget } from "@/actions/budget";
import  AccountCard from "./_components/account-card";
import  CreateAccountDrawer  from "@/components/create-account-drawer";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import DashboardOverview  from "./_components/transaction-overview";
import BudgetProgress from "../account/_components/budget.progress";



async function DashboardPage() {
  const accounts = await getUserAccounts();
  const defaultAccount = accounts?.find((account)=>account.isDefault);
  let budgetData = null;
  const transactions = await getDashboardData();
  if(defaultAccount){
    budgetData = await getCurrentBudget(defaultAccount.id)
  }


  return (
    <div className='space-y-8'>
        {/* Budget Progress */}
        {defaultAccount &&(
          <BudgetProgress
          initialBudget = {budgetData?.budget}
          currentExpenses = {budgetData?.currentExpenses || 0}
          />
        )}



        {/* Overview */}
        <Suspense fallback={"Loading Overview..."}>
          <DashboardOverview accounts={accounts} transactions ={transactions || []} />

        </Suspense>

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

          {accounts.length>0 && accounts?.map((account)=>{
            return <AccountCard key={account.id} account = {account}/>

          })}
        </div>

    </div>
  )
}

export default DashboardPage
