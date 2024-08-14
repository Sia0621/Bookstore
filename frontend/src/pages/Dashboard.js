import React from 'react';
import Sidebar from '../components/Sidebar';
import ContentArea from '../components/ContentArea';
import './Dashboard.css';

function Dashboard(){
    return (
        <div className="dashboard">
            <Sidebar />
            <ContentArea />
        </div>
    );
};

export default Dashboard;