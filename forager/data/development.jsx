// data/development.js

const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};

export const mushroomslist = [
    {
      title: 'Death Cap',
      imageId: 'dc',
      imageUrl: '/images/dc.png',
      toxic: true,
    },
    {
      title: 'Paddy Straw',
      imageId: 'ps',
      imageUrl: '/images/ps.png',
      toxic: false,
    },
    {
        title: 'Destroying Angel',
        imageId: 'da',
        imageUrl: '/images/da.png',
        toxic: true,
      },
      {
        title: 'False Death Cap',
        imageId: 'fdc',
        imageUrl: '/images/fdc.png',
        toxic: true,
      },
  ];

// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData,mushroomslist}; // Requires import {warningMessage, dummyData} from './data/development.js';
