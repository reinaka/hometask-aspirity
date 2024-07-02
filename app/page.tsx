import { UserBanner } from './components/UserBanner';
import currentUserData from '../public/mockData/currentUserData';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './components/Tabs';
import { PersonalInfo } from './components/PersonalInfo';
import { EmployeeData } from './components/employee-data/EmployeeData';

export default function Home() {
  return (
    <main>
      <Tabs defaultValue="generalInfo">
        <UserBanner 
          userName={currentUserData.userName}
          avatarSrc={currentUserData.avatarSrc}
          userRole={currentUserData.userRole}
          userLocation={currentUserData.userLocation}
          localTime={currentUserData.localTime}
        >
          <TabsList className="pt-[50px]">
            <TabsTrigger value="generalInfo">Основная информация</TabsTrigger>
            <TabsTrigger value="vacation">Отпуск</TabsTrigger>
          </TabsList>
        </UserBanner>
        <div className="mt-4">
          <TabsContent value="generalInfo" className="flex flex-col lg:flex-row gap-4 w-full">
            <PersonalInfo />
            <EmployeeData 
              project={currentUserData.project}
              startDate={currentUserData.startDate}
              endDate={currentUserData.endDate}
            />
          </TabsContent>
          <TabsContent value="vacation"><div>Vacation</div></TabsContent>
        </div>
      </Tabs>
    </main>
  );
}
