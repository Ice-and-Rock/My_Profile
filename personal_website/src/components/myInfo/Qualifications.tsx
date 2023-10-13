import Nick_work from '../../assets/WhatsApp_Image_2023-04-03_at_11.47.24-removebg-preview.png'

const Qualifications = () => {
  return (
    <div className="bg-teal-700 m-16 p-16 max-h-64 rounded-3xl flex items-center justify-between">
    <div className="flex flex-col">
      <div className="text-2xl font-bold">Quals</div>
      <div className="text-lg">I'm an aspiring software engineer with a passion for mountains</div>
    </div>
    <div className="">
    
      <img className="h-96" src={Nick_work} alt="Nick's Image" />
    </div>
  </div>
  )
};

export default Qualifications
