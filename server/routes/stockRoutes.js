// routes/stockRoutes.js
import express from 'express';
const router = express.Router();

let stocks = [
  { name: 'Vodafone Idea', Price: 7.2, change: 0.0, volume: 163748313, chartData: [7.0, 7.1, 7.2] },
  { name: 'Enviro Infra', Price: 277.99, change: 0.0, volume: 33963286, chartData: [270, 275, 277] },
  { name: 'Tata Motors', Price: 450.75, change: 0.0, volume: 54738291, chartData: [448, 449.5, 450.75] },
  { name: 'Infosys Ltd', Price: 1375.25, change: 0.0, volume: 38473821, chartData: [1350, 1362, 1375.25] },
  { name: 'Reliance Ind.', Price: 2510.45, change: 0.0, volume: 94738291, chartData: [2500, 2505, 2510.45] },
  { name: 'Adani Ports', Price: 689.35, change: 0.0, volume: 12839485, chartData: [680, 685, 689.35] },
  { name: 'Zomato Ltd', Price: 102.25, change: 0.0, volume: 30393847, chartData: [100, 101.5, 102.25] },
  { name: 'Paytm', Price: 831.50, change: 0.0, volume: 22839475, chartData: [820, 825, 831.50] },
  { name: 'Nykaa', Price: 135.75, change: 0.0, volume: 19483923, chartData: [130, 133, 135.75] },
  { name: 'IRCTC', Price: 785.60, change: 0.0, volume: 17483922, chartData: [780, 783, 785.60] },

  { name: 'HDFC Bank', Price: 1605.20, change: 0.0, volume: 28473920, chartData: [1580, 1595, 1605.20] },
  { name: 'Axis Bank', Price: 982.30, change: 0.0, volume: 19384729, chartData: [970, 978, 982.30] },
  { name: 'ICICI Bank', Price: 925.80, change: 0.0, volume: 37483930, chartData: [910, 918, 925.80] },
  { name: 'SBI', Price: 645.10, change: 0.0, volume: 57839284, chartData: [640, 643, 645.10] },
  { name: 'Maruti Suzuki', Price: 9540.75, change: 0.0, volume: 8374921, chartData: [9500, 9520, 9540.75] },
  { name: 'TCS', Price: 3665.80, change: 0.0, volume: 12384738, chartData: [3650, 3660, 3665.80] },
  { name: 'Wipro', Price: 432.95, change: 0.0, volume: 13484922, chartData: [425, 430, 432.95] },
  { name: 'Tech Mahindra', Price: 1120.50, change: 0.0, volume: 9483947, chartData: [1100, 1110, 1120.50] },
  { name: 'LTIMindtree', Price: 5100.15, change: 0.0, volume: 4839483, chartData: [5070, 5090, 5100.15] },
  { name: 'HCL Tech', Price: 1230.75, change: 0.0, volume: 11193748, chartData: [1210, 1220, 1230.75] },

  { name: 'JSW Steel', Price: 850.60, change: 0.0, volume: 18273647, chartData: [840, 845, 850.60] },
  { name: 'Hindalco', Price: 506.25, change: 0.0, volume: 12839384, chartData: [500, 503, 506.25] },
  { name: 'Tata Steel', Price: 122.15, change: 0.0, volume: 37484738, chartData: [120, 121.5, 122.15] },
  { name: 'Coal India', Price: 250.30, change: 0.0, volume: 28483948, chartData: [248, 249, 250.30] },
  { name: 'NTPC', Price: 232.60, change: 0.0, volume: 19284738, chartData: [230, 231, 232.60] },
  { name: 'ONGC', Price: 168.75, change: 0.0, volume: 18473927, chartData: [165, 167, 168.75] },
  { name: 'BPCL', Price: 410.80, change: 0.0, volume: 9847392, chartData: [405, 408, 410.80] },
  { name: 'IOC', Price: 112.45, change: 0.0, volume: 23849372, chartData: [110, 111, 112.45] },
  { name: 'Power Grid', Price: 265.30, change: 0.0, volume: 12847392, chartData: [260, 263, 265.30] },
  { name: 'GAIL', Price: 114.75, change: 0.0, volume: 8473921, chartData: [112, 113.5, 114.75] },

  { name: 'HUL', Price: 2560.10, change: 0.0, volume: 4383929, chartData: [2550, 2555, 2560.10] },
  { name: 'Nestle India', Price: 23500.85, change: 0.0, volume: 293849, chartData: [23400, 23450, 23500.85] },
  { name: 'Britannia', Price: 4895.30, change: 0.0, volume: 1939483, chartData: [4850, 4870, 4895.30] },
  { name: 'ITC', Price: 435.20, change: 0.0, volume: 84739283, chartData: [430, 433, 435.20] },
  { name: 'Godrej CP', Price: 1085.50, change: 0.0, volume: 2847392, chartData: [1070, 1080, 1085.50] },
  { name: 'Dabur India', Price: 580.75, change: 0.0, volume: 1947392, chartData: [575, 578, 580.75] },
  { name: 'Biocon', Price: 248.95, change: 0.0, volume: 8374921, chartData: [245, 247, 248.95] },
  { name: 'Sun Pharma', Price: 1195.60, change: 0.0, volume: 12938472, chartData: [1180, 1190, 1195.60] },
  { name: 'Cipla', Price: 1120.30, change: 0.0, volume: 3849201, chartData: [1110, 1115, 1120.30] },
  { name: 'Dr. Reddy', Price: 5900.85, change: 0.0, volume: 1392849, chartData: [5850, 5880, 5900.85] },

  { name: 'Divi\'s Labs', Price: 3705.50, change: 0.0, volume: 492839, chartData: [3680, 3695, 3705.50] },
  { name: 'Torrent Pharma', Price: 1975.90, change: 0.0, volume: 384920, chartData: [1950, 1965, 1975.90] },
  { name: 'Bajaj Finance', Price: 7100.60, change: 0.0, volume: 2837492, chartData: [7050, 7080, 7100.60] },
  { name: 'Bajaj Finserv', Price: 1550.20, change: 0.0, volume: 1283947, chartData: [1530, 1540, 1550.20] },
  { name: 'HDFC Ltd', Price: 2720.45, change: 0.0, volume: 4839283, chartData: [2700, 2710, 2720.45] },
  { name: 'M&M', Price: 1785.75, change: 0.0, volume: 2938472, chartData: [1770, 1780, 1785.75] },
];





// Function
const updatePrices = () => {
  stocks = stocks.map(stock => {
    const randomChange = +(Math.random() * 12 - 8).toFixed(2);   // -1 to +1
    const newPrice = +(stock.Price + +randomChange).toFixed(2);
    const newChartData = [...stock.chartData, newPrice];

    if(newChartData.length>30) newChartData.shift();


   

    return {
      ...stock,
      Price: newPrice,
      change: randomChange,
      chartData: newChartData 
    };
  });
};

setInterval(updatePrices, 5000); 

router.get('/', (req, res) => {
  res.json(stocks);
});

export default router;
