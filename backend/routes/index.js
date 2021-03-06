const router = require('express').Router();
const Mobility = require('../models/Mobility.js');

const abbrevTranslations = {
  AL: 'Alabama',
  AK: 'Alaska',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  DC: 'District of Columbia',
  FL: 'Florida',
  GA: 'Georgia',
  GU: 'Guam',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  PR: 'Puerto Rico',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VI: 'Virgin Islands',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming'
}

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.get('/mobilities', (req, res, next) => {
  //console.log('hello from backend!', req.query, abbrevTranslations[req.query.region]);
  Mobility.find({ sub_region_1: abbrevTranslations[req.query.region] ,  sub_region_2: ""}).then(dataFromDB => {
    // console.log(dataFromDB, dataFromDB.length)
    res.json({ mobilities: dataFromDB }); 
  })
});

// router.post("/saved-data", (req, res, next)=> {
//   Movie.create(req.body).then(response => {
//     res.json({message:"success", newMovieId: response._id}) //Back to the front end sending another message 7
//   }).catch(err => res.json({err}))
// })


module.exports = router;