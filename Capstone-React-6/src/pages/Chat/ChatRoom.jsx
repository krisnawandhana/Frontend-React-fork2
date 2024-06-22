import React, { useState } from 'react';
import PatientChat from '../../components/Chat/PatientChat';
import Roomchat from '../../components/Chat/Roomchat';

const ChatRoom = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="mt-5 flex gap-3">
      <div className="w-[40%]">
        <PatientChat onSelectPatient={handleSelectPatient} />
      </div>
      <div className="w-[60%]">
        {selectedPatient ? (
          <Roomchat selectedPatient={selectedPatient} />
        ) : (
          <div className="flex justify-center items-center h-96">
            <p className="text-gray-500">Pilih pasien untuk melihat percakapan.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatRoom;