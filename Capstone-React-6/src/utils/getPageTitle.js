const getPageTitle = (path) => {
    switch (path) {
        case '/dashboard':
            return 'Overview';
        case '/dashboard/profile':
            return 'Profile dan Rating Psikiater';
        case '/dashboard/editprofile':
            return 'Edit Profile';
        case '/dashboard/managecontent':
            return 'Kelola Konten Meditasi';
        case '/dashboard/managepatient':
            return 'Kelola Pasien';
        case '/dashboard/managepatient/detail':
            return 'Daftar Permintaan Janji Temu';
        case '/dashboard/transaction':
            return 'Transaksi';
        case '/dashboard/transaction/list':
            return 'Daftar Transaksi';
        case '/dashboard/manageforum':
            return 'Kelola Forum';
        // Tambahkan case lain sesuai dengan rute di aplikasi Anda
        default:
            return 'Overview';
    }
};

export default getPageTitle;
