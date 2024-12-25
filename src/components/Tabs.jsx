import '../styles/tabs.css'

const Tabs = () => {
  return (
      <ul className="primary-navigation underline-indicators flex">
        <li aria-selected="true" className="active pb-4 border-0 cursor-pointer border-b-[0.2rem] border-b-transparent border-solid hover:border-opacity-100"><a className="font-sansCond uppercase text-white tracking-wide"><span>00</span>Home</a></li>
        <li className="pb-4 border-0 cursor-pointer border-b-[0.2rem] border-b-transparent border-solid hover:border-opacity-100"><a className="font-sansCond uppercase text-white tracking-wide" ><span>01</span>Destination</a></li>
        <li className="pb-4 border-0 cursor-pointer border-b-[0.2rem] border-b-transparent border-solid hover:border-opacity-100"><a className="font-sansCond uppercase text-white tracking-wide"><span>02</span>Crew</a></li>
        <li className="pb-4 border-0 cursor-pointer border-b-[0.2rem] border-b-transparent border-solid hover:border-opacity-100"><a className="font-sansCond uppercase text-white tracking-wide" ><span>03</span>Technology</a></li>
        </ul>
  )
}

export default Tabs