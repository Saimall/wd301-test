/* eslint-disable @typescript-eslint/no-unused-vars */
import ErrorBoundary from "../../components/ErrorBoundary";
import NewMember from "./NewMember";
import React, { Suspense } from "react";
const MemberList  =  React.lazy(() => import("./MemberList"));

const Members = () => {
  const user = localStorage.getItem("userData")??'';
  const curr = JSON.parse(user);

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Members</h2>
        <div className="w-1/3 text-black shadow-lg container bordered text-m border-purple-400 rounded w-auto items-center justify-center bg-cyan-200 hover:bg-cyan-400">
          <h2 className="font-bold text-center">Current User Details</h2>

          <div className="container justify-center text-left">
            <span> <b>Name: </b>{curr.name}</span>
            <br/>
            <span> <b>Email: </b>{curr.email}</span>
          </div>
        </div>
        <NewMember />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <MemberList/>
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
export default Members;