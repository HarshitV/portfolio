import { Direction } from 'utils/constants';

const workTilesData = [
  {
    image: {
      src: '/busKaro.webp',
      alt: 'buskaro image',
    },
    title: 'busKARO',
    description:
      'Providing bus travelers with reliable transit data along with updated routes and real-time ETA',
    footer1: 'Course Project',
    footer2: 'Designing Human-Centered Systems',
    buttonLink: '/buskaro',
  },
  {
    image: {
      src: '/busta.webp',
      alt: 'busta image',
    },
    title: "BUSta (बस्ता) (Wear'N'Go)",
    description:
      'A custom-designed wearable bag to speed up the ticketing process for bus conductors in Delhi',
    footer1: 'B.Tech Project',
    buttonLink: '/busta',
    direction: Direction.REVERSE,
  },
];

export default workTilesData;
