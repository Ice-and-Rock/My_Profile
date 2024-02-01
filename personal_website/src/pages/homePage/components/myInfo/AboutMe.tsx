import Nick from "../../../../assets/projectImages/AsteroidGame.png";

const AboutMe = () => {
  return (
    <div className="flex bg-teal-900 text-white my-16 p-16 max-h-64 flex items-center justify-between">
      <div className="">
        <div className="text-2xl font-bold m-3">Hey, my name is Nick</div>
        <div className="text-sm m-3 text-justify">
          Honest, hardworking and self motivated individual in pursuit of a new
          carrer in software engineering. With years of successful experience as
          a self employed electrician, managing large luxury chalet and
          commercial builds and renovations in the French Alps, I am now looking
          for a fresh start in full-stack web design and data engineering. Ready
          to put in the hard work to build on my experience and expertise.
        </div>
      </div>
      <div className="">
        <img className="" src={Nick} alt="nick" />
      </div>
    </div>
  );
};

export default AboutMe;
