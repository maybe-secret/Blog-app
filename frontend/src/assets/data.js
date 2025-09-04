import bigImage from "./bigImage.png";
import book from "./book.svg";
import bridge from "./bridge.png";
import bridgeDark from "./bridgeDark.png";
import chai from "./chai.png";
import circle1 from "./circle1.png";
import circle2 from "./circle2.png";
import circle3 from "./circle3.png";
import circle4 from "./circle4.png";
import logo from "./logo.png";
import logo2 from "./logo.svg";
import logoDark from "./logoDark.svg";
import main from "./main.png";
import mainPic from "./mainPic.png";
import person from "./person.png";
import planeLeftDark from "./planeLeftDark.svg";
import planeLeftLight from "./planeLeftLight.svg";
import planeRightDark from "./planeRightDark.svg";
import planeRightLight from "./planeRightLight.svg";
import map from "./worldmap.png";
import map2 from "./worldmap.svg";

export const assets = {
  logo,
  bridge,
  person,
  circle1,
  circle2,
  circle3,
  circle4,
  logo2,
  mainPic,
  main,
  map,
  map2,
  chai,
  book,
  bridgeDark,
  logoDark,
  bigImage,
  planeLeftLight,
  planeRightLight,
  planeLeftDark,
  planeRightDark,
};

// export const postsData = [
//   {
//     image: chai,
//     date: "January 1, 2025",
//     readTime: "5 mins Read",
//     title: "Chai, Clay Cups, and Conversations: A Morning in Kolkata",
//     excerpt: "In the quiet hum of a bustling street, I found warmth not just in tea — but in the stories shared between sips, steam, and strangers.",
//     author: "Abhi Chatterjee",
//     tags: ["KolkataDiaries", "IndianStreetCulture"],
//     authorImg: "https://plus.unsplash.com/premium_photo-1669835163484-a7adc48849a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     image: chai,
//     date: "January 1, 2025",
//     readTime: "5 mins Read",
//     title: "Chai, Clay Cups, and Conversations: A Morning in Kolkata",
//     excerpt: "In the quiet hum of a bustling street, I found warmth not just in tea — but in the stories shared between sips, steam, and strangers.",
//     author: "Raj Kapoor",
//     tags: ["KolkataDiaries", "IndianStreetCulture"],
//     authorImg: "https://plus.unsplash.com/premium_photo-1669835163484-a7adc48849a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     image: chai,
//     date: "January 1, 2025",
//     readTime: "5 mins Read",
//     title: "Chai, Clay Cups, and Conversations: A Morning in Kolkata",
//     excerpt: "In the quiet hum of a bustling street, I found warmth not just in tea — but in the stories shared between sips, steam, and strangers.",
//     author: "Abhi Chatterjee",
//     tags: ["KolkataDiaries", "IndianStreetCulture"],
//     authorImg: "https://plus.unsplash.com/premium_photo-1669835163484-a7adc48849a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   }
// ];

