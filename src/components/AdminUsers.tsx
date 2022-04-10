import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminFetchServerUsers } from "../redux/adminPrivileges/adminReducers";

export const AdminUsers = () => {
  const dispatch = useDispatch();
  const serverUsers = useSelector((state: any) =>
    state.adminReducers.serverUsers.sort((a: any, b: any) =>
      a.createdAt > b.createdAt ? -1 : 1
    )
  );

  useEffect(() => {
    dispatch(adminFetchServerUsers());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="users-section">
      <h2>ALL SERVER USERS</h2>
      <p>{serverUsers.length} Users Registered</p>
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-0lax hide-on-md"> Index</th>
            <th className="tg-0lax hide-on-sm"> ID</th>
            <th className="tg-0lax hide-on-md">Full Name</th>
            <th className="tg-0lax">Email</th>
            <th className="tg-0lax hide-on-md">Phone</th>
            <th className="tg-0lax hide-on-sm">Privilege</th>
            <th className="tg-0lax">Password</th>
            <th className="tg-0lax hide-on-md">Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {serverUsers &&
            serverUsers.map((user: any, ix: number) => (
              <tr key={ix}>
                <td className="tg-0lax hide-on-md">{ix + 1}</td>
                <td className="tg-0lax hide-on-sm ">{user.id}</td>
                <td className="tg-0lax hide-on-md">{user.fullName}</td>
                <td className="tg-0lax">{user.email}</td>
                <td className="tg-0lax hide-on-md">{user.phone}</td>
                <td className="tg-0lax hide-on-sm">{user.privilegeLevel}</td>
                <td className="tg-0lax">{user.password}</td>
                <td className="tg-0lax hide-on-md">
                  {user.createdAt ? user.createdAt : "ADMIN USER CODE CREATED"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
