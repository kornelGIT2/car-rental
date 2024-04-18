export const manufacturers = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export const yearsOfProduction = [
  { title: "Year", value: "" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
];

export const fuels = [
  {
    title: "Fuel",
    value: "",
  },
  {
    title: "Gas",
    value: "Gas",
  },
  {
    title: "Electricity",
    value: "Electricity",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];

export const locations = ["Warszawa", "Poznań", "Toruń"];

export const about = {
  "1": {
    title: "Find the right car",
    icon: "/find.svg",
    desc: "Enter a location and date to browse and compare cars",
  },
  "2": {
    title: "Rent at the best price",
    icon: "/rental_car.svg",
    desc: "Our prices are guaranteed equal or lower than you can book on arrival! Cancel for free up to 24 hours before.",
  },
  "3": {
    title: "Enjoy the ride",
    icon: "/world.svg",
    desc: "Have the motorbike delivered or pick it up from the local rental office. Show your voucher, grab the keys and hit the road.",
  },
};

export const reviews = [
  {
    reviewer: "Olga H.",
    text: "Great experience! The car was clean and well-maintained.",
    stars: 4,
    carID: 1,
    date: "20 Sep 2022",
  },
  {
    reviewer: "Mariusz P.",
    text: "Excellent service! The staff was friendly and helpful.",
    stars: 5,
    carID: 3,
    date: "10 Jan 2024",
  },
];

export const cars = [
  {
    id: 1,
    name: "Toyota",
    image: "/car01.svg",
    type: "Hatchback",
    seats: 5,
    fuel: "Gas",
    HP: 200,
    stars: 4,
    gear: "Automatic",
    speed: 220,
    rentalPrice: 80,
  },
  {
    id: 2,
    name: "Ford Focus",
    image: "/car02.svg",
    type: "Sedan",
    seats: 5,
    fuel: "Gas",
    HP: 200,
    stars: 5,
    gear: "Manual",
    speed: 200,
    rentalPrice: 60,
  },
  {
    id: 3,
    name: "Hyundai",
    image: "/car03.svg",
    type: "Sedan",
    seats: 5,
    fuel: "Gas",
    HP: 200,
    stars: 5,
    gear: "Manual",
    speed: 180,
    rentalPrice: 55,
  },
];
