import React from 'react'
import TransactionCard from "../../components/Transaction/TransactionCard";
import TransactionSummary from '../../components/Transaction/TransactionSummary';

export default function Transaction() {
  return (
    <div>
      <h1>Transaction</h1>
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
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 my-16">
        <h1 className="font-medium text-heading2 text-dark-2">Transaksi Terbaru</h1>
      </div>
    </div>
  )
}
