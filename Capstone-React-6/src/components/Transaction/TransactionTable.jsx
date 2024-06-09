import React, { useState } from 'react';
import transactionsData from './patient.json';

const TransactionTable = ({ searchTerm }) => {
  const [transactions, setTransactions] = useState(transactionsData);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const filteredTransactions = transactions.filter((transaction) => {
    const term = searchTerm.toLowerCase();
    return (
      transaction.name?.toLowerCase().includes(term) ||
      transaction.id?.toLowerCase().includes(term) ||
      transaction.tanggal?.toLowerCase().includes(term) ||
      transaction.aksi?.toLowerCase().includes(term) ||
      transaction.pukul?.toLowerCase().includes(term) ||
      transaction.nominal?.toLowerCase().includes(term)
    );
  });

  const handleDeleteClick = (transaction) => {
    setSelectedTransaction(transaction);
    document.getElementById('delete_modal').showModal();
  };

  const handleConfirmDelete = () => {
    setTransactions(transactions.filter(t => t.id !== selectedTransaction.id));
    setSelectedTransaction(null);
    document.getElementById('delete_modal').close();
    setShowSuccessModal(true);
  };

  const handleCancelDelete = () => {
    setSelectedTransaction(null);
    document.getElementById('delete_modal').close();
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ID Pasien</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Pukul</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nominal</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Hapus</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredTransactions.map((transaction, index) => (
            <tr key={index} className="">
              <td className="flex flex-row items-center gap-x-4 text-left px-6 py-4 whitespace-nowrap text-body1 text-dark-2 font-normal">
                <img src="/avatar/avatar.jpg" alt="" className="h-12 aspect-square rounded-full" />
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
              <td className="flex items-center justify-center px-6 py-4" onClick={() => handleDeleteClick(transaction)}> 
                <button className="flex items-center justify-center p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="hapus">
                      <path id="Vector 224" d="M4 7H20" stroke="#8F90A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path id="Rectangle 118" d="M6 7V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V7" stroke="#8F90A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path id="Rectangle 117" d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#8F90A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Modal */}
      <dialog id="delete_modal" className="modal ">
        <div className="modal-box bg-white text-center w-6/12 max-w-5xl ">
          <h3 className="font-bold text-heading2 text-dark-1">Hapus Transaksi ?</h3>
          <p className="py-8 text-heading3">Apakah Anda yakin ingin menghapus transaksi {selectedTransaction ? selectedTransaction.id : ''}?</p>
          <p className="text-dark-3 pb-8 mx-8 text-body1  ">Harap diperhatikan bahwa setelah transaksi ini dihapus, Anda tidak akan  dapat 
          mengembalikannya lagi. </p>
          <div className="flex justify-center mt-4 gap-x-10">
            <button className="btn rounded-full text-primary outline outline-2 outline-primary" onClick={handleCancelDelete}>Cancel</button>
            <button className="btn rounded-full text-white bg-primary " onClick={handleConfirmDelete}>Delete</button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop w-full h-full">
          <button className=""></button>
        </form>
      </dialog>

      {/* Success Modal */}
      <dialog id="success_modal" className="modal" open={showSuccessModal}>
        <div className="modal-box bg-white text-center">
          <img src="/Transaction/Check.png" alt="" className="items-center mx-auto mb-4" />
          <h3 className="font-bold text-lg">Sukses</h3>
          <p className="py-4">Transaksi telah dihapus.</p>
        </div>
        <form method="dialog" className="modal-backdrop" onClick={handleCloseSuccessModal}>
          <button className="">close</button>
        </form>
      </dialog>
    </div>
  );
};

export default TransactionTable;
