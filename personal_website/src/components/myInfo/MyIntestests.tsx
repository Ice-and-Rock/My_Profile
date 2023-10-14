import work from '../../assets/b&w_Nick.png'
import Brevent from '../../assets/Brevent.jpeg'
import Courtes from '../../assets/Courtes.jpeg'
import Belay from '../../assets/Belay.jpeg'

const MyIntestests = () => {
  return (
   
      <div className="flex bg-teal-700 m-16 p-16 max-h-64 rounded-3xl flex items-center justify-between">
        <div className="grid grid-cols-2 gap-0">
          <img className="w-24 rounded-lg transition duration-300 ease-in-out hover:scale-110" src={Brevent} alt="brevent" />
          <img className="w-24 rounded-lg transition duration-300 ease-in-out hover:scale-110" src={Courtes} alt="courtes" />
          <img className="w-24 rounded-lg transition duration-300 ease-in-out hover:scale-110" src={Belay} alt="belay" />
          <img className="w-24 rounded-lg transition duration-300 ease-in-out hover:scale-110" src={work} alt="Nick" />
        </div>
        <div className="flex flex-col">
          <div className="text-2xl font-bold">my interests</div>
          <div className="text-lg">I've been a climber and skier for 15 years. </div>
        </div>
      </div>
    
  )
};

export default MyIntestests
