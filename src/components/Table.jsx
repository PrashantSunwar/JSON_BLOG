import { useContext } from "react";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";

import DataContext from "../context/DataContext/DataContext";

function Table() {
  const { userData: users } = useContext(DataContext);

  return (
    <div className="w-full md:w-11/12 flex justify-center">
      <table className="w-full md:w-11/12 card">
        <thead className="text-2xl text-white text-center bg-[#222831]">
          <tr>
            <th className="py-4">Name</th>
            <th className="py-4">Company</th>
            <th className="py-4">Posts</th>
          </tr>
        </thead>
        <tbody className="text-xl border-2 text-center">
          {users.map((user) => {
            return (
              <tr key={user.userId} className="border-2 text-[#393E46]">
                <td className="pb-4 whitespace-nowrap">{user.name}</td>
                <td className="pb-4 whitespace-nowrap">{user.companyName}</td>
                <td className="pb-4 whitespace-nowrap">
                  <Link
                    to={`/posts/${user.userId}`}
                    className=" underline text-[#00ADB5]"
                  >
                    Posts
                    <BiLinkExternal className="inline ml-1" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
