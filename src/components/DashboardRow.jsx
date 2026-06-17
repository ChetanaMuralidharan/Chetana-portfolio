export default function DashboardRow({ columns = 3, children }) {
  return (
    <div className={`dashboard-row dashboard-row-${columns}`}>
      {children}
    </div>
  );
}
