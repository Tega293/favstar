import React from 'react'
import Stars from './components/Stars'



 export const data = [
  {
    "name": "Taylor Swift",
    "id": "taylor_swift",
    "nationality": "American",
    "profession": "Singer-songwriter",
    "net_worth": "$400 million",
    "date_of_birth": "December 13, 1989",
    "description": "Taylor Swift is a Grammy-winning singer-songwriter known for her narrative songwriting and country-to-pop evolution.",
    "image": "/Taylor_swift.webp"
  },
  {
    "name": "Cristiano Ronaldo",
    "id": "ronaldo",
    "nationality": "Portuguese",
    "profession": "Professional Footballer",
    "net_worth": "$500 million",
    "date_of_birth": "February 5, 1985",
    "description": "Cristiano Ronaldo is one of the greatest footballers of all time, known for his incredible skill and goal-scoring ability.",
    "image": "/ronaldo.jpeg"
  },
  {
    "name": "Lionel Messi",
    "id": "messi",
    "nationality": "Argentinian",
    "profession": "Professional Footballer",
    "net_worth": "$400 million",
    "date_of_birth": "June 24, 1987",
    "description": "Lionel Messi is a football icon, recognized for his remarkable dribbling and playmaking skills on the field.",
    "image": "/messi.jpg"
  },
  {
    "name": "Yanni",
    "id": "yanni",
    "nationality": "Greek",
    "profession": "Musician",
    "net_worth": "$50 million",
    "date_of_birth": "November 14, 1954",
    "description": "Yanni is a Greek musician known for his captivating instrumental compositions that blend various genres.",
    "image": "/yanni.webp"
  },
  {
    "name": "Mason Greenwood",
    "id": "mason_greenwood",
    "nationality": "English",
    "profession": "Professional Footballer",
    "net_worth": "N/A",
    "date_of_birth": "October 1, 2001",
    "description": "Mason Greenwood is a rising English football talent, making his mark as a forward for Manchester United.",
    "image": "/Greenwood.jpeg"
  },
  {
    "name": "Didier Drogba",
    "id": "drogba",
    "nationality": "Ivorian",
    "profession": "Retired Footballer",
    "net_worth": "$90 million",
    "date_of_birth": "March 11, 1978",
    "description": "Didier Drogba is a legendary Ivorian footballer who was a force to be reckoned with on and off the field.",
    "image": "/drogba.webp",
  },
  {
    "name": "Fela Kuti",
    "id": "fela",
    "nationality": "Nigerian",
    "profession": "Musician",
    "net_worth": "N/A",
    "date_of_birth": "October 15, 1938",
    "description": "Fela Kuti was a Nigerian musician and political activist known for pioneering Afrobeat music.",
    "image": "/Fela-kuti.jpg"
  },
  {
    "name": "Serena Williams",
    "id": "serena",
    "nationality": "American",
    "profession": "Tennis Player",
    "net_worth": "$200 million",
    "date_of_birth": "September 26, 1981",
    "description": "Serena Williams is a dominant tennis player, holding multiple Grand Slam titles and inspiring athletes worldwide.",
    "image": "/serena.webp"
  },
  {
    "name": "John Cena",
    "id": "john_cena",
    "nationality": "American",
    "profession": "Wrestler, Actor",
    "net_worth": "$60 million",
    "date_of_birth": "April 23, 1977",
    "description": "John Cena is a wrestling icon who transitioned to Hollywood, known for his charismatic presence in and out of the ring.",
    "image": "/john_cena.avif"
  },
  {
    "name": "Beyoncé",
    "id": "beyonce",
    "nationality": "American",
    "profession": "Singer, Actress",
    "net_worth": "$500 million",
    "date_of_birth": "September 4, 1981",
    "description": "Beyoncé is a global superstar, celebrated for her powerful vocals, dynamic performances, and social impact.",
    "image": "/beyonce.avif"
  },
  {
    "name": "Lady Gaga",
    "id": "lady_gaga",
    "nationality": "American",
    "profession": "Singer, Actress",
    "net_worth": "$320 million",
    "date_of_birth": "March 28, 1986",
    "description": "Lady Gaga is a versatile artist known for her unique style, musical innovation, and boundary-pushing creativity.",
    "image": "/lady_gaga.jpeg"
  },
  {
    "name": "Steve Harvey",
    "id": "steve_harvey",
    "nationality": "American",
    "profession": "Comedian, TV Host",
    "net_worth": "$200 million",
    "date_of_birth": "January 17, 1957",
    "description": "Steve Harvey is a multifaceted entertainer recognized for his comedy, hosting, and motivational speaking.",
    "image": "/steve_harvey.jpeg"
  }]

export default function page() {
  return (
    <main>
      <Stars star={data}/>
    </main>
  )
}