export const postsData = [
  {
    image: bigImage,
    date: "January 1, 2025",
    readTime: "5 mins Read",
    title: "Chai, Clay Cups, and Conversations: A Morning in Kolkata",
    excerpt:
      "In the quiet hum of a bustling street, I found warmth not just in tea — but in the stories shared between sips, steam, and strangers.",
    author: "Abhi Chatterjee",
    authorImg:
      "https://plus.unsplash.com/premium_photo-1669835163484-a7adc48849a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Optional, can leave empty if no author image
    tags: ["KolkataDiaries", "IndianStreetCulture"],
    featured: true,
  },
  {
    image: chai,
    date: "January 2, 2025",
    readTime: "4 mins Read",
    title: "The Unspoken Conversations at the Tea Stall",
    excerpt:
      "In the clinking of glasses and the murmur of chatter, I found a sense of community that bound us together, no matter our differences.",
    author: "Ananya Roy",
    authorImg:
      "https://plus.unsplash.com/premium_photo-1669835163484-a7adc48849a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["TeaCulture", "StreetStories"],
    featured: false,
  },
  {
    image: bigImage,
    date: "January 3, 2025",
    readTime: "6 mins Read",
    title: "Under the Canopy of Kolkata's Street Vendors",
    excerpt:
      "The vibrant colors, the tempting aromas, and the quick exchanges with street vendors bring out the best of Kolkata's spirit.",
    author: "Ravi Kumar",
    authorImg:
      "https://plus.unsplash.com/premium_photo-1669835163484-a7adc48849a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["StreetVendors", "KolkataLife"],
    featured: true,
  },
  {
    image: chai,
    date: "January 4, 2025",
    readTime: "7 mins Read",
    title: "How Kolkata's Streets Tell the Stories of the Past",
    excerpt:
      "Walking through the bustling streets of Kolkata, one can sense the echoes of history in every corner and every face.",
    author: "Priya Sengupta",
    authorImg:
      "https://plus.unsplash.com/premium_photo-1669835163484-a7adc48849a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["KolkataHistory", "StreetCulture"],
    featured: false,
  },
  {
    image: bigImage,
    date: "January 5, 2025",
    readTime: "3 mins Read",
    title: "The Magic of Kolkata's Morning Chai",
    excerpt:
      "As the first rays of sunlight hit the streets, a warm cup of chai feels like a moment of connection between strangers.",
    author: "Suman Das",
    authorImg:
      "https://plus.unsplash.com/premium_photo-1669835163484-a7adc48849a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["ChaiCulture", "MorningRituals"],
    featured: true,
  },
  {
    image: chai,
    date: "January 6, 2025",
    readTime: "5 mins Read",
    title: "Stories Behind Kolkata's Famous Street Art",
    excerpt:
      "Every wall, every mural tells a unique story of rebellion, passion, and culture that define the heart of Kolkata.",
    author: "Deepika Mehra",
    authorImg:
      "https://plus.unsplash.com/premium_photo-1669835163484-a7adc48849a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["StreetArt", "KolkataCulture"],
    featured: false,
  },
  {
    image: bigImage,
    date: "January 7, 2025",
    readTime: "4 mins Read",
    title: "The Rhythm of Kolkata's Street Music",
    excerpt:
      "In the city that never sleeps, the rhythm of street musicians blends perfectly with the chaos of the streets, creating a symphony of sounds.",
    author: "Alok Gupta",
    authorImg:
      "https://plus.unsplash.com/premium_photo-1669835163484-a7adc48849a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["StreetMusic", "CitySounds"],
    featured: true,
  },
  {
    image: chai,
    date: "January 8, 2025",
    readTime: "6 mins Read",
    title: "Exploring the Best Hidden Spots in Kolkata",
    excerpt:
      "From tucked-away alleyways to secret cafes, Kolkata offers a treasure trove of hidden gems for those who look closely.",
    author: "Kavita Patel",
    authorImg:
      "https://plus.unsplash.com/premium_photo-1669835163484-a7adc48849a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HiddenSpots", "KolkataTravel"],
    featured: false,
  },
  {
    image: bigImage,
    date: "January 9, 2025",
    readTime: "5 mins Read",
    title: "The Famous Street Food of Kolkata: A Culinary Journey",
    excerpt:
      "Kolkata’s street food is a feast for the senses, each bite telling a story of the city’s diverse and rich food culture.",
    author: "Nina Roy",
    authorImg:
      "https://plus.unsplash.com/premium_photo-1669835163484-a7adc48849a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["StreetFood", "KolkataCuisine"],
    featured: true,
  },
  {
    image: chai,
    date: "January 10, 2025",
    readTime: "4 mins Read",
    title: "Kolkata’s Festivals: The Heartbeat of the City",
    excerpt:
      "From Durga Puja to Kali Puja, Kolkata’s festivals are more than just celebrations – they are a living, breathing part of the city’s soul.",
    author: "Shankar Banerjee",
    authorImg:
      "https://plus.unsplash.com/premium_photo-1669835163484-a7adc48849a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Festivals", "KolkataCulture"],
    featured: false,
  },
];
