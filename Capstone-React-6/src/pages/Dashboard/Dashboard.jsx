import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FloatingChatButton from '../../components/Dashboard/FloatingChatButton';

const Dashboard = () => {
    const [topTransactions, setTopTransactions] = useState([]);
    const [consultationRequests, setConsultationRequests] = useState([]);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTkzMzA0MzEsInJvbGUiOiJ1c2VyIiwidXNlcklkIjoxMn0.YheEq_mxQGQRQKUGsxnzQ7Z0LUc0gMPEvdagQ_rDVgo';

    useEffect(() => {
        // Fetch top transactions from patient.json (dummy data)
        const fetchTopTransactions = async () => {
            try {
                // Simulating fetching data from a JSON file
                const transactionsData = require('../../components/Transaction/patient.json');
                setTopTransactions(transactionsData.slice(0, 4));
            } catch (error) {
                console.error('Error fetching top transactions:', error);
            }
        };

        // Fetch consultation requests from API
        const fetchConsultations = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/v1/doctors/consultations`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.data.status) {
                    setConsultationRequests(response.data.data);
                } else {
                    console.error('Failed to fetch consultations:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching consultations:', error);
            }
        };

        fetchTopTransactions();
        fetchConsultations();
    }, []);

    return (
        <div className="px-6 overflow-hidden">
            {/* Summary Cards - Placeholder */}
            <div className="grid grid-cols-4 gap-8 mb-4">
                {/* Placeholder for summary cards */}
            </div>

            {/* Graph and Consultation Requests */}
            <div className="grid grid-cols-2 gap-7 mb-4">
                {/* Consultation Requests */}
                <div className="bg-white px-4 pt-4 pb-2 rounded-xl border shadow text-dark-2">
                    <div className="flex justify-between items-center text-center mb-4">
                        <h3 className="text-lg font-semibold">Permintaan Konsultasi</h3>
                        <div className="flex justify-center items-center">
                            <Link to="/dashboard/consultation" className="text-success-darker font-medium text-sm">Lihat Semua</Link>
                            <img src="/Dashboard/lihatsemua.svg" alt="" />
                        </div>
                    </div>
                    <table className="w-full">
                        <tbody>
                            {consultationRequests.map((item) => (
                                <tr key={item.id} className="border-b">
                                    <td className="py-4 flex">
                                        <img src={`/avatars/${item.user_id}.jpg`} alt="Avatar" className="w-9 h-9 mr-4" />
                                        <div>
                                            <p className="font-semibold text-sm">{item.complaint.name}</p>
                                            <p className="font-normal text-xs">{item.complaint.message}</p>
                                        </div>
                                    </td>
                                    <td className="py-4 text-sm">{item.status}</td>
                                    <td className="py-4 flex justify-end mr-2">
                                        <button className="mr-4">
                                            <img src="/Dashboard/Check.svg" alt="" className="w-5 h-5" />
                                        </button>
                                        <button>
                                            <img src="/Dashboard/Clear.svg" alt="" className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Placeholder for Graph */}
                <div className="bg-white px-4 pt-4 pb-2 rounded-xl border shadow text-dark-2">
                    <div className="flex justify-between items-center text-center mb-7">
                        <h3 className="text-lg font-semibold">Top Konten Meditasi</h3>
                        <div className="flex justify-center items-center">
                            <Link to="/dashboard/meditation" className="text-success-darker font-medium text-sm">Lihat Semua</Link>
                            <img src="/Dashboard/lihatsemua.svg" alt="" />
                        </div>
                    </div>
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                        <span>Placeholder for graph</span>
                    </div>
                </div>
            </div>

            {/* Transactions */}
            <div className="text-dark-2">
                <div className="flex justify-between items-center text-center mb-4">
                    <h3 className="text-lg font-semibold">Transaksi</h3>
                    <div className="flex justify-center items-center">
                        <Link to="/dashboard/transaction/list" className="text-success-darker font-medium text-sm">Lihat Semua</Link>
                        <img src="/Dashboard/lihatsemua.svg" alt="" />
                    </div>
                </div>
                <div className="rounded-xl border shadow">
                    <table className="w-full rounded-xl overflow-hidden">
                        <thead className="border-b bg-[#D5EDF3]">
                            <tr>
                                <th className="py-2 text-sm text-left pl-20 w-1/6">Pasien</th>
                                <th className="py-2 text-sm text-center">Tanggal</th>
                                <th className="py-2 text-sm text-center">Waktu</th>
                                <th className="py-2 text-sm text-center">Total</th>
                                <th className="py-2 text-sm text-center">Status</th>
                                <th className="py-2 text-sm text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topTransactions.map((item) => (
                                <tr key={item.id} className="border-b">
                                    <td className="py-2 text-sm flex pl-7">
                                        <img src={`/avatars/${item.avatar}.svg`} alt="Avatar" className="w-9 h-9 mr-4" />
                                        <div>
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="font-normal text-xs">ID: {item.id}</p>
                                        </div>
                                    </td>
                                    <td className="py-2 text-sm text-center">{item.date}</td>
                                    <td className="py-2 text-sm text-center">{item.time}</td>
                                    <td className="py-2 text-sm text-center">{item.total}</td>
                                    <td className="py-2 text-sm text-center">
                                        <span className={`px-3 py-1 rounded text-sm uppercase ${item.status === 'sukses' ? 'bg-success text-white rounded-xl' : 'bg-red-500 text-white rounded-xl'}`}>{item.status}</span>
                                    </td>
                                    <td className="py-2 text-center">
                                        <button>
                                            <img src="/Dashboard/hapus.svg" alt="" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Floating Chat Button */}
            <FloatingChatButton />
        </div>
    );
};

export default Dashboard;
