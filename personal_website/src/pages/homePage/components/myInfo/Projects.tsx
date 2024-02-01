import Nick_work from "../../../../assets/projectImages/TradesMin.png";

const Projects = () => {
  return (
    <div className="flex bg-teal-900 text-white my-16 p-16 max-h-64 items-center justify-between">
      <div className="">
        <img className="" src={Nick_work} alt="Nick" />
      </div>
      <div className="flex flex-col">
      <div className="text-2xl font-bold m-3">Projects</div>
      <div className="text-sm m-3 text-justify">
          I'm an aspiring software engineer with a passion for mountains
        </div>
      </div>
    </div>
  );
};

export default Projects;
