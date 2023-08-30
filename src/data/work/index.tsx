import { Direction } from 'utils/constants';

export interface WorkTilesProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  footer1: string;
  footer2?: string;
  buttonLink: string;
  direction?: Direction;
  loading?: 'lazy' | 'eager';
}

const workTilesData: Array<WorkTilesProps> = [
  {
    image: {
      src: '/buskaro/busKaro.webp',
      alt: 'buskaro image',
    },
    title: 'busKARO',
    description:
      'Providing bus travelers with reliable transit data along with updated routes and real-time ETA',
    footer1: 'Course Project',
    footer2: 'Designing Human-Centered Systems',
    buttonLink: '/buskaro',
    loading: 'eager',
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
    loading: 'eager',
  },
  {
    image: {
      src: '/instanotes.webp',
      alt: 'instanotes image',
    },
    title: 'instaNotes',
    description:
      'An incentive-based mobile application that provides a unified platform for students to access class notes.',
    footer1: 'Course Project',
    footer2: 'Mobile Computing',
    buttonLink: '/instanotes',
  },
  {
    image: {
      src: '/ang.webp',
      alt: 'animation graphics image',
    },
    title: 'Animation & Graphics',
    description: 'Creating 3D Models and Animations on 3DS Max',
    footer1: 'Course Project/Independent Project',
    buttonLink: '/animation',
    direction: Direction.REVERSE,
  },
];

export default workTilesData;
