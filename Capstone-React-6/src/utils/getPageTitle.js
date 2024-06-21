const getPageTitle = (path) => {
    switch (true) {
        case path === '/dashboard':
            return 'Overview';
        case path === '/dashboard/profile':
            return 'Profile dan Rating Psikiater';
        case path === '/dashboard/editprofile':
            return 'Edit Profile';
        case path.startsWith('/dashboard/managecontent'):
            return 'Kelola Konten Meditasi';
        case path === '/dashboard/managepatient':
            return 'Kelola Pasien';
        case path === '/dashboard/managepatient/detail':
            return 'Daftar Permintaan Janji Temu';
        case path === '/dashboard/managepatient/chat':
                return 'Pesan';
        case path === '/dashboard/transaction':
            return 'Transaksi';
        case path === '/dashboard/transaction/list':
            return 'Daftar Transaksi';
        case path === '/dashboard/manageforum':
            return 'Kelola Forum';
        default:
            return 'Overview';
    }
};

export default getPageTitle;
