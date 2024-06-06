import DaftarPasienList from "../../components/ManagePatient/DaftarPasien/DaftarPasienList"
import DateCard from "../../components/ManagePatient/DateCard"
import JanjiTemuCard from "../../components/ManagePatient/JanjiTemu/JanjiTemuCard"
import JanjiTemuChart from "../../components/ManagePatient/JanjiTemu/JanjiTemuChart"
import OverviewTransactionCard from "../../components/ManagePatient/OverviewTransactionCard"
import PermintaanJanjiTemuList from "../../components/ManagePatient/PermintaanJanjiTemu/PermintaanJanjiTemuList"

export default function ManagePatient() {
	return (
		<div className="flex flex-col gap-y-6">
			<h1 className="mb-6 text-4xl text-dark-2 font-medium">Kelola Pasien</h1>
			<div className="grid xl:grid-cols-9 grid-cols-1 xl:gap-6 gap-y-6">
				<div className="col-span-2 flex flex-col gap-y-3">
					<DateCard />
					<JanjiTemuCard />
				</div>
				<div className="xl:col-span-4 col-span-2 flex flex-col gap-y-3">
					<div className="grid md:grid-cols-2 grid-cols-1 gap-3">
						<div className="col-span-1">
							<OverviewTransactionCard
								count={35}
								variant="blue"
								title="Permintaan"
							/>
						</div>
						<div className="col-span-1">
							<OverviewTransactionCard
								count={14}
								variant="red"
								title="Pasien Mendatang"
							/>
						</div>
					</div>
					<JanjiTemuChart accepted={75.58} rejected={10.47} waiting={13.95} />
				</div>
				<div className="xl:col-span-3 col-span-2">
					<DaftarPasienList />
				</div>
			</div>
			<PermintaanJanjiTemuList />
		</div>
	)
}
