import React from 'react';

const MemberList = ({ members = [] }) => {
    return (
        <div className="mb-5 px-5">
            <ul>
                {members.map((member) => (
                    <li key={member.id} className="flex items-center my-3">
                        <img src={`/Forum/man${member.id}.svg`} alt={member.username} className="h-8 w-8 rounded-full mr-4" />
                        <div>
                            <span className="text-sm font-medium">{member.username}</span>
                            <p className="text-xs text-gray-500 mt-1">ID: {member.id}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MemberList;

