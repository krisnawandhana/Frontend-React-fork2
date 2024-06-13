import React from 'react';

const AddMusicForm = () => {
  return (
    <form action="#" className="space-y-4 flex flex-wrap justify-between bg-[#66BFA1] rounded-3xl p-4">
      <div className="flex flex-col w-1/3 items-center justify-center content-center">
        <div className="flex w-full aspect-square">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-[#66BFA1]">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#FAFAFA" fillOpacity="0.32"/>
                <g opacity="0.8">
                  <path d="M22.5 35L35 35M35 35L47.5 35M35 35V22.5M35 35L35 47.5" stroke="#FAFAFA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
              <p className="text-heading2 text-white text-center">Tambahkan Cover</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" name="gambar" accept="image/*"/>
          </label>
        </div>
      </div>

      <div className="flex flex-col w-2/3 space-y-4 bg-white p-2 rounded-xl">
        <div className="flex flex-col">
          <input type="file" id="mp3" name="mp3" accept="audio/mpeg" className="file-input file-input-bordered border-[#66BFA1] file-input-accent w-full file:bg-[#66BFA1] file:text-white" />
        </div>

        <div className="flex flex-col">
          <input type="text" id="judul" name="judul" className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Masukkan judul lagu"/>
        </div>

        <div className="flex flex-col">
          <input type="text" id="penyanyi" name="penyanyi" className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Masukkan nama penyanyi"/>
        </div>

        <button type="submit" className="inline-flex items-center px-4 py-2 bg-[#66BFA1] text-white rounded shadow hover:bg-[#49B08E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Unggah
        </button>
      </div>
    </form>
  );
};

export default AddMusicForm;
