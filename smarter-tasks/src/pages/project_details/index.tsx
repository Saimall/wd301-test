import React, { Suspense } from "react";
import { TasksProvider } from "../../context/task/context";
import ProjectDetails from "./ProjectDetails";

import { Outlet } from "react-router-dom";
import { CommentProvider } from "../../context/comment/context";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <TasksProvider>
      <CommentProvider>
          <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
            <ProjectDetails/>
          </Suspense>
        <Outlet />
      </CommentProvider>
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;