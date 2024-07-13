import { useParams } from 'react-router-dom'

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
    id: 'Gentile_da_Fabriano',
    name: 'Gentile da Fabriano',
    birth: 1370,
    death: 1427,
  },
  {
    id: 'Michelino_da_Besozzo',
    name: 'Michelino da Besozzo',
    birth: 1370,
    death: 1455,
  },
  {
    id: 'Robert_Campin',
    name: 'Robert Campin',
    birth: 1375,
    death: 1444,
  },
  {
    id: 'Pisanello',
    name: 'Pisanello',
    birth: 1380,
    death: 1455,
  },
  {
    id: 'Jan_van_Eyck',
    name: 'Jan van Eyck',
    birth: 1380,
    death: 1441,
  },
  {
    id: 'Limbourg_brothers',
    name: 'Limbourg brothers',
    birth: 1385,
    death: 1416,
  },
  {
    id: 'Donatello',
    name: 'Donatello',
    birth: 1386,
    death: 1466,
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
    id: 'Carlo_Crivelli',
    name: 'Carlo Crivelli',
    birth: 1430,
    death: 1476,
  },
  {
    id: 'Gentile_Bellini',
    name: 'Gentile Bellini',
    birth: 1429,
    death: 1507,
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
    id: 'Hieronymus_Bosch',
    name: 'Hieronymus Bosch',
    birth: 1450,
    death: 1516,
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
    id: 'Titian',
    name: 'Titian',
    birth: 1488,
    death: 1576,
  },
  {
    id: 'Giorgio_Vasari',
    name: 'Giorgio Vasari',
    birth: 1511,
    death: 1574,
  },
  {
    id: 'Tintoretto',
    name: 'Tintoretto',
    birth: 1518,
    death: 1594,
  },
  {
    id: 'Pieter_Bruegel_the_Elder',
    name: 'Pieter Bruegel',
    birth: 1525,
    death: 1569,
  },
  {
    id: 'El_Greco',
    name: 'El Greco',
    birth: 1541,
    death: 1614,
  },
  {
    id: 'Caravaggio',
    name: 'Caravaggio',
    birth: 1571,
    death: 1610,
  },
  {
    id: 'Peter_Paul_Rubens',
    name: 'Peter Paul Rubens',
    birth: 1577,
    death: 1640,
  },
  {
    id: 'Frans_Hals',
    name: 'Frans Hals',
    birth: 1582,
    death: 1666,
  },
  {
    id: 'Artemisia_Gentileschi',
    name: 'Artemisia Gentileschi',
    birth: 1593,
    death: 1656,
  },
  {
    id: 'Georges_de_La_Tour',
    name: 'Georges de La Tour',
    birth: 1593,
    death: 1652,
  },
  {
    id: 'Gian_Lorenzo_Bernini',
    name: 'Gian Lorenzo Bernini',
    birth: 1598,
    death: 1680,
  },
  {
    id: 'Diego_Velázquez',
    name: 'Diego Velázquez',
    birth: 1599,
    death: 1660,
  },
  {
    id: 'Rembrandt',
    name: 'Rembrandt',
    birth: 1606,
    death: 1669,
  },
  {
    id: 'Judith_Leyster',
    name: 'Judith Leyster',
    birth: 1609,
    death: 1660,
  },
  {
    id: 'Jan_Steen',
    name: 'Jan Steen',
    birth: 1626,
    death: 1679,
  },
  {
    id: 'Jacob_van_Ruisdael',
    name: 'Jacob van Ruisdael',
    birth: 1628,
    death: 1682,
  },
  {
    id: 'Pieter_de_Hooch',
    name: 'Pieter de Hooch',
    birth: 1629,
    death: 1683,
  },
  {
    id: 'Johannes_Vermeer',
    name: 'Johannes Vermeer',
    birth: 1632,
    death: 1675,
  },
  {
    id: 'Antoine_Watteau',
    name: 'Antoine Watteau',
    birth: 1683,
    death: 1721,
  },
  {
    id: 'Giovanni_Battista_Tiepolo',
    name: 'Giovanni Battista Tiepolo',
    birth: 1696,
    death: 1770,
  },
  {
    id: 'William_Hogarth',
    name: 'William Hogarth',
    birth: 1697,
    death: 1764,
  },
  {
    id: 'Canaletto',
    name: 'Canaletto',
    birth: 1697,
    death: 1768,
  },
  {
    id: 'Jean_Siméon_Chardin',
    name: 'Jean Siméon Chardin',
    birth: 1699,
    death: 1779,
  },
  {
    id: 'François_Boucher',
    name: 'François Boucher',
    birth: 1703,
    death: 1770,
  },
  {
    id: 'Maurice_Quentin_de_La_Tour',
    name: 'Maurice Quentin de La Tour',
    birth: 1704,
    death: 1788,
  },
  {
    id: 'Joshua_Reynolds',
    name: 'Joshua Reynolds',
    birth: 1723,
    death: 1792,
  },
  {
    id: 'Thomas_Gainsborough',
    name: 'Thomas Gainsborough',
    birth: 1727,
    death: 1788,
  },
  {
    id: 'Jean-Honoré_Fragonard',
    name: 'Jean-Honoré Fragonard',
    birth: 1732,
    death: 1806,
  },
  {
    id: 'John_Singleton_Copley',
    name: 'John Singleton Copley',
    birth: 1738,
    death: 1815,
  },
  {
    id: 'Angelica_Kauffman',
    name: 'Angelica Kauffman',
    birth: 1741,
    death: 1807,
  },
  {
    id: 'Francisco_Goya',
    name: 'Francisco Goya',
    birth: 1746,
    death: 1828,
  },
  {
    id: 'Jacques-Louis_David',
    name: 'Jacques-Louis David',
    birth: 1748,
    death: 1825,
  },
  {
    id: 'Élisabeth_Vigée_Le_Brun',
    name: 'Élisabeth Vigée Le Brun',
    birth: 1755,
    death: 1842,
  },
  {
    id: 'J._M._W._Turner',
    name: 'J. M. W. Turner',
    birth: 1775,
    death: 1851,
  },
  {
    id: 'John_Constable',
    name: 'John Constable',
    birth: 1776,
    death: 1837,
  },
  {
    id: 'Eugène_Delacroix',
    name: 'Eugène Delacroix',
    birth: 1798,
    death: 1863,
  },
  {
    id: 'Karl_Bryullov',
    name: 'Karl Bryullov',
    birth: 1799,
    death: 1852,
  },
  {
    id: 'Ivan_Aivazovsky',
    name: 'Ivan Aivazovsky',
    birth: 1817,
    death: 1900,
  },
  {
    id: 'Camille_Pissarro',
    name: 'Camille Pissarro',
    birth: 1830,
    death: 1903,
  },
  {
    id: 'Édouard_Manet',
    name: 'Édouard Manet',
    birth: 1832,
    death: 1883,
  },
  {
    id: 'Edgar_Degas',
    name: 'Edgar Degas',
    birth: 1834,
    death: 1917,
  },
  {
    id: 'James_Tissot',
    name: 'James Tissot',
    birth: 1836,
    death: 1902,
  },
  {
    id: 'Paul_Cézanne',
    name: 'Paul Cézanne',
    birth: 1839,
    death: 1906,
  },
  {
    id: 'Claude_Monet',
    name: 'Claude Monet',
    birth: 1840,
    death: 1926,
  },
  {
    id: 'Pierre-Auguste_Renoir',
    name: 'Pierre-Auguste Renoir',
    birth: 1841,
    death: 1919,
  },
  {
    id: 'Ilya_Repin',
    name: 'Ilya Repin',
    birth: 1841,
    death: 1930,
  },
  {
    id: 'Thomas_Eakins',
    name: 'Thomas Eakins',
    birth: 1844,
    death: 1916,
  },
  {
    id: 'Paul_Gauguin',
    name: 'Paul Gauguin',
    birth: 1848,
    death: 1903,
  },
  {
    id: 'Vincent_van_Gogh',
    name: 'Vincent van Gogh',
    birth: 1853,
    death: 1890,
  },
  {
    id: 'Albert_Edelfelt',
    name: 'Albert Edelfelt',
    birth: 1854,
    death: 1905,
  },
  {
    id: 'Georges_Seurat',
    name: 'Georges Seurat',
    birth: 1859,
    death: 1891,
  },
  {
    id: 'Eero_Järnefelt',
    name: 'Eero Järnefelt',
    birth: 1863,
    death: 1937,
  },
  {
    id: 'Edvard_Munch',
    name: 'Edvard Munch',
    birth: 1863,
    death: 1944,
  },
  {
    id: 'Akseli_Gallen-Kallela',
    name: 'Akseli Gallen-Kallela',
    birth: 1865,
    death: 1931,
  },
  {
    id: 'Ernst_Ludwig_Kirchner',
    name: 'Ernst Ludwig Kirchner',
    birth: 1880,
    death: 1938,
  },
  {
    id: 'Pablo_Picasso',
    name: 'Pablo Picasso',
    birth: 1881,
    death: 1973,
  },
  {
    id: 'Salvador_Dalí',
    name: 'Salvador Dalí',
    birth: 1904,
    death: 1989,
  },
] as const

export type Artist = (typeof artists)[number]

export function getArtistCentury(artist: Artist) {
  return Math.floor(artist.birth / 100) * 100
}

export const artistsByCentury = artists.reduce<Record<string, Artist[]>>(
  (acc, artist) => {
    const artistCentury = getArtistCentury(artist)
    if (!acc[artistCentury]) {
      acc[artistCentury] = []
    }
    acc[artistCentury].push(artist)
    return acc
  },
  {}
)

export const orderedArtists = Object.values(artistsByCentury).flat()

export function getArtistLabel({ name, birth, death }: Artist) {
  return `${name} ${birth}-${death}`
}

function setActiveArtist(artist: Artist) {
  window.location.href = `../art-history/${artist.id}`
}

export function useActiveArtist() {
  const { artistId } = useParams()
  const activeArtist =
    artistId && artists.find((artist) => artist.id === artistId)

  return { activeArtist: activeArtist || artists[0], setActiveArtist }
}
