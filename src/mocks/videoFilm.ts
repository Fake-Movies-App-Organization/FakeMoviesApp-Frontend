export interface VideoFilm {
  id: string;
  title: string;
  duration: string;
  movieBanner: string;
  year: string;
  type: string;
  description: string;
  author: string;
}

export const data: VideoFilm[] = [
  {
    id: "1",
    title: "The Godfather",
    duration: "175 min",
    movieBanner: "godfather-banner.jpg",
    year: "1972",
    type: "movie",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    author: "Mario Puzo",
  },
  {
    id: "2",
    title: "Breaking Bad",
    duration: "47 min",
    movieBanner: "breakingbad-banner.jpg",
    year: "2008",
    type: "serie",
    description:
      "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's future.",
    author: "Vince Gilligan",
  },
  {
    id: "3",
    title: "Inception",
    duration: "148 min",
    movieBanner: "inception-banner.jpg",
    year: "2010",
    type: "movie",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    author: "Christopher Nolan",
  },
  {
    id: "4",
    title: "Stranger Things",
    duration: "51 min",
    movieBanner: "strangerthings-banner.jpg",
    year: "2016",
    type: "serie",
    description:
      "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
    author: "The Duffer Brothers",
  },
  {
    id: "5",
    title: "The Dark Knight",
    duration: "152 min",
    movieBanner: "darkknight-banner.jpg",
    year: "2008",
    type: "movie",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    author: "Christopher Nolan",
  },
  {
    id: "6",
    title: "Game of Thrones",
    duration: "57 min",
    movieBanner: "got-banner.jpg",
    year: "2011",
    type: "serie",
    description:
      "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    author: "George R. R. Martin",
  },
  {
    id: "7",
    title: "Pulp Fiction",
    duration: "154 min",
    movieBanner: "pulpfiction-banner.jpg",
    year: "1994",
    type: "movie",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    author: "Quentin Tarantino",
  },
  {
    id: "8",
    title: "The Office",
    duration: "22 min",
    movieBanner: "office-banner.jpg",
    year: "2005",
    type: "serie",
    description:
      "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
    author: "Greg Daniels",
  },
  {
    id: "9",
    title: "Fight Club",
    duration: "139 min",
    movieBanner: "fightclub-banner.jpg",
    year: "1999",
    type: "movie",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    author: "Chuck Palahniuk",
  },
  {
    id: "10",
    title: "Friends",
    duration: "22 min",
    movieBanner: "friends-banner.jpg",
    year: "1994",
    type: "serie",
    description:
      "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
    author: "David Crane",
  },
  {
    id: "11",
    title: "The Matrix",
    duration: "136 min",
    movieBanner: "matrix-banner.jpg",
    year: "1999",
    type: "movie",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    author: "The Wachowskis",
  },
  {
    id: "12",
    title: "Sherlock",
    duration: "88 min",
    movieBanner: "sherlock-banner.jpg",
    year: "2010",
    type: "serie",
    description:
      "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    author: "Steven Moffat",
  },
  {
    id: "13",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    duration: "178 min",
    movieBanner: "lotr-banner.jpg",
    year: "2001",
    type: "movie",
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    author: "J.R.R. Tolkien",
  },
  {
    id: "14",
    title: "The Mandalorian",
    duration: "40 min",
    movieBanner: "mandalorian-banner.jpg",
    year: "2019",
    type: "serie",
    description:
      "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
    author: "Jon Favreau",
  },
  {
    id: "15",
    title: "Forrest Gump",
    duration: "142 min",
    movieBanner: "forrestgump-banner.jpg",
    year: "1994",
    type: "movie",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    author: "Winston Groom",
  },
  {
    id: "16",
    title: "The Crown",
    duration: "58 min",
    movieBanner: "crown-banner.jpg",
    year: "2016",
    type: "serie",
    description:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    author: "Peter Morgan",
  },
  {
    id: "17",
    title: "Gladiator",
    duration: "155 min",
    movieBanner: "gladiator-banner.jpg",
    year: "2000",
    type: "movie",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    author: "David Franzoni",
  },
  {
    id: "18",
    title: "The Witcher",
    duration: "60 min",
    movieBanner: "witcher-banner.jpg",
    year: "2019",
    type: "serie",
    description:
      "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    author: "Andrzej Sapkowski",
  },
  {
    id: "19",
    title: "Interstellar",
    duration: "169 min",
    movieBanner: "interstellar-banner.jpg",
    year: "2014",
    type: "movie",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    author: "Jonathan Nolan",
  },
  {
    id: "20",
    title: "The Simpsons",
    duration: "22 min",
    movieBanner: "simpsons-banner.jpg",
    year: "1989",
    type: "serie",
    description:
      "The satiric adventures of a working-class family in the misfit city of Springfield.",
    author: "Matt Groening",
  },
];
