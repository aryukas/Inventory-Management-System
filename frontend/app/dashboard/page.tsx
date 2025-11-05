import "../styles/dashboard.css";

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Welcome to your Inventory Management System Dashboard!</p>
      <div className="dashboard-buttons">
        <button className="dashboard-button"><i className="fas fa-box"></i> View Inventory</button>
        <button className="dashboard-button"><i className="fas fa-plus"></i> Add Item</button>
        <button className="dashboard-button"><i className="fas fa-chart-line"></i> Analytics</button>
        <button className="dashboard-button"><i className="fas fa-cog"></i> Settings</button>
      </div>
    </div>
  );
}
