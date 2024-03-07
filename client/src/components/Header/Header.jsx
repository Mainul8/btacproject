import React,{useState,useEffect,useRef} from 'react'
import Taxi from "../../assets/taxi.jpg"
// import Logo from "../../assets/btac.png"
// import Down from "../../assets/down.png"
import { GrLanguage } from "react-icons/gr";
import Logo_w from "../../assets/b-logo.png"
const links = [
  { name: 'Ride', href: '#' },
  { name: 'Drivers', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '2' },
  { name: 'Drivers', value: '100+' },
  { name: 'Bookings', value: '500+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Ride', value: 'Unlimited' },
]

const lang = [
  	
{name: "Assamese"},
{name: "Bengali"},
{name: "Bodo"},
{name: "Dogri"},
{name: "English"},
{name: "Gujarati"},
{name: "Hindi"},
{name: "Kannada"},
{name: "Kashmiri"},
{name: "Konkani"},
{name: "Maithili"},
{name: "Malayalam"},
{name: "Marathi"},
{name: "Meitei"},
{name: "Nepali"},
{name: "Odia"},
{name: "Punjabi"},
{name: "Sanskrit"},
{name: "Santali"},
{name: "Sindhi"},
{name: "Tamil"},
{name: "Telugu"},
{name: "Urdu"},

]

const Header = ()=> {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef();

  useEffect(()=>{
    const handler = (e)=>{
      if(!langRef.current.contains(e.target)){
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown",handler);

    return()=>{
      document.removeEventListener("mousedown",handler);
    }
  });

  
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-28 sm:py-32">
      <img
        src={Taxi}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className='fixed top-0 w-full h-24 bg-[#ffffff14] backdrop-blur-lg '>
        <div className='grid grid-cols-8 gap-2'>
        <button className='mx-4 rounded-lg'>
          <img src={Logo_w} className='w-28 rounded-lg '/>
        </button>
        {/* <select id="b-tac" class="mx-12 w-24 h-12 my-8 rounded-lg text-md bg-transparent border-none ">
        <option className='disabled'>Mobility</option>
        <option>City Rides</option>
        <option>Courier Delivery</option>
        <option>City to City</option>
        </select> */}
        <div className="mx-12 w-28 h-12 my-7 rounded-lg text-white text-lg bg-transparent border-none ">
        <select
          value=""
          onChange={(e) => {
            setSelectedOption(e.target.value);
            
          }}
          className={`relative w-32 appearance-none rounded bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary ${
            isOptionSelected ? ' text-black dark:text-white' : ''
          }`}
        >
          <option value="" disabled className="text-body text-black">
            Mobility
          </option>
          <option value="City Rides" className="text-body text-black">
          City Rides
          </option>
          <option value="Courier Delivery" className="text-body text-black">
          Courier Delivery
          </option>
          <option value="City to City" className="text-body text-black">
          City to City
          </option>
          
        </select>
      </div>
      <div className=" w-28 h-12 my-7 rounded-lg text-lg bg-transparent text-white border-none ">
        <select
          value=""
          onChange={(e) => {
            setSelectedOption(e.target.value);
            
          }}
          className={`relative w-32 appearance-none rounded bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary ${
            isOptionSelected ? 'text-black ' : ''
          }`}
        >
          <option value="" disabled className="text-body text-black dark:text-bodydark">
            Services
          </option>
          <option value="Taxi Riding" className="text-body text-black dark:text-bodydark">
          Taxi Riding
          </option>
          <option value="Bike" className="text-body text-black dark:text-bodydark">
          Bike Riding
          </option>
          <option value="Guide" className="text-body text-black dark:text-bodydark">
          Travel Guide
          </option>
          
        </select>
      </div>
      <div className="-ml-12 w-28 h-12 my-7 rounded-lg text-lg bg-transparent border-none ">
        <select
          value=""
          onChange={(e) => {
            setSelectedOption(e.target.value);
            
          }}
          className={`relative w-32 appearance-none rounded text-white bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary ${
            isOptionSelected ? 'text-black  dark:text-white' : ''
          }`}
        >
          <option value="" disabled className="text-body text-black dark:text-bodydark">
            About Us
          </option>
          <option value="Taxi Riding" className="text-body text-black dark:text-bodydark">
          Developers
          </option>
          <option value="Bike" className="text-body text-black dark:text-bodydark">
          Benefits
          </option>
          <option value="Guide" className="text-body text-black dark:text-bodydark">
          Maps
          </option>
          
        </select>
      </div>
        <div className='grid grid-cols-3 gap-x-32 pl-64'>
        <button className='w-28 h-12 bg-yellowColor my-8 rounded-lg  '>Book a Ride</button>
        <button className='w-20 h-12 bg-yellowColor mx-8 my-8 rounded-lg  '>Log In</button>
        <div ref={langRef} >
              <button 
                onClick={()=>{setLangOpen(!langOpen)}}
                className="mx-4 my-8"
              >
                <GrLanguage className='h-10 w-20'/>
              </button>
        {langOpen && (
          
        <div className='absolute bg-white w-32  rounded  overflow-y-scroll  text-black'>
            <select
            onChange={(e) => {
              setSelectedOption(e.target.value);
              
            }}
            className=' w-32 appearance-none rounded text-black bg-transparent px-5 outline-none transition focus:border-primary active:border-primary'
          >
            <option value="" className=''>Language</option>
            {lang.map((lg,index) => (
            <option key={index} value={lg.name}>{lg.name}</option>
            ))}
            </select>
          </div>
        )}
        </div>
        </div>
      </div>
      </div> 
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
          <p className="mt-6 text-xl leading-8 text-white">
          b-TAC: Your Journey, Our Priority – Riding with Excellence in North Bengal!
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-32">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-5 text-greenColor">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-xl leading-7">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


export default Header