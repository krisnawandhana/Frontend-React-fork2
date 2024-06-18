import React, { useState } from 'react'
import Forum from '../../components/ManageForum/Forums/Forum';
import DetailForum from '../../components/ManageForum/DetailForum/DetailForum';

const ManageForum = () => {
  const [selectedForumId, setSelectedForumId] = useState(null);

  return (
    <div className="mt-5 flex gap-3">
      <div className="w-[40%]">
        <Forum setSelectedForumId={setSelectedForumId} />
      </div>
      <div className="w-[60%]">
        <DetailForum selectedForumId={selectedForumId} />
      </div>
    </div>
  )
}

export default ManageForum;