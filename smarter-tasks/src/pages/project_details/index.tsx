import React, { Suspense } from "react";
import { TasksProvider } from "../../context/task/context";
const ProjectDetails = React.lazy(() => import('./ProjectDetails'));

import { Outlet } from "react-router-dom";
import { CommentProvider } from "../../context/comment/context";
import ErrorBoundary from "../../components/ErrorBoundary";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <TasksProvider>
      <CommentProvider>
        <ErrorBoundary>
          <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
            <ProjectDetails/>
          </Suspense>
        </ErrorBoundary>
        <Outlet />
      </CommentProvider>
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;