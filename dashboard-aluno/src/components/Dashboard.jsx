import Card1 from './Cards/card1';

function Dashboard() {
    return (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '20px' }}>
            <Card1 />
            <Card1 />
            <Card1 />
        </div>
    );
}

export default Dashboard;