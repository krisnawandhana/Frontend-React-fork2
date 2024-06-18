import React from 'react';

const MemberList = ({ members }) => {
    return (
        <div className="mb-5 px-5">
            <ul>
                {members.map((member, index) => (
                    <div key={index}>
                        <li className="flex items-center my-3">
                            <img src={`/Forum/man1.svg`} alt={member} className="h-8 w-8 rounded-full mr-4" />
                            <div>
                                <span className="text-sm font-medium">{member}</span>
                                <p className="text-xs text-gray-500 mt-1">Last seen 12 minutes ago</p>
                            </div>
                        </li>
                        <hr />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default MemberList;
