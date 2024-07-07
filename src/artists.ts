export const artists = [
  {
    id: 'Cimabue',
    name: 'Cimabue',
    birth: 1240,
    death: 1302,
  },
  {
    id: 'Duccio',
    name: 'Duccio',
    birth: 1255,
    death: 1319,
  },
  {
    id: 'Giotto',
    name: 'Giotto',
    birth: 1267,
    death: 1337,
  },
  {
    id: 'Simone_Martini',
    name: 'Simone Martini',
    birth: 1284,
    death: 1344,
  },
  {
    id: 'Taddeo_Gaddi',
    name: 'Taddeo Gaddi',
    birth: 1290,
    death: 1366,
  },
  {
    id: 'Andrei_Rublev',
    name: 'Andrei Rublev',
    birth: 1360,
    death: 1430,
  },
  {
    id: 'Limbourg_brothers',
    name: 'Limbourg brothers',
    birth: 1385,
    death: 1416,
  },
  {
    id: 'Fra_Angelico',
    name: 'Fra Angelico',
    birth: 1395,
    death: 1455,
  },
  {
    id: 'Paolo_Uccello',
    name: 'Paolo Uccello',
    birth: 1397,
    death: 1475,
  },
  {
    id: 'Rogier_van_der_Weyden',
    name: 'Rogier van der Weyden',
    birth: 1399,
    death: 1464,
  },
  {
    id: 'Masaccio',
    name: 'Masaccio',
    birth: 1401,
    death: 1428,
  },
  {
    id: 'Andrea_Mantegna',
    name: 'Andrea Mantegna',
    birth: 1431,
    death: 1506,
  },
  {
    id: 'Sandro_Botticelli',
    name: 'Sandro Botticelli',
    birth: 1445,
    death: 1510,
  },
  {
    id: 'Domenico_Ghirlandaio',
    name: 'Domenico Ghirlandaio',
    birth: 1448,
    death: 1494,
  },
  {
    id: 'Leonardo_da_Vinci',
    name: 'Leonardo da Vinci',
    birth: 1452,
    death: 1519,
  },
  {
    id: 'Michelangelo',
    name: 'Michelangelo',
    birth: 1475,
    death: 1564,
  },
  {
    id: 'Raphael',
    name: 'Raphael',
    birth: 1483,
    death: 1520,
  },
  {
    id: 'Pieter_Bruegel_the_Elder',
    name: 'Pieter Bruegel',
    birth: 1525,
    death: 1569,
  },
  {
    id: 'Caravaggio',
    name: 'Caravaggio',
    birth: 1571,
    death: 1610,
  },
] as const

export type Artist = (typeof artists)[number]
