import React from "react";
import Lottie from "react-lottie";

type ICenter = {
  id: string;
  createdAt: string;
  name: string;
  region: string;
  users: string[];
  admins: string[];
  city: string;
};

const CenterPopup = ({
  id,
  name,
  users,
  createdAt,
  setOpenPopup,
  city,
}: {
  id: string;
  name: string;
  users: any;
  createdAt: string;
  setOpenPopup: any;
  city: string;
}) => {
  return (
    <div
      onClick={() => setOpenPopup(false)}
      className="w-full h-screen fixed top-0 left-0 z-20 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="flex flex-col items-center">
          <span className="font-bold text-3xl">Center: {name} </span>
          <Lottie
            options={{
              animationData: require("../public/center.json"),
            }}
            height={300}
            width={300}
            // @ts-ignore
            loop={false}
            autoplay
          />
          <div className="flex flex-col items-center">
          {users.length > 0 ? (<span className="text-xl">Users</span>) : (<div className="flex flex-col items-center">No users</div>)}
            {users.map((user: any) => (
              <div
                key={user.id}
                className="p-3 min-w-[300px] border-l-8 border-blue-400 mt-3 rounded-md shadow-md flex justify-start gap-4"
              >
                <Lottie
                  options={{
                    animationData: require("../public/user-icon.json"),
                    loop: false,
                    autoplay: true,
                  }}
                  height={40}
                  width={40}
                />
                <div>
                  <span className="font-bold text-xl">{user.name}</span>
                  {user.vaccinations.map((vaccin: any, i: number) => (
                    <div key={i} className="flex flex-col gap-2">
                      <span className=" text-xl">
                        shot: {vaccin.shot}
                      <span className="ml-2 text-sm">{vaccin.datetime.split('T')[0]}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CentersTable = ({ centers }: { centers: ICenter[] }) => {
  const [centerPopup, setCenterPopup] = React.useState<ICenter | null>(null);
  const [openPopup, setOpenPopup] = React.useState<boolean>(false);

  const handleClick = (center: ICenter) => {
    setCenterPopup(center);
    setOpenPopup(true);
  };

  return (
    <div className="w-full p-5 overflow-x-auto">
      {openPopup && centerPopup && (
        <CenterPopup setOpenPopup={setOpenPopup} {...centerPopup} />
      )}
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
          {centers.map(({ id, name, users, createdAt, city }, index) => (
            <tr key={index}>
              <td> {index + 1} </td>
              <td> {name.toUpperCase()} </td>
              <td> {users.length} </td>
              <td> {city} </td>
              <td> {createdAt} </td>
              <td>
                <button
                  onClick={() => handleClick(centers[index])}
                  className="btn btn-primary"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
