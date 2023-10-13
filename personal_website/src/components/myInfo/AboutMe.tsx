import Nick from '../../assets/b&w_Nick.png'

const AboutMe = () => {
  return (
    <div className="bg-teal-900 my-16 p-16 max-h-64 flex items-center justify-between">
      <div className="flex-1">
        <div className="text-2xl font-bold">hey, my name is Nick</div>
        <div className="text-lg">I'm an aspiring software engineer with a passion for mountains</div>
      </div>
      <div className="">
      
        <img className="h-96" src={Nick} alt="Nick's Image" />
      </div>
    </div>
  )
};

export default AboutMe
