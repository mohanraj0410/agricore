import artificialLandscape from '../assets/images/artificialLandscape.png';
import gardenLights from '../assets/images/gardenLights.jpeg';
import landscapeDesign from '../assets/images/landscapeDesign.jpeg';
import verticalGarden from '../assets/images/verticalGarden.jpeg';
import fabricDesign from '../assets/images/fabaricdesign.JPG';
import gardenSwings from '../assets/images/gardenswing.JPG';
import gazeboGarden from '../assets/images/gazebogarden.JPG';
import lawnMaintenance from '../assets/images/lawnmaintanence.JPG';
import gardenMaintenance from '../assets/images/gardenmaintanence.JPG';

export const services = [
  {
    id: 'landscape-design',
    name: 'Landscape Design',
    description: 'Custom-designed outdoor environments tailored to your vision, climate, and lifestyle. From concept sketches to 3D renders before a single plant is placed.',
    icon: '🌿',
    image: landscapeDesign,
    imageAlt: 'Professional landscape design and planning',
    isLarge: true,
  },
  {
    id: 'artificial-landscape',
    name: 'Artificial Landscape',
    description: 'Low-maintenance, evergreen artificial turf and synthetic plants that look and feel naturally lush all year round.',
    icon: '🌾',
    image: artificialLandscape,
    imageAlt: 'Artificial landscape and turf installation',
    isLarge: false,
  },
  {
    id: 'vertical-garden',
    name: 'Vertical Garden',
    description: 'Living walls and vertical greenery that maximize space and bring nature into compact urban environments.',
    icon: '🧗',
    image: verticalGarden,
    imageAlt: 'Living wall and vertical garden installation',
    isLarge: false,
  },
  {
    id: 'garden-lights',
    name: 'Garden Lights',
    description: 'Ambient and accent lighting solutions that transform your garden into a magical evening retreat.',
    icon: '💡',
    image: gardenLights,
    imageAlt: 'Garden lighting and ambient illumination',
    isLarge: false,
  },
  {
    id: 'garden-fabric-design',
    name: 'Fabric Design',
    description: 'Custom fabric installations, shade sails, and outdoor upholstery for stylish and comfortable garden areas.',
    icon: '🧶',
    image: fabricDesign,
    imageAlt: 'Garden area fabric and shade design',
    isLarge: false,
  },
  {
    id: 'garden-swings',
    name: 'Garden Swings',
    description: 'Durable and aesthetic swing installations, from classic wooden sets to modern hanging pods for your garden.',
    icon: '🎠',
    image: gardenSwings,
    imageAlt: 'Elegant garden swings and seating',
    isLarge: false,
  },
  {
    id: 'gazebo-gardens',
    name: 'Gazebo Gardens',
    description: 'Expertly designed gazebos and pavilions that serve as the focal point for your outdoor living space.',
    icon: '🏠',
    image: gazeboGarden,
    imageAlt: 'Garden gazebos and outdoor pavilions',
    isLarge: false,
  },
  {
    id: 'lawn-maintenance',
    name: 'Lawn Maintenance',
    description: 'Lush, healthy lawns through precision mowing, aeration, over-seeding and organic lawn care programs.',
    icon: '🌱',
    image: lawnMaintenance,
    imageAlt: 'Professional lawn management and care',
    isLarge: false,
  },
  {
    id: 'garden-maintenance',
    name: 'Garden Maintenance',
    description: 'Year-round maintenance contracts keeping your garden in peak condition — pruning, fertilizing, pest control and seasonal planting.',
    icon: '✂️',
    image: gardenMaintenance,
    imageAlt: 'Regular garden maintenance services',
    isLarge: false,
  },
]
