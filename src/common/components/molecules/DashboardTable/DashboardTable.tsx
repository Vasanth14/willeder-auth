import React, { useEffect, useState } from 'react';
import { fetchUserData, logout } from 'services/api/auth'; 
import { createColumnHelper } from '@tanstack/react-table';
import Table from 'common/components/atoms/Table';
import { useNavigate } from 'react-router-dom';  // Import logoutUser function
import './DashboardTable.scss';

type Person = {
    passengerName: string;
    airlineName: string;
    trips: number;
    airlineHeadQuaters: string;
};

const columnHelper = createColumnHelper<Person>();

const columns = [
    columnHelper.accessor('passengerName', {
        header: () => 'Passenger Name',
        cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('airlineName', {
        header: () => 'Airline',
        cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('trips', {
        header: () => 'Trips',
        cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('airlineHeadQuaters', {
        header: () => 'Headquarters',
        cell: (info) => info.renderValue(),
    }),
];

const DashboardTable = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<Person[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const pageSize = 10;
    const paginatedData = data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetchUserData();

                if (response && response.data) {
                    setData(response.data);
                } else {
                    throw new Error('Invalid API response structure');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load data');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const totalPages = Math.ceil(data.length / pageSize);

    // Logout function
    const handleLogout = async () => {
        try {
            logout();
        } catch (err) {
            console.error('Logout error:', err);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <nav>
                <div>
                    <h4>Welcome to the Dashboard!</h4>
                </div>
                <div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </nav>

            <Table data={paginatedData} columns={columns} />

            <div className='pagecontrols'>
                <button 
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                    disabled={currentPage === 0}
                >
                    Previous
                </button>

                <span>Page {currentPage + 1} of {totalPages}</span>

                <button 
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                    disabled={currentPage >= totalPages - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DashboardTable;
