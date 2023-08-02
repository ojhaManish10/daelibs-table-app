
// const List = () => {
  // const [data, setData] = useState([]);

  // // Fetch the API data
  // useEffect(() => {
  //   const API_TOKEN = 'figd_v0bRHzpZAGdkXgBjy9XtfdXGXCA9GAb58ioxf7kP';
    
  //   fetch('https://api.figma.com/v1/files/PBd8Pk7Bov93AuakAEzyFf', {
  //     headers: {
  //       'X-Figma-Token': `${API_TOKEN}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  

import React from 'react';
import './List.css';

const List = ({ data }) => {
  return (
    <div className="list-container">
      <br/><br/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Target Score</th>
            <th>Actual Score</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.target}</td>
              <td className={item.actual < item.target ? 'fail' : 'success'}>
                {item.actual}
              </td>
              <td>{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;