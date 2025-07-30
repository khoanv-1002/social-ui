import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const userData = [
  { name: "Đang hoạt động", value: 120 },
  { name: "Bị khóa", value: 30 },
];

const COLORS = ["#00C49F", "#FB2C37"];

const postData = [
  { month: "Th1", posts: 30 },
  { month: "Th2", posts: 45 },
  { month: "Th3", posts: 60 },
  { month: "Th4", posts: 50 },
  { month: "Th5", posts: 70 },
  { month: "Th6", posts: 40 },
  { month: "Th7", posts: 40 },
  { month: "Th8", posts: 80 },
  { month: "Th9", posts: 100 },
  { month: "Th10", posts: 40 },
  { month: "Th11", posts: 40 },
  { month: "Th12", posts: 40 },
];

export const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-[#121C2F] rounded-3xl shadow-lg p-6 transition-colors duration-300">
        <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-4">
          Trạng thái người dùng
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={userData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
              isAnimationActive={true}
            >
              {userData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend iconType="circle" align="center" verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white dark:bg-[#121C2F] rounded-3xl shadow-lg p-6 transition-colors duration-300">
        <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-4">
          Số lượng bài viết hàng tháng
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={postData} isAnimationActive={true}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="posts" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
