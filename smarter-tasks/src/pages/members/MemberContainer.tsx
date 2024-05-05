import { useEffect } from "react";
import { useMembersDispatch } from "../../context/members/context";
import { fetchMembers } from "../../context/members/actions";
import { Outlet } from "react-router-dom";

const MemberContainer = () => {
  const memberDispatch = useMembersDispatch();
  useEffect(() => {
    fetchMembers(memberDispatch);
  }, [memberDispatch]);
  return <Outlet />;
};

export default MemberContainer;