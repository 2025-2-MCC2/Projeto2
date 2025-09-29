import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { ProgressBar } from "./ProgressBar";
import { GroupCard } from "./GroupCard";
import { ReportsCard } from "./ReportsCard";
import { CommunicationButton } from "./CommunicationButton";
import { AgendaCard } from "./AgendaCard";

export function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Progress Section */}
            <div className="mb-8">
              <ProgressBar />
            </div>
            
            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {/* Group Card */}
              <div className="lg:col-span-1">
                <GroupCard />
              </div>
              
              {/* Reports Card */}
              <div className="lg:col-span-1">
                <ReportsCard />
              </div>
              
              {/* Agenda Card */}
              <div className="lg:col-span-1 xl:col-span-1">
                <AgendaCard />
              </div>
            </div>
            
            {/* Communication Button */}
            <div className="max-w-md mx-auto lg:mx-0">
              <CommunicationButton />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}