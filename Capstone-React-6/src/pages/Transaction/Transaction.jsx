import React, { useEffect, useState } from 'react'
import TransactionCard from "../../components/Transaction/TransactionCard";
import TransactionSummary from '../../components/Transaction/TransactionSummary';
import NewestCard from '../../components/Transaction/NewestCard';
import { Link } from 'react-router-dom';
import transactionsData from '../../components/Transaction/patient.json'; //

export default function Transaction() {
  const [topTransactions, setTopTransactions] = useState([]);
  const recentTransactions = transactionsData.slice(-2);

  // Slice the transactions data to get the top 4
  useState(() => {
    setTopTransactions(transactionsData.slice(0, 4));
  }, []);

  return (
    <div>
      {/* card transkasi harian */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
        <div className="col-span-1">
          <TransactionCard
            count={60}
            variant="blue"
            title="Minggu ini"
          />
        </div>
        <div className="col-span-1">
            <TransactionCard
              count={224}
              variant="pink"
              title="Minggu ini"
            />
        </div>
        <div className="col-span-1">
            <TransactionCard
              count={224}
              variant="purple"
              title="Tahun ini"
            />
        </div>
			</div>

      {/* card transaksi keseluruhan */}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
        <div className="col-span-1">
            <TransactionSummary
              count={2451}
              variant="total"
            />
          </div>
          <div className="col-span-1">
              <TransactionSummary
                count={12}
                variant="today"
              />
          </div>
          <div className="col-span-1">
              <TransactionSummary
                count={2416}
                variant="success"
              />
          </div>
          <div className="col-span-1">
              <TransactionSummary
                count={35}
                variant="failed"
              />
          </div>
      </div>

      {/* transaksi terbaru */}
      <div className='mt-16'>
        <h1 className="font-medium text-heading2 text-dark-2 my-4">Transaksi Terbaru</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {recentTransactions.map((transaction, index) => (
            <div key={index} className="col-span-1">
              <NewestCard
                avatar={transaction.avatar}
                variant={transaction.aksi} // variant disesuaikan dengan detail dari data
                name={transaction.name}
                id={transaction.id}
                detail={transaction.aksi}
                count={transaction.nominal}
                date={transaction.tanggal}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Daftar Transaksi*/}
      <div className="mt-16">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-heading2 text-dark-2 my-4">Daftar Transaksi</h1>
          <Link to="/dashboard/transaction/list" className="flex-row mx-24 text-success">
            <p>Lihat Semua &#10095;</p>
          </Link>
        </div>
      </div>
      
      {/* Table of top 4 transactions */}
      <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ID Pasien</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Pukul</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nominal</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {topTransactions.map((transaction, index) => (
              <tr key={index} className="">
                <td className="flex flex-row items-center gap-x-4 text-left px-6 py-4 whitespace-nowrap text-body1 text-dark-2 font-normal">
                  <img src={`../../../public/Dashboard/${transaction.avatar}`} alt="" className="h-12 aspect-square rounded-full" />
                  {transaction.name}
                </td>
                <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.id}</td>
                <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.tanggal}</td>
                <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.pukul}</td>
                <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.nominal}</td>
                <td className="px-6 py-4 whitespace-nowrap rounded-full">
                  <div className={`text-center px-1 py-3 whitespace-nowrap text-sm rounded-xl text-white uppercase ${transaction.aksi === 'sukses' ? 'bg-success' : 'bg-error'}`}>
                    {transaction.aksi}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
