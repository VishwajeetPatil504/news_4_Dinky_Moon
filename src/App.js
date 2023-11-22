import React from 'react';
import './App.css'; // Import the CSS file

const NewsArticle = ({ article }) => {
  return (
    <div className="news-article">
      <a href={article.homeUrl} className="home-button">Home</a>
      <img src={article.logo} alt="Publication Logo" className="publication-logo" />
      <hr className="separator" />
      <h2>{article.title}</h2>
      <div className="overview"><b>Overview:</b> {article.overview}</div>
      <div className="article-meta">
        <span className="date-time">{article.date} | {article.time}</span>
        <span className="publication">{article.publication}</span>
      </div>
      <img src={article.image} alt={article.title} className="article-image" />
      <p>{article.content}</p>
    </div>
  );
};

// Define your main App component
const App = () => {
  // Sample article data
  const article = {
    title: "NASA surprised to discover 'dinky' moon orbiting asteroid in close flyby",
    date: '05 Nov 2023',
    time: '09:00 PM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview:`This photo provided by NASA shows a photo taken by the Lucy spacecraft during Wednesday, Nov. 1, 2023 flyby of asteroid Dinkinesh, 300 million miles from Earth. It turns out Dinkinesh, which is only a half-mile across, has a dinky sidekick ... just one-tenth of a mile across. This little companion was a surprise to everyone.`,
    content: `NASA’s Lucy spacecraft, which was launched in October 2021 to research Jupiter’s asteroids, snapped a picture of a smaller asteroid near Mars last week, which presented scientists with a shocking surprise.

    The asteroid Lucy snapped a picture of is named Dinkinesh, and it turns out the space rock has a dinky moon orbiting it.
    
    The Associated Press reported that the discovery was made when Lucy conducted a flyby of Dinkinesh in Mar’s main asteroid belt, nearly 300 million miles away.
    The picture was reportedly taken when Lucy was 270 miles away from Dinkinesh, then sent the data and images back to earth.

The findings included Dinkinesh’s size, which was just barely a half-mile across, and its tiny moon, about a tenth-of-a-mile across.

The mission to snap pictures of Dinkinesh was a rehearsal for a much bigger mission, which is to look at the mysterious asteroids near Jupiter.
The 12-year-long mission, which launched on Oct. 16, 2021, is the first mission to the Jupiter asteroids.

The asteroids are in orbits around the sun and are the same distance as Jupiter. 

Lucy is expected to reach the first of the so-called Trojan asteroids in 2027 and explore them for at least six years. What started as a list of seven asteroids to research has grown to 11.
The name Dinkinesh means "you are marvelous" in the Amharic language of Ethiopia. It is also the Amharic name for Lucy, the 3.2-million-year-old remains of a human ancestor found in Ethiopia in the 19702, for which the spacecraft is named.

"Dinkinesh really did live up to its name; this is marvelous," Southwest Research Institute’s Hal Levison, the lead scientist, said in a statement.`,
    image: '../photo.avif' // replace with the path to your image
  };

  return (
    <div className="App">
      <NewsArticle article={article} />
    </div>
  );
};

export default App;
