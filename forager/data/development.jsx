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

export const mushroomslistpercent = [
  {
    title: 'Death Cap',
    imageId: 'dc',
    imageUrl: '/images/dc.png',
    toxic: true,
    percent: '97'
  },
  {
    title: 'Paddy Straw',
    imageId: 'ps',
    imageUrl: '/images/ps.png',
    toxic: false,
    percent: '60'
  },
  {
    title: 'Destroying Angel',
    imageId: 'da',
    imageUrl: '/images/da.png',
    toxic: true,
    percent: '80'
  },
  {
    title: 'False Death Cap',
    imageId: 'fdc',
    imageUrl: '/images/fdc.png',
    toxic: true,
    percent: '70'
  },
];

export const pill = [{
  label: 'Favorites',
  triggered: true,
  cat: 'Tags'
},
{
  label: 'Recent',
  triggered: true,
  cat: 'Tags'
},
{
  label: 'Texas',
  triggered: true,
  cat: 'Regions'
},
{
  label: 'North America',
  triggered: true,
  cat: 'Regions'
},
{
  label: 'South America',
  triggered: true,
  cat: 'Regions'
},
{
  label: 'Asia',
  triggered: true,
  cat: 'Regions'
},
{
  label: 'Europe',
  triggered: true,
  cat: 'Regions'
},
{
  label: 'Africa',
  triggered: true,
  cat: 'Regions'
},
{
  label: 'Poisonous',
  triggered: true,
  cat: 'Category'
},
{
  label: 'Medicinal',
  triggered: true,
  cat: 'Category'
},
{
  label: 'Mythical',
  triggered: true,
  cat: 'Category'
},
{
  label: 'Good for Broths',
  triggered: true,
  cat: 'Category'
},
]
export const shroom = {

  title: 'Death Cap',
  imageId: 'dc',
  imageUrl: '/images/dc.png',
  toxic: true,
  binom: 'Amanita phalloides',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  facts: ["Cap Diameter: 5-15cm", "Gill Color: White", "Stem Color: White", "Habitat: Temperate regions"]

}

export const shroom2 = {

  title: 'Death Cap',
  imageId: 'dc',
  imageUrl: '/images/fdc.png',
  toxic: true,
  binom: 'Amanita phalloides',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  cshape: "Flat",
  ccolor: "Brown",
  ctexture: "Smooth",
  gtype: "Free",
  gcolor: "White",
  sshape: "Slender",
  scolor: "White",
  sring: "Absent",
  hab: "Near Oak/Beech Trees"
}
export const yourshroom = {

  title: 'Death Cap',
  imageId: 'dc',
  imageUrl: '/images/urshroom.png',
  toxic: true,
  binom: 'Amanita phalloides',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  cshape: "Flat",
  ccolor: "Brown",
  ctexture: "Smooth",
  gtype: "Free",
  gcolor: "White",
  sshape: "Slender",
  scolor: "White",
  sring: "Absent",
  hab: "?"

}
// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export { warningMessage, dummyData, mushroomslist, mushroomslistpercent, pill }; // Requires import {warningMessage, dummyData} from './data/development.js';
