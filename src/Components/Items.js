const axios = require('axios');

let items = [];
const  axiosTest = () => {
    return axios.get('http://ttcong2301.southeastasia.cloudapp.azure.com:3000/product')
    .then(function (response) {
      items = response.data;
      return items;
    })
    .catch(function(error){
      console.log(error);
  });    
}

axiosTest();

// let items = [ 
//         {
//           id: uuidv4(), 
//           TenSP: 'Áo XTN', 
//           MoTa: 'Chiếc áo siêu to khổng lồ', 
//           Gia: 50000,
//           NgaySx: '27/04/2000', 
//           HanSd:'31/12/2019'
//         },

//         {
//           id: uuidv4(), 
//           TenSP: 'Khăn XTN', 
//           MoTa: 'Chiếc khăn siêu to khổng lồ', 
//           Gia: 50000,
//           NgaySx: '27/04/2000', 
//           HanSd:'31/12/2019'
//         },

//         {
//           id: uuidv4(), 
//           TenSP: 'Mũ XTN', 
//           MoTa: 'Chiếc mũ siêu to khổng lồ', 
//           Gia: 50000,
//           NgaySx: '27/04/2000', 
//           HanSd:'31/12/2019'
//         }	
// ];
export default items;