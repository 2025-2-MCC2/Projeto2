import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';
import Card3 from './Cards/Card3';
import './Cards/cards.css';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <Card1 />
            <Card2 />
            <Card3 />
        </div>
    );
}

export default Dashboard;
