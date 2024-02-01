import Nick_work from '../../../../assets/projectImages/AsteroidGame.png'


const WorkHistory = () => {
  return (
    <div className="bg-teal-700 m-16 p-16 max-h-64 rounded-3xl flex items-center justify-between">
    <div className="">
    
      <img className="h-96" src={Nick_work} alt="Nick" />
    </div>
    <div className="flex flex-col">
      <div className="text-2xl font-bold">work history</div>
      <div className="text-lg">I'm an aspiring software engineer with a passion for mountains</div>
    </div>
  </div>
  )
};

export default WorkHistory
