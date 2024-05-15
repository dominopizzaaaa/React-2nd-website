import React from "react";

export default function Achievements() {
  const [activeCategory, setActiveCategory] = React.useState('none');

  return (
      <div>
          <h2>Achievements</h2>
          <nav>
              <button onClick={() => setActiveCategory('university')}>University Achievements</button>
              <button onClick={() => setActiveCategory('education')}>Education Achievements</button>
              <button onClick={() => setActiveCategory('ns')}>NS Achievements</button>
              <button onClick={() => setActiveCategory('sports')}>Sporting Achievements</button>
          </nav>
          <div className="content">
              {activeCategory === 'university' && (
                  <ul>
                      <li>NUS Global Merit Scholar</li>
                      <li>NUS AY23/24 Sem 1 Dean's List</li>
                      <li>NUS AY24/25 Table Tennis Captain</li>
                      <li>Member of Eusoff Hackers</li>
                  </ul>
              )}
              {activeCategory === 'education' && (
                  <ul>
                      <li>Raffles Institution (2015 - 2020)</li>
                      <li>2 x FIRE award winner</li>
                      <li>Raffles Table Tennis Captain (2016, 2018)</li>
                      <li>A levels: 90/90 RP</li>
                      <li>Maris Stella High School (Primary) Vice Head Prefect (2014)</li>
                  </ul>
              )}
              {activeCategory === 'ns' && (
                  <ul>
                      <li>BMT Best in PT in Company</li>
                      <li>CSLC Best Detachment</li>
                      <li>OCS Sword of Merit (SOM)</li>
                      <li>NS Letter of Appreciation</li>
                      <li>Appointed NS Officer Commanding</li>
                      <li>Awarded CO coin</li>
                  </ul>
              )}
              {activeCategory === 'sports' && (
                  <ul>
                      <li>Part of the Singapore National Team</li>
                      <li>Asian Table Tennis Championships 2019</li>
                      <li>World University Games 2023</li>
                  </ul>
              )}
              {activeCategory === 'none' && <p>Select a category to view achievements.</p>}
          </div>
      </div>
  );
}