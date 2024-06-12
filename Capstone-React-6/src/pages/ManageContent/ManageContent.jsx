import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MusikMeditasi from './Content/MusikMeditasi';
import ArtikelMeditasi from './Content/ArtikelMeditasi';
import CeritaInspiratif from './Content/CeritaInspiratif';

const ManageContent = () => {
    return (
        <div className="px-3 pt-4">
            <Routes>
                <Route path="musikmeditasi" element={<MusikMeditasi />} />
                <Route path="artikelmeditasi" element={<ArtikelMeditasi />} />
                <Route path="ceritainspiratif" element={<CeritaInspiratif />} />
                <Route path="*" element={<MusikMeditasi />} />
            </Routes>
        </div>
    );
};

export default ManageContent;
