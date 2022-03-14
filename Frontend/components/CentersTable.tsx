import React from "react";

type ICenter = {
  id: string;
  createdAt: string;
  name: string;
  region: string;
  users: string[];
  admins: string[];
};

export const CentersTable = ({ centers }: { centers: ICenter[] }) => {
  return (
    <div className="w-full p-5 overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Users</th>
            <th>created at</th>
          </tr>
        </thead>
        <tbody>
          {centers.map(({ id, name, users, createdAt }, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{name.toUpperCase()}</td>
              <td>{users.length}</td>
              <td> {createdAt} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
