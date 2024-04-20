<<<<<<< Updated upstream
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMembersState } from "../../context/members/context";
import { deleteMember } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";

export default function MemberListItems() {
  const state: any = useMembersState();
  const dispatchMembers = useMembersDispatch();
  const Delete = (id: number) => {
    deleteMember(dispatchMembers, id);
  };
  const { members, isLoading, isError, errorMessage } = state;

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
>>>>>>> Stashed changes
/* eslint-disable no-prototype-builtins */
/* eslint-disable prefer-const */
=======
>>>>>>> Stashed changes
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

<<<<<<< Updated upstream
// First, I'll import the useMembersState custom hook to access projects state.

import { deleteMember } from "../../context/members/actions";
=======
<<<<<<< Updated upstream
import { useEffect } from "react";
import { deleteMember, fetchMembers } from "../../context/members/actions";
>>>>>>> Stashed changes
import { useMembersDispatch, useMembersState } from "../../context/members/context";


export default function MemberListItems() {
  
  const dispatch = useMembersDispatch();
  // I'll define a new constant called `state`, to call the useMembersState() hook, 
  // and get access to members state.
  let state: any = useMembersState();
  // Next, I'll destructure the state object to gain access to projects, 
  // isLoading, isError and errorMessage property.
<<<<<<< Updated upstream
  const { members, isLoading, isError, errorMessage } = state;
  console.log(members);
=======
  
  let { members, isLoading, isError, errorMessage } = state;
=======
import { Link } from "react-router-dom";
import { useMembersState } from "../../context/members/context";
>>>>>>> Stashed changes

export default function ProjectListItems() {
  const state : any = useMembersState();
  const { members, isLoading, isError, errorMessage } = state;
  console.log(members);
>>>>>>> Stashed changes

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
<<<<<<< Updated upstream
  
// Next, if there is an error, I'll show the error message.
=======

>>>>>>> Stashed changes
>>>>>>> Stashed changes
  if (isError) {
    return <span>{errorMessage}</span>;
  }

<<<<<<< Updated upstream

  return (
    <>
      {members.map((member: any) => (
        <div key={member.id} className="block p-6 bg-blue-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 member">
          <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">Name: {member.name}</h5>
          <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">Email: {member.email}</h5>
          <button
            type="button"
            onClick={() => Delete(member.id)}
            className="px-4 py-2 text-sm font-medium text-white bg-red-700 rounded-md hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Delete
          </button>
        </div>
      ))}
=======
  return (
    <>
<<<<<<< Updated upstream
      {members?.map((member: any) => {
=======
<<<<<<< Updated upstream
        
      {members.map((member: any) => {
>>>>>>> Stashed changes

        if(member.hasOwnProperty('user')){
          member = member.user
        }

        return (
          <div key={member.id} className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.email}</h5>
            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.password}</h5>
            
            <button id = "delete-member" onClick={() => deleteMember(dispatch,member.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
          </div>
        );
      })}        
=======
      {members.map((member: any) => (
        <Link
          key={member.id}
          to={`${member.id}`}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {member.name}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {member.email}
          </h5>
        </Link>
      ))}
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    </>
  );
}