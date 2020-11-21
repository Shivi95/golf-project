import React, {useState, useEffect, useContext} from 'react';
import Header from './components/Header';
import OttGraph from './components/OttGraph';
import LatestActivity from './components/LatestActivity';
import FooterGraph from './components/FooterGraph';
import Section from './components/Section';
import ProgressLoading from './components/ProgressLoading';

// Data Provider
import { StateContext } from './provider/StateProvider';


function App() {
  // grtting data using Context Api
  const [players] = useContext(StateContext);
  // loading state 
  const [isLoading, setLoading] = useState(false);

  // progress loading animation 
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run for 2 seconds!')
      setLoading(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <div>
      {!isLoading ? <ProgressLoading /> 
      :
    <div className="card__container">
      {players.map(player => {
        return (
          <div className="profile__card">
            <Header name={player.PlayerName} 
              location={player.HomeCourse} 
              quality = {player.Quality}
              handicap = {player.Handicap}
              sgTotal = {player.SGTotal}
            />
            <Section />
            {player.SGCategories.map(sg => {
              return (
                <OttGraph category={sg.SG_Category_Detail} 
                  value = {sg[["avg-SG-per-round"]]}
                  arrayValue = {sg}
                />
              )            
            })}
            <Section />
            <LatestActivity />
            <Section />
            <FooterGraph />
          </div>   
        )
      })}
      
    </div>
    }
    </div>
      
  );
}

export default App;
