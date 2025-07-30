import { DashboardCharts } from "../../components/admin/DashboardCharts";
import { Header } from "../../components/admin/Header";
import { Statistical } from "../../components/admin/Statistical";
export const OverviewPage = () => {
  return (
    <div className="gap-y-6 flex flex-col">
      <Header />
      <Statistical />
      <DashboardCharts />
    </div>
  );
};
