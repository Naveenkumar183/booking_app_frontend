import {useState} from 'react'
import Navbar from "../../components/Navbar"
import Header from "../../components/Header"
import './List.css'
import {format} from "date-fns"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { useLocation} from "react-router-dom";
import Searchitem from '../../components/Searchitem'
function List() {
  const location=useLocation();
   const[openDate,setOpenDate]=new useState(false);
  const [destination,setDestination]=useState(location.state.destination)
  const[state,setState]=useState(location.state.state);
  const [option, setOption] = useState(location.state.boxItem);
  const nav=()=>{
    setOpenDate(!openDate);
  }
  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lstext">Search</h1>
            <div className="lsitem1">
              <label>Destination</label>
              <input placeholder={destination} type="text"/>
            </div>
            <div className="lsitem1">
              <label>Check-in-Date</label>
              <span onClick={nav}  >{`${
            format(state[0].startDate,"MM/dd/yyyy")
          } to ${
            format(state[0].endDate,"MM/dd/yyyy")} `}</span>
            {openDate &&<DateRange 
                
               onChange={item => setState([item.selection])}
                
                  ranges={state}
                  minDate={new Date()}
       />}
            </div>

            <div className="lsitem1">
              <lable>options</lable>
              <div className="lsitem2">
              <div className="optionitem">
                <span className="lsoptiontext">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsoptioninput" />
              </div>

              <div className="optionitem">
                <span className="lsoptiontext">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsoptioninput"  />
              </div>

              <div className="optionitem">
                <span className="lsoptiontext">
                  adult 
                </span>
                <input type="number" min={1} className="lsoptioninput" placeholder={option.adult}/>
              </div>

              <div className="optionitem">
                <span className="lsoptiontext">
                  children
                </span>
                <input type="number" min={0} className="lsoptioninput" placeholder={option.children} />
              </div>

              <div className="optionitem">
                <span className="lsoptiontext">
                  room
                </span>
                <input type="number" min={1} className="lsoptioninput"  placeholder={option.room}/>
              </div>
            </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listSearchitem">
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List