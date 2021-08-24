const users = [
  {
    username: 'Soos',
    password: 'sooSisda_man_76',
    phoneNumber:'3338884112',
  },
  {
    username: 'bigdipper',
    password: '__journAl3',
    phoneNumber:'5559991113',
  },
  {
    username: 'Hades',
    password: 'CerbeRuS_is_AgoodBoy34',
    phoneNumber:'6667976851',
  },
  {
    username: 'DrStrange',
    password:'d0ntTxTand_drive',
    phoneNumber:'7774441113',
  },
  {
    username: 'darkseid',
    password:'4nt1_Lif3',
    phoneNumber:'0009871234',
  },
  {
    username: 'CaptainAmerica',
    password: 'peggyCarter4491',
    phoneNumber:'7181112223',
  },
]

exports.users = users

exports.seed = function(knex) {
  return knex('users').insert(users)
};