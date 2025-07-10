import { Card } from 'primereact/card';

const Dashboard = () => {
  return (
    <div className="flex justify-content-center align-items-center min-h-screen">
      <Card title="Welcome to the Dashboard!" className="w-25rem">
        <p>You are now logged in.</p>
      </Card>
    </div>
  );
};

export default Dashboard;
