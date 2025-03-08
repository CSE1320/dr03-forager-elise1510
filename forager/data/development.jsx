// data/development.js

const dummyData = {
  message: "This is dummy data from a config file",
  status: "success",
};
export const percent = 97;
const warningMessage = {
  header: "warning",
  icon: "/icons/icon_warning.svg",
  message: "This is a toxic species, proceed with caution."
};
export const msg = {
  header: "ATTENTION!",
  icon: "/icons/icon_warning.svg",
  message: "Our system can make mistakes! Remember to verify important information and use your own judgement to determine if any mushroom is safe. Be sure to use the “Report Error” button if you suspect a mistake."
};
export const shr = {
    title: 'Death Cap',
    imageId: 'dc',
    imageUrl: '/images/dc.png',
    toxic: true,
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
  {
    title: 'Puffball',
    imageId: 'pb',
    imageUrl: '/images/pb.png',
    toxic: false,
  },
  {
    title: 'Horse Mushroom',
    imageId: 'hm',
    imageUrl: '/images/hm.jpg',
    toxic: false,
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
export const mushroomslistpercent2 = [
  {
    title: 'Paddy Straw',
    imageId: 'ps',
    imageUrl: '/images/ps.png',
    toxic: false,
    percent: '90'
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
    {
    title: 'Puffball',
    imageId: 'pb',
    imageUrl: '/images/pb.png',
    toxic: false,
    percent: '60'
  },
];
export var pill = [
  {
    label: 'Favorites',
    triggered: true,
    cat: 'Tags',

  },
  {
    label: 'Recent',
    triggered: false,
    cat: 'Tags',
  },
  {
    label: 'Texas',
    triggered: true,
    cat: 'Regions',
  },
  {
    label: 'North America',
    triggered: false,
    cat: 'Regions',
  },
  {
    label: 'South America',
    triggered: false,
    cat: 'Regions',
  },
  {
    label: 'Asia',
    triggered: false,
    cat: 'Regions',
  },
  {
    label: 'Europe',
    triggered: false,
    cat: 'Regions',
  },
  {
    label: 'Africa',
    triggered: false,
    cat: 'Regions',
  },
  {
    label: 'Poisonous',
    triggered: false,
    cat: 'Category',
  },
  {
    label: 'Medicinal',
    triggered: false,
    cat: 'Category',
  },
  {
    label: 'Mythical',
    triggered: false,
    cat: 'Category',
  },
  {
    label: 'Good for Broths',
    triggered: false,
    cat: 'Category',
  }
];
export var pills = [
  {
    label: 'Favorites',
    triggered: true,
    cat: 'Tags',
    applicableshrooms: ["dc", "ps", "da", "fdc", "pb"]
  },
  {
    label: 'Recent',
    triggered: false,
    cat: 'Tags',
    applicableshrooms: ["dc", "ps", "da", "fdc", "pb"]
  },
  {
    label: 'Texas',
    triggered: true,
    cat: 'Regions',
    applicableshrooms: ["dc", "ps", "da", "fdc", "pb"]
  },
  {
    label: 'North America',
    triggered: false,
    cat: 'Regions',
    applicableshrooms: ["dc", "ps", "da", "fdc", "pb"]
  },
  {
    label: 'South America',
    triggered: false,
    cat: 'Regions',
    applicableshrooms: ["dc", "ps", "da", "fdc", "pb"]
  },
  {
    label: 'Asia',
    triggered: false,
    cat: 'Regions',
    applicableshrooms: ["dc", "ps", "da", "fdc", "pb"]
  },
  {
    label: 'Europe',
    triggered: false,
    cat: 'Regions',
    applicableshrooms: ["dc", "ps", "da", "fdc", "pb"]
  },
  {
    label: 'Africa',
    triggered: false,
    cat: 'Regions',
    applicableshrooms: ["dc", "ps", "da", "fdc", "pb"]
  },
  {
    label: 'Poisonous',
    triggered: false,
    cat: 'Category',
    applicableshrooms: ["dc", "ps", "da", "fdc", "pb"]
  },
  {
    label: 'Medicinal',
    triggered: false,
    cat: 'Category',
    applicableshrooms: ["dc", "ps", "da", "fdc", "pb"]
  },
  {
    label: 'Mythical',
    triggered: false,
    cat: 'Category',
    applicableshrooms: ["dc", "ps", "da", "fdc", "pb"]
  },
  {
    label: 'Good for Broths',
    triggered: false,
    cat: 'Category',
    applicableshrooms: ["dc", "ps", "da", "fdc", "pb"]
  }
];


export const shroom2 = {

  title: 'Death Cap',
  imageId: 'dc',
  imageUrl: '/images/dc.png',
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
};
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

};

 export var pillg1 = [
  {
    label: 'Favorites',
    triggered: true,
    cat: 'Tags',
    applicableshrooms: ["dc", "ps", "da","fdc", "pf"]
  },
  {
    label: 'Recent',
    triggered: true,
    cat: 'Tags',
    applicableshrooms: ["dc", "ps", "da","fdc", "pf"]
  }
];



export var pillg2 = [
  {
    label: 'Texas',
    triggered: true,
    cat: 'Regions',
    applicableshrooms: ["dc", "ps", "da","fdc", "pf"]
  },
  {
    label: 'North America',
    triggered: false,
    cat: 'Regions',
    applicableshrooms: ["dc", "ps", "da","fdc", "pf"]
  },
  {
    label: 'South America',
    triggered: false,
    cat: 'Regions',
    applicableshrooms: ["dc", "ps", "da","fdc", "pf"]
  },
  {
    label: 'Asia',
    triggered: false,
    cat: 'Regions',
    applicableshrooms: ["dc", "ps", "da","fdc", "pf"]
  },
  {
    label: 'Europe',
    triggered: false,
    cat: 'Regions',
    applicableshrooms: ["dc", "ps", "da","fdc", "pf"]
  },
  {
    label: 'Africa',
    triggered: false,
    cat: 'Regions',
    applicableshrooms: ["dc", "ps", "da","fdc", "pf"]
  },
  {
    label: 'Poisonous',
    triggered: false,
    cat: 'Category',
    applicableshrooms: ["dc", "ps", "da","fdc", "pf"]
  }
];

export var pillg3 =[
  {
    label: 'Medicinal',
    triggered: false,
    cat: 'Category',
    applicableshrooms: ["dc", "ps", "da","fdc", "pf"]
  },
  {
    label: 'Mythical',
    triggered: false,
    cat: 'Category',
    applicableshrooms: ["dc", "ps", "da","fdc", "pf"]
  },
  {
    label: 'Good for Broths',
    triggered: false,
    cat: 'Category',
    applicableshrooms: ["dc", "ps", "da","fdc", "pf"]
  }
]; 

export var pl = [pillg1,pillg2,pillg3];


export const shrooms = [
    {
      title: 'Death Cap',
      imageId: 'dc',
      imageUrl: '/images/dc.png',
      toxic: true,
      binom: 'Amanita phalloides',
      info: 'A highly toxic mushroom responsible for most mushroom poisoning fatalities worldwide.',
      facts: ["Cap Diameter: 5-15cm", "Gill Color: White", "Stem Color: White", "Habitat: Temperate regions"],
      percent: 97,
    },
    {
      title: 'Paddy Straw',
      imageId: 'ps',
      imageUrl: '/images/ps.png',
      toxic: false,
      binom: 'Volvariella volvacea',
      info: 'A widely cultivated edible mushroom, especially in tropical and subtropical regions.',
      facts: ["Cap Diameter: 4-12cm", "Gill Color: Pink", "Stem Color: Light Brown", "Habitat: Rice straw beds, warm climates"],
      percent: 60,
    },
    {
      title: 'Destroying Angel',
      imageId: 'da',
      imageUrl: '/images/da.png',
      toxic: true,
      binom: 'Amanita bisporigera',
      info: 'A deadly white mushroom that contains potent amatoxins, causing fatal liver damage.',
      facts: ["Cap Diameter: 5-10cm", "Gill Color: White", "Stem Color: White", "Habitat: Woodlands, often near oak and pine"],
      percent: 80,
    },
    {
      title: 'False Death Cap',
      imageId: 'fdc',
      imageUrl: '/images/fdc.png',
      toxic: true,
      binom: 'Amanita citrina',
      info: 'A lookalike of the Death Cap, though less toxic, with a yellowish cap and a distinctive smell of raw potatoes.',
      facts: ["Cap Diameter: 6-12cm", "Gill Color: White", "Stem Color: Pale Yellow", "Habitat: Deciduous and coniferous forests"],
      percent: 70,
    },
    {
      title: 'Puffball',
      imageId: 'pb',
      imageUrl: '/images/pb.png',
      toxic: false,
      binom: 'Lycoperdon perlatum',
      info: 'Puffballs are found growing on the ground in woods, and are usually found from summer to late autumn. The fruiting body of a puffball mushroom develops within a few weeks and soon begins to decompose and rot.',
      facts: ["Cap Diameter: 10-100cm", "Gill Color: White", "Stem Color: Pale Yellow", "Habitat:Woods"],
      percent: 60
    },
    {
      title: 'Horse Mushroom',
      imageId: 'hm',
      imageUrl: '/images/hm.jpg',
      toxic: false,
      binom: 'Agaricus arvensis',
      info: 'A horse mushroom in its prime is a thing of great beauty and superb flavour. It also has the curious dual distinction of  being commonly misidentified and widely underrated.',
      facts: ["Cap Diameter: 3-20", "Gill Color: White", "Stem Color: Pale Yellow", "Habitat:Woods"],
      percent: 0
    },
  ];

  let idk = [
    {
      label: 'Favorites',
      triggered: false,
      cat: 'Tagx',
      applicableshrooms: ["dc", "ps", "da","fdc", "pf"],
    },
    {
      label: 'Recent',
      triggered: true,
      cat: 'false',
      applicableshrooms: ["dc", "ps", "da","fdc", "pf"]
    },
  ];
  export const shroom = {
    title: 'Death Cap',
    imageId: 'dc',
    imageUrl: '/images/dc.png',
    toxic: true,
    binom: 'Amanita phalloides',
    info: 'A highly toxic mushroom responsible for most mushroom poisoning fatalities worldwide.',
    facts: ["Cap Diameter: 5-15cm", "Gill Color: White", "Stem Color: White", "Habitat: Temperate regions"],
    percent: 97,
  };
export default pills;
export { warningMessage, dummyData,idk }; // Requires import {warningMessage, dummyData} from './data/development.js';
