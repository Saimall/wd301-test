
import { useProjectsState } from "../../context/projects/context";
export default function ProjectListItems() {

  let state: any = useProjectsState();

  const { projects, isLoading, isError, errorMessage } = state
  console.log(projects);

  if (projects.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  
  //show the error message.
  if (isError) {
    return <span className="block p-6 bg-red border border-gray-200 rounded-lg">{errorMessage}</span>;
  }

  return (
    <>

      {projects.map((project: any) => (
        <div key={project.id} className="block p-4 bg-blue-100 border border-gray-300 rounded-xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-medium text-black dark:text-white">{project.name}</h5>
        </div>
      ))} 

    </>
  );
}