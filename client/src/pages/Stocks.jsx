import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import Navbar from '../components/Navbar';





const Stocks = () => {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState('');
 



  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3001/api/stocks');
      setData(res.data);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredData = data.filter(coin => coin.name.toLowerCase().includes(filterText.toLowerCase()));



  // Memoize chart data to prevent unnecessary re-renders
  const getChartData = (chartData) => ({
    labels: chartData.map((_, i) => `T${i+1}`),
    datasets: [
      {
        label: 'Price',
        data: chartData,
        borderColor: '#4bc0c0',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        fill: true,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 0, 
        pointHoverRadius: 0,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: { 
      x: { 
        display: false,
        grid: {
          display: false
        }
      }, 
      y: { 
        display: true, 
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          callback: value => `₹${value}`
        } 
      } 
    },
    animation: {
      duration: 1000, 
      easing: 'easeOutQuart'
    },
    interaction: {
      intersect: false,
      mode: 'nearest'
    }
  };



  return (
    <><Navbar/>
    
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Crypto Screener</h1>

      <div className="flex justify-between mb-6">
        <InputText
          placeholder="Search..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-72"
        />
      </div>


  

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((coin, index) => (
          <Card key={coin.name} title={coin.name} className="shadow-md border border-gray-200">
            <p className="text-gray-600">Price: ₹{coin.Price}</p>
            <p className={coin.change >= 0 ? "text-green-600" : "text-red-500"}>
              Change: {coin.change}
            </p>
            <p className="text-gray-600">Volume: {coin.volume.toLocaleString()}</p>

            

            
            {/* <Chart
              type="line"
              data={{
                labels: coin.chartData.map((_, i) => `T${i+1}`),
                datasets: [
                  {
                    label:'Price',
                    data: coin.chartData,
                    borderColor: '#4bc0c0',
                    backgroundColor: '#dcfce7',
                    fill: true,
                    tension: 0.4,
                    // pointBackgroundColor:(_, i,arr) => i === arr.length - 1 ?  '#000' : 'transparent' ,  // black dot on last point               
                    pointHoverRadius: 4,
                    // pointRadius:  (_, i,arr ) => i === arr.length - 1 ? 4 : 2,  // only show last point            
                    
        
                  },
                ],
                
              }} 
              options={{
                responsive: true, 
                maintainAspectRatio: false, 
                plugins: { legend: { display: false } },
                scales: { x: { display: false}, y: { display: true, ticks: {callback: value => `₹${value}`} } },
                animation: {duration:10, easing: 'easeOutQuart'},
                interaction: {intersect : false}
              }}
              className="w-full md:w-30rem"
            /> */}

            <div className="h-48 mt-4">
              <Chart
                type="line"
                data={getChartData(coin.chartData)}
                options={chartOptions}
              />
            </div>

            

            
          </Card>
        ))}
      </div>
      
    </div>
  </>  
  );
  
};

export default Stocks;
