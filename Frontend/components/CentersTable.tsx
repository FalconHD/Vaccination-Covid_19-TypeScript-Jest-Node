import React from "react";

type ICenter = {
  id: string;
  createdAt: string;
  name: string;
  region: string;
  users: string[];
  admins: string[];
};

const CenterPopup = ({
  id,
  name,
  users,
  createdAt,
  setOpenPopup,
  city
}: {
  id: string;
  name: string;
  users: any;
  createdAt: string;
  setOpenPopup: any;
  city: string;
}) => {


  return (
    <div onClick={()=>setOpenPopup(false)} className="w-full h-screen fixed top-0 left-0 z-20 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="flex flex-col items-center">
          <span className="font-bold text-3xl">Center: {name} </span>
          <span className="text-xl">Users</span>
          <div className="flex flex-col items-center">
            {users.map((user:any) => (
              <span key={user.id} className="text-sm">
                {user.name}
              </span>
            ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export const CentersTable = ({ centers }: { centers: ICenter[] }) => {

  const [centerPopup, setCenterPopup] = React.useState<ICenter | null>(null);
  const [openPopup , setOpenPopup] = React.useState<boolean>(false);

  const handleClick = (center: ICenter) => {
    setCenterPopup(center);
    setOpenPopup(true);
  };


  return (
    <div className="w-full p-5 overflow-x-auto">
      {
        openPopup && centerPopup && <CenterPopup setOpenPopup={setOpenPopup} {...centerPopup}  />
      }
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Users</th>
            <th>created at</th>
            <th>city</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {centers.map(({ id, name, users, createdAt , city }, index) => (
            <tr key={index}>
              <td> {index + 1} </td>
              <td> {name.toUpperCase()} </td>
              <td> {users.length} </td>
              <td> {city} </td>
              <td> {createdAt} </td>
              <td>
                <button
                  onClick={() => handleClick(centers[index])}
                className="btn btn-primary">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
