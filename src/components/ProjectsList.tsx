import Project from "./Project";

const ProjectsList = () => {
  return (
    <section className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
      <Project />
      <Project />
      <Project />
      <Project />
    </section>
  );
};

export default ProjectsList;
