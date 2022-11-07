import React from "react";
import Search from '../components/search'


{/*
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"
import LoginButton from "../components/login-button"
import LogoutButton from "../components/logout-button"
import Profile from "../components/profile";
import Nav from "../components/nav"
*/}

function GlobalNav() {
  {/*
  const { user, user_id, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  */}

  return (
    <div className="App">
 <Search/>
 
 <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/"><img width="30" alt="FigpinDB" src="/fdb-logo.png"></img></a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/tags/West" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Anime
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/property/Astro Boy">Astro Boy</a></li>
              <li><a className="dropdown-item" href="/property/Attack on Titan">Attack on Titan</a></li>
              <li><a className="dropdown-item" href="/property/Cannon Busters">Cannon Busters</a></li>
              <li><a className="dropdown-item" href="/property/Demon Slayer">Demon Slayer</a></li>
              <li><a className="dropdown-item" href="/property/Dr. Stone">Dr. Stone</a></li>
              <li><a className="dropdown-item" href="/property/Dragon Ball">Dragon Ball</a></li>
              <li><a className="dropdown-item" href="/property/Dragon Ball GT">Dragon Ball GT</a></li>
              <li><a className="dropdown-item" href="/property/Dragon Ball Super">Dragon Ball Super</a></li>
              <li><a className="dropdown-item" href="/property/Dragon Ball Super Broly Movie">Dragon Ball Super Broly Movie</a></li>
              <li><a className="dropdown-item" href="/property/Dragon Ball Z">Dragon Ball Z</a></li>
              <li><a className="dropdown-item" href="/property/Full Metal Alchemist">Full Metal Alchemist</a></li>
              <li><a className="dropdown-item" href="/property/Gundam">Gundam</a></li>
              <li><a className="dropdown-item" href="/property/Gundam x Hello Kitty">Gundam x Hello Kitty</a></li>
              <li><a className="dropdown-item" href="/property/Hunter x Hunter">Hunter x Hunter</a></li>
              <li><a className="dropdown-item" href="/property/Mob Psycho">Mob Psycho</a></li>
              <li><a className="dropdown-item" href="/property/My Hero Academia">My Hero Academia</a></li>
              <li><a className="dropdown-item" href="/property/My Hero Academia x Hello Kitty">My Hero Academia x Hello Kitty</a></li>   
              <li><a className="dropdown-item" href="/property/Naruto">Naruto</a></li>
              <li><a className="dropdown-item" href="/property/Naruto x Hello Kitty">Naruto x Hello Kitty</a></li>
              <li><a className="dropdown-item" href="/property/Neon Genesis Evangelion">Neon Genesis Evangelion</a></li>
              <li><a className="dropdown-item" href="/property/One Piece">One Piece</a></li>
              <li><a className="dropdown-item" href="/property/One Punch Man">One Punch Man</a></li>
              <li><a className="dropdown-item" href="/property/Sailor Moon">Sailor Moon</a></li>
              <li><a className="dropdown-item" href="/property/The Seven Deadly Sins">The Seven Deadly Sins</a></li>
              <li><a className="dropdown-item" href="/property/Yu-Gi-Oh">Yu-Gi-Oh</a></li>
              </ul>
            </li>     
 
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Comics
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/property/DC Comics: Classic Batman">DC Comics: Classic Batman</a></li>
              <li><a className="dropdown-item" href="/property/DC Comics: Justice League">DC Comics: Justice League</a></li>
              <li><a className="dropdown-item" href="/property/DC Comics: Rebirth">DC Comics: Rebirth</a></li>
              <li><a className="dropdown-item" href="/property/Deadpool">Deadpool</a></li>
              <li><a className="dropdown-item" href="/property/Marvel Classic Comics">Marvel Classic Comics</a></li>
              <li><a className="dropdown-item" href="/property/Spider-Man: Maximum Venom">Spider-Man: Maximum Venom</a></li>
              </ul>
            </li>        
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Games
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/property/Assassin's Creed">Assassin's Creed</a></li>
              <li><a className="dropdown-item" href="/property/Avengers">Avengers</a></li>              
              <li><a className="dropdown-item" href="/property/Borderlands3">Borderlands3</a></li>
              <li><a className="dropdown-item" href="/property/Call of Duty: Black Ops 4">Call of Duty: Black Ops 4</a></li>
              <li><a className="dropdown-item" href="/property/Contest of Champions">Contest of Champions</a></li>
              <li><a className="dropdown-item" href="/property/Crash Bandicoot">Crash Bandicoot</a></li>
              <li><a className="dropdown-item" href="/property/Dark Souls">Dark Souls</a></li>
              <li><a className="dropdown-item" href="/property/Diablo">Diablo</a></li>
              <li><a className="dropdown-item" href="/property/Dragon Ball FighterZ">Dragon Ball FighterZ</a></li>                
              <li><a className="dropdown-item" href="/property/Fallout">Fallout</a></li> 
              <li><a className="dropdown-item" href="/property/Gears of War">Gears of War</a></li>
              <li><a className="dropdown-item" href="/property/God of War">God of War</a></li>                  
              <li><a className="dropdown-item" href="/property/Half Life 2">Half Life 2</a></li>
              <li><a className="dropdown-item" href="/property/Halo">Halo</a></li>
              <li><a className="dropdown-item" href="/property/Hearthstone">Hearthstone</a></li>
              <li><a className="dropdown-item" href="/property/Holy Diver">Holy Diver</a></li>
              <li><a className="dropdown-item" href="/property/Injustice 2">Injustice 2</a></li>
              <li><a className="dropdown-item" href="/property/Kingdom Hearts">Kingdom Hearts</a></li>     
              <li><a className="dropdown-item" href="/property/Mass Effect">Mass Effect</a></li>
              <li><a className="dropdown-item" href="/property/Mortal Kombat X">Mortal Kombat X</a></li>   
              <li><a className="dropdown-item" href="/property/Ni No Kuni 2">Ni No Kuni 2</a></li>   
              <li><a className="dropdown-item" href="/property/Overwatch">Overwatch</a></li>
              <li><a className="dropdown-item" href="/property/Persona 5">Persona 5</a></li>
              <li><a className="dropdown-item" href="/property/Portal 2">Portal 2</a></li>
              <li><a className="dropdown-item" href="/property/PUBG">PUBG</a></li>
              <li><a className="dropdown-item" href="/property/Rainbow6">Rainbow6</a></li>
              <li><a className="dropdown-item" href="/property/Sonic The Hedgehog">Sonic The Hedgehog</a></li>   
              <li><a className="dropdown-item" href="/property/Soul Calibur VI">Soul Calibur VI</a></li>                 
              <li><a className="dropdown-item" href="/property/Spider-Man Game">Spider-Man Game</a></li> 
              <li><a className="dropdown-item" href="/property/Spyro the Dragon">Spyro the Dragon</a></li> 
              <li><a className="dropdown-item" href="/property/Starcraft">Starcraft</a></li>
              <li><a className="dropdown-item" href="/property/Tekken 7">Tekken 7</a></li>                                   
              <li><a className="dropdown-item" href="/property/World of Warcraft">World of Warcraft</a></li>                    
              </ul>
            </li>    
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Movies
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/property/Alice In Wonderland">Alice In Wonderland</a></li>
              <li><a className="dropdown-item" href="/property/Avengers Endgame">Avengers Endgame</a></li>
              <li><a className="dropdown-item" href="/property/Avengers Infinity War">Avengers Infinity War</a></li>
              <li><a className="dropdown-item" href="/property/Big Hero 6">Big Hero 6</a></li>
              <li><a className="dropdown-item" href="/property/Black Panther Wakanda Forever">Black Panther Wakanda Forever</a></li>
              <li><a className="dropdown-item" href="/property/Black Widow">Black Widow</a></li>
              <li><a className="dropdown-item" href="/property/The Blues Brothers">The Blues Brothers</a></li>
              <li><a className="dropdown-item" href="/property/Captain Marvel">Captain Marvel</a></li>
              <li><a className="dropdown-item" href="/property/Disney Classics">Disney Classics</a></li>
              <li><a className="dropdown-item" href="/property/Disney Princesses">Disney Princesses</a></li>
              <li><a className="dropdown-item" href="/property/Disney Villains">Disney Villains</a></li>
              <li><a className="dropdown-item" href="/property/Fantasia">Fantasia</a></li>
              <li><a className="dropdown-item" href="/property/Godzilla">Godzilla</a></li>
              <li><a className="dropdown-item" href="/property/Harry Potter">Harry Potter</a></li>
              <li><a className="dropdown-item" href="/property/Incredibles2">Incredibles2</a></li>
              <li><a className="dropdown-item" href="/property/IT">IT</a></li>
              <li><a className="dropdown-item" href="/property/Justice League 2017">Justice League 2017</a></li>
              <li><a className="dropdown-item" href="/property/Lilo and Stitch">Lilo & Stitch</a></li>
              <li><a className="dropdown-item" href="/property/The Lion King">The Lion King</a></li>
              <li><a className="dropdown-item" href="/property/Mickey Mouse and Friends">Mickey Mouse & Friends</a></li>
              <li><a className="dropdown-item" href="/property/Monsters, Inc.">Monsters, Inc.</a></li>
              <li><a className="dropdown-item" href="/property/Nightmare Before Christmas">Nightmare Before Christmas</a></li>
              <li><a className="dropdown-item" href="/property/Onward">Onward</a></li>
              <li><a className="dropdown-item" href="/property/Raya and The Last Dragon">Raya and The Last Dragon</a></li>
              <li><a className="dropdown-item" href="/property/Spider-Man: Into the Spider-Verse">Spider-Man: Into the Spider-Verse</a></li>
              <li><a className="dropdown-item" href="/property/Spider-Man: No Way Home">Spider-Man: No Way Home</a></li>
              <li><a className="dropdown-item" href="/property/Star Wars">Star Wars</a></li>
              <li><a className="dropdown-item" href="/property/Star Wars The Force Awakens">Star Wars The Force Awakens</a></li>
              <li><a className="dropdown-item" href="/property/Thor Love and Thunder">Thor Love & Thunder</a></li>
              <li><a className="dropdown-item" href="/property/Toy Story">Toy Story</a></li>
              <li><a className="dropdown-item" href="/property/WALL-E">WALL-E</a></li>
              <li><a className="dropdown-item" href="/property/Winnie the Pooh">Winnie the Pooh</a></li>
              </ul>
            </li>        

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                TV
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/property/Aggretsuko">Aggretsuko</a></li>
              <li><a className="dropdown-item" href="/property/Avatar The Last Airbender">Avatar The Last Airbender</a></li>
              <li><a className="dropdown-item" href="/property/Batman The Animated Series">Batman The Animated Series</a></li>
              <li><a className="dropdown-item" href="/property/Care Bears">Care Bears</a></li>
              <li><a className="dropdown-item" href="/property/The Falcon and the Winter Soldier">The Falcon and the Winter Soldier</a></li>
              <li><a className="dropdown-item" href="/property/Looney Tunes">Looney Tunes</a></li>
              <li><a className="dropdown-item" href="/property/MTV">MTV</a></li>
              <li><a className="dropdown-item" href="/property/MTV Beavis and Butt-Head">MTV Beavis & Butt-Head</a></li>
              <li><a className="dropdown-item" href="/property/Scooby-Doo!">Scooby-Doo!</a></li>
              <li><a className="dropdown-item" href="/property/The Simpsons">The Simpsons</a></li>
              <li><a className="dropdown-item" href="/property/South Park">South Park</a></li>
              <li><a className="dropdown-item" href="/property/Spider-Man Animated">Spider-Man Animated</a></li>
              <li><a className="dropdown-item" href="/property/SpongeBob SquarePants">SpongeBob SquarePants</a></li>
              <li><a className="dropdown-item" href="/property/Squid Game">Squid Game</a></li>
              <li><a className="dropdown-item" href="/property/Star Wars The Bad Batch">Star Wars The Bad Batch</a></li>
              <li><a className="dropdown-item" href="/property/Star Wars The Book of Boba Fett">Star Wars The Book of Boba Fett</a></li>
              <li><a className="dropdown-item" href="/property/Star Wars The Clone Wars">Star Wars The Clone Wars</a></li>
              <li><a className="dropdown-item" href="/property/Star Wars The Mandalorian">Star Wars The Mandalorian</a></li>
              <li><a className="dropdown-item" href="/property/Star Wars Obi-Wan Kenobi">Star Wars Obi-Wan Kenobi</a></li>
              <li><a className="dropdown-item" href="/property/Stranger Things">Stranger Things</a></li>
              <li><a className="dropdown-item" href="/property/Teenage Mutant Ninja Turtles Animated">Teenage Mutant Ninja Turtles Animated</a></li>        
              <li><a className="dropdown-item" href="/property/Transformers">Transformers</a></li>
              <li><a className="dropdown-item" href="/property/WandaVision">WandaVision</a></li>
              <li><a className="dropdown-item" href="/property/What If">What If...?</a></li>
              <li><a className="dropdown-item" href="/property/X-Men Animated">X-Men Animated</a></li>      
              </ul>
            </li>            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Misc
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/property/ACDC High Voltage">AC/DC: High Voltage</a></li>
              <li><a className="dropdown-item" href="/property/Alien Remix">Alien Remix</a></li>
              <li><a className="dropdown-item" href="/property/Bruce Lee">Bruce Lee</a></li>                
              <li><a className="dropdown-item" href="/property/Cities">Cities</a></li>
              <li><a className="dropdown-item" href="/property/David Bowie">David Bowie</a></li>    
              <li><a className="dropdown-item" href="/property/DesignerCon">DesignerCon</a></li>
              <li><a className="dropdown-item" href="/property/Disney Parks">Disney Parks</a></li>     
              <li><a className="dropdown-item" href="/property/Gudetama">Gudetama</a></li>
              <li><a className="dropdown-item" href="/property/Hello Kitty and Friends">Hello Kitty and Friends</a></li>
              <li><a className="dropdown-item" href="/property/KISS">KISS</a></li>              
              <li><a className="dropdown-item" href="/licensor/MLB">MLB</a></li>
              <li><a className="dropdown-item" href="/licensor/NBA">NBA</a></li>
              <li><a className="dropdown-item" href="/licensor/WWE">WWE</a></li>
              </ul>
            </li>   
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Variants
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/variant/Black and Gold">Black and Gold</a></li>
              <li><a className="dropdown-item" href="/variant/Black and Silver">Black and Silver</a></li>
              <li><a className="dropdown-item" href="/variant/Black Nickel">Black Nickel</a></li>
              <li><a className="dropdown-item" href="/tags/Glitter">Glitter</a></li>
              <li><a className="dropdown-item" href="/tags/Glow-in-the-Dark">Glow-in-the-Dark</a></li>
              <li><a className="dropdown-item" href="/variant/Gold">Gold</a></li>
              <li><a className="dropdown-item" href="/variant/Gold Plated">Gold Plated</a></li>
              <li><a className="dropdown-item" href="/variant/Greyscale">Greyscale</a></li>
              <li><a className="dropdown-item" href="/variant/Rainbow Plated">Rainbow Plated</a></li>
              <li><a className="dropdown-item" href="/variant/Raw Gold">Raw Gold</a></li>
              <li><a className="dropdown-item" href="/variant/Sepia Tone">Sepia Tone</a></li>
              <li><a className="dropdown-item" href="/variant/Silver Plated">Silver Plated</a></li>
              <li><a className="dropdown-item" href="/variant/White and Black Nickel">White and Black Nickel</a></li>
              <li><a className="dropdown-item" href="/variant/White and Gold">White and Gold</a></li>
              <li><a className="dropdown-item" href="/variant/White and Silver">White and Silver</a></li>
              </ul>
            </li>    
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tags
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/pins">See All Pins</a></li>
              <li><a className="dropdown-item" href="/tags/2-Pack">2-Pack</a></li>
              <li><a className="dropdown-item" href="/tags/Chase">Chase</a></li>
              <li><a className="dropdown-item" href="/tags/D23 Expo">D23 Expo</a></li>
              <li><a className="dropdown-item" href="/tags/ECCC">ECCC</a></li>
              <li><a className="dropdown-item" href="/tags/Eligible%20for%20chase">Eligible For Chase</a></li>
              <li><a className="dropdown-item" href="/tags/FiGPiN.com">FiGPiN.com</a></li>
              <li><a className="dropdown-item" href="/tags/FiGPiN%20Event">FiGPiN Event</a></li>
              <li><a className="dropdown-item" href="/availability/FiGPiN%20Ultra">FiGPiN Ultra</a></li>
              <li><a className="dropdown-item" href="/tags/Hard to Find">Hard To Find</a></li>
              <li><a className="dropdown-item" href="/tags/Holiday">Holiday</a></li>
              <li><a className="dropdown-item" href="/availability/Limited%20Edition">Limited Edition</a></li>
              <li><a className="dropdown-item" href="/type/Logo">Logo</a></li>
              <li><a className="dropdown-item" href="/type/Mini">Mini</a></li>
              <li><a className="dropdown-item" href="/tags/NYCC">NYCC</a></li>
              <li><a className="dropdown-item" href="/tags/SDCC">SDCC</a></li>
              <li><a className="dropdown-item" href="/tags/Star Wars Celebration">Star Wars Celebration</a></li>              
              <li><a className="dropdown-item" href="/tags/Very Hard To Find">Very Hard To Find</a></li>
              <li><a className="dropdown-item" href="/type/XL">XL</a></li>
              </ul>
            </li> 
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Info
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/new">New Releases</a></li>
              <li><a className="dropdown-item" href="/2021">2021 Releases</a></li>
              <li><a className="dropdown-item" href="/2020">2020 Releases</a></li>
              <li><a className="dropdown-item" href="/preorders">Preorders</a></li>
              <li><a className="dropdown-item" href="/events">Events</a></li>
              <li><a className="dropdown-item" href="/sets">Sets</a></li>
              <li><a className="dropdown-item" href="/calendar">Launch Calendar</a></li>
              <li><a className="dropdown-item" href="/where">Where To Buy</a></li>
              <li><a className="dropdown-item" href="/resources">Resources</a></li>
              <li><a className="dropdown-item" href="/app-breakdown">App Breakdown</a></li>
              <li><a className="dropdown-item" href="/scoring">Scoring</a></li>
              <li><a className="dropdown-item" href="/iglinks">Instagram Links</a></li>
              </ul>
            </li>             
            
            
{/*
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
              </a>
              { isAuthenticated ? (
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li> <a className="dropdown-item" href="" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</a></li>
              <li><a className="dropdown-item" href="/where">{user.name}'s Profile</a></li>
              </ul>
              ) : (
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="" onClick={() => loginWithRedirect()}>Log In</a></li>
                </ul>
              )}
            </li>
              */}

          </ul>
        </div>
      </div>
    </nav>



  </div>
  );
}

export default GlobalNav;
