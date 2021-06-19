import React from "react";
import Search from '../components/search'
import { Link } from "react-router-dom"
import LoginButton from "../components/login-button"
import LogoutButton from "../components/logout-button"
import Profile from "../components/profile";
import Nav from "../components/nav"
import { useAuth0 } from "@auth0/auth0-react";

function GlobalNav() {
  const { user, user_id, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  return (
    <div className="App">
 <Search/>
 
 <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/"><img width="30" alt="FigpinDB" src="/fdb-logo.png"></img></Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Anime
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/property/Astro Boy">Astro Boy</Link></li>
              <li><Link className="dropdown-item" to="/property/Cannon Busters">Cannon Busters</Link></li>
              <li><Link className="dropdown-item" to="/property/Demon Slayer">Demon Slayer</Link></li>
              <li><Link className="dropdown-item" to="/property/Dr. Stone">Dr. Stone</Link></li>
              <li><Link className="dropdown-item" to="/property/Dragon Ball">Dragon Ball</Link></li>
              <li><Link className="dropdown-item" to="/property/Dragon Ball GT">Dragon Ball GT</Link></li>
              <li><Link className="dropdown-item" to="/property/Dragon Ball Super">Dragon Ball Super</Link></li>
              <li><Link className="dropdown-item" to="/property/Dragon Ball Super Broly Movie">Dragon Ball Super Broly Movie</Link></li>
              <li><Link className="dropdown-item" to="/property/Dragon Ball Z">Dragon Ball Z</Link></li>
              <li><Link className="dropdown-item" to="/property/Full Metal Alchemist">Full Metal Alchemist</Link></li>
              <li><Link className="dropdown-item" to="/property/Mob Psycho">Mob Psycho</Link></li>
              <li><Link className="dropdown-item" to="/property/My Hero Academia">My Hero Academia</Link></li>
              <li><Link className="dropdown-item" to="/property/Naruto">Naruto</Link></li>
              <li><Link className="dropdown-item" to="/property/Neon Genesis Evangelion">Neon Genesis Evangelion</Link></li>
              <li><Link className="dropdown-item" to="/property/One Punch Man">One Punch Man</Link></li>
              <li><Link className="dropdown-item" to="/property/Sanrio x My Hero Academia">Sanrio x My Hero Academia</Link></li>              
              </ul>
            </li>        

          <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Comics
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/property/DC Comics: Classic Batman">DC Comics: Classic Batman</Link></li>
              <li><Link className="dropdown-item" to="/property/DC Comics: Justice League">DC Comics: Justice League</Link></li>
              <li><Link className="dropdown-item" to="/property/DC Comics: Rebirth">DC Comics: Rebirth</Link></li>
              <li><Link className="dropdown-item" to="/property/Deadpool">Deadpool</Link></li>
              <li><Link className="dropdown-item" to="/property/Marvel Comics Retro">Marvel Comics Retro</Link></li>
              <li><Link className="dropdown-item" to="/property/Spider-Man: Maximum Venom">Spider-Man: Maximum Venom</Link></li>
              </ul>
            </li>        
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Games
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/property/Assassin's Creed">Assassin's Creed</Link></li>
              <li><Link className="dropdown-item" to="/property/Avengers">Avengers</Link></li>              
              <li><Link className="dropdown-item" to="/property/Borderlands3">Borderlands3</Link></li>
              <li><Link className="dropdown-item" to="/property/Call of Duty: Black Ops 4">Call of Duty: Black Ops 4</Link></li>
              <li><Link className="dropdown-item" to="/property/Contest of Champions">Contest of Champions</Link></li>
              <li><Link className="dropdown-item" to="/property/Crash Bandicoot">Crash Bandicoot</Link></li>
              <li><Link className="dropdown-item" to="/property/Dark Souls">Dark Souls</Link></li>
              <li><Link className="dropdown-item" to="/property/Dragon Ball FighterZ">Dragon Ball FighterZ</Link></li>                
              <li><Link className="dropdown-item" to="/property/Fallout">Fallout</Link></li> 
              <li><Link className="dropdown-item" to="/property/Gears of War">Gears of War</Link></li>
              <li><Link className="dropdown-item" to="/property/God of War">God of War</Link></li>                  
              <li><Link className="dropdown-item" to="/property/Half Life 2">Half Life 2</Link></li>
              <li><Link className="dropdown-item" to="/property/Halo">Halo</Link></li>
              <li><Link className="dropdown-item" to="/property/Hearthstone">Hearthstone</Link></li>
              <li><Link className="dropdown-item" to="/property/Holy Diver">Holy Diver</Link></li>
              <li><Link className="dropdown-item" to="/property/Injustice 2">Injustice 2</Link></li>
              <li><Link className="dropdown-item" to="/property/Kingdom Hearts">Kingdom Hearts</Link></li>     
              <li><Link className="dropdown-item" to="/property/Mass Effect">Mass Effect</Link></li>
              <li><Link className="dropdown-item" to="/property/Mortal Kombat X">Mortal Kombat X</Link></li>   
              <li><Link className="dropdown-item" to="/property/Ni No Kuni 2">Ni No Kuni 2</Link></li>   
              <li><Link className="dropdown-item" to="/property/Overwatch">Overwatch</Link></li>
              <li><Link className="dropdown-item" to="/property/Persona 5">Persona 5</Link></li>
              <li><Link className="dropdown-item" to="/property/Portal 2">Portal 2</Link></li>
              <li><Link className="dropdown-item" to="/property/PUBG">PUBG</Link></li>
              <li><Link className="dropdown-item" to="/property/Rainbow6">Rainbow6</Link></li>
              <li><Link className="dropdown-item" to="/property/Sonic The Hedgehog">Sonic The Hedgehog</Link></li>   
              <li><Link className="dropdown-item" to="/property/Soul Calibur VI">Soul Calibur VI</Link></li>                 
              <li><Link className="dropdown-item" to="/property/Spider-Man Game">Spider-Man Game</Link></li> 
              <li><Link className="dropdown-item" to="/property/Spyro the Dragon">Spyro the Dragon</Link></li> 
              <li><Link className="dropdown-item" to="/property/Tekken 7">Tekken 7</Link></li>                                   
              <li><Link className="dropdown-item" to="/property/World of Warcraft">World of Warcraft</Link></li>                    
              </ul>
            </li>    
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Movies
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/property/Alice In Wonderland">Alice In Wonderland</Link></li>
              <li><Link className="dropdown-item" to="/property/Avengers Endgame">Avengers Endgame</Link></li>
              <li><Link className="dropdown-item" to="/property/Avengers Infinity War">Avengers Infinity War</Link></li>
              <li><Link className="dropdown-item" to="/property/Big Hero 6">Big Hero 6</Link></li>
              <li><Link className="dropdown-item" to="/property/Black Widow">Black Widow</Link></li>
              <li><Link className="dropdown-item" to="/property/Captain Marvel">Captain Marvel</Link></li>
              <li><Link className="dropdown-item" to="/property/Disney Classic">Disney Classic</Link></li>
              <li><Link className="dropdown-item" to="/property/Disney Princesses">Disney Princesses</Link></li>
              <li><Link className="dropdown-item" to="/property/Disney Villains">Disney Villains</Link></li>
              <li><Link className="dropdown-item" to="/property/Fantasia">Fantasia</Link></li>
              <li><Link className="dropdown-item" to="/property/Godzilla">Godzilla</Link></li>
              <li><Link className="dropdown-item" to="/property/Harry Potter">Harry Potter</Link></li>
              <li><Link className="dropdown-item" to="/property/Incredibles2">Incredibles2</Link></li>
              <li><Link className="dropdown-item" to="/property/IT">IT</Link></li>
              <li><Link className="dropdown-item" to="/property/Justice League 2017">Justice League 2017</Link></li>
              <li><Link className="dropdown-item" to="/property/Lilo and Stitch">Lilo & Stitch</Link></li>
              <li><Link className="dropdown-item" to="/property/Mickey Mouse and Friends">Mickey Mouse & Friends</Link></li>
              <li><Link className="dropdown-item" to="/property/Nightmare Before Christmas">Nightmare Before Christmas</Link></li>
              <li><Link className="dropdown-item" to="/property/Onward">Onward</Link></li>
              <li><Link className="dropdown-item" to="/property/Raya and The Last Dragon">Raya and The Last Dragon</Link></li>
              <li><Link className="dropdown-item" to="/property/Spider-Man: Into the Spider-Verse">Spider-Man: Into the Spider-Verse</Link></li>
              <li><Link className="dropdown-item" to="/property/Star Wars">Star Wars</Link></li>
              <li><Link className="dropdown-item" to="/property/Toy Story 4">Toy Story 4</Link></li>
              <li><Link className="dropdown-item" to="/property/WALL-E">WALL-E</Link></li>
              </ul>
            </li>        

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                TV
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/property/Aggretsuko">Aggretsuko</Link></li>
              <li><Link className="dropdown-item" to="/property/Avatar The Last Airbender">Avatar The Last Airbender</Link></li>
              <li><Link className="dropdown-item" to="/property/Batman The Animated Series">Batman The Animated Series</Link></li>
              <li><Link className="dropdown-item" to="/property/Care Bears">Care Bears</Link></li>
              <li><Link className="dropdown-item" to="/property/Looney Tunes">Looney Tunes</Link></li>
              <li><Link className="dropdown-item" to="/property/MTV">MTV</Link></li>
              <li><Link className="dropdown-item" to="/property/MTV Beavis and Butt-Head">MTV Beavis & Butt-Head</Link></li>
              <li><Link className="dropdown-item" to="/property/Scooby-Doo!">Scooby-Doo!</Link></li>
              <li><Link className="dropdown-item" to="/property/SpongeBob SquarePants">SpongeBob SquarePants</Link></li>
              <li><Link className="dropdown-item" to="/property/Star Wars Clone Wars">Star Wars Clone Wars</Link></li>
              <li><Link className="dropdown-item" to="/property/Star Wars The Bad Batch">Star Wars The Bad Batch</Link></li>
              <li><Link className="dropdown-item" to="/property/Star Wars The Mandalorian">Star Wars The Mandalorian</Link></li>
              <li><Link className="dropdown-item" to="/property/Stranger Things">Stranger Things</Link></li>
              <li><Link className="dropdown-item" to="/property/Teenage Mutant Ninja Turtles Animated">Teenage Mutant Ninja Turtles Animated</Link></li>        
              <li><Link className="dropdown-item" to="/property/The Falcon and the Winter Soldier">The Falcon and the Winter Soldier</Link></li>
              <li><Link className="dropdown-item" to="/property/Transformers">Transformers</Link></li>
              <li><Link className="dropdown-item" to="/property/WandaVision">WandaVision</Link></li>
              <li><Link className="dropdown-item" to="/property/X-Men Animated">X-Men Animated</Link></li>      
              </ul>
            </li>            
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Misc
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/property/ACDC High Voltage">AC/DC: High Voltage</Link></li>
              <li><Link className="dropdown-item" to="/property/Alien Remix">Alien Remix</Link></li>
              <li><Link className="dropdown-item" to="/property/Bruce Lee">Bruce Lee</Link></li>                
              <li><Link className="dropdown-item" to="/property/David Bowie">David Bowie</Link></li>    
              <li><Link className="dropdown-item" to="/property/DesignerCon">DesignerCon</Link></li>     
              <li><Link className="dropdown-item" to="/property/Gudetama">Gudetama</Link></li>
              <li><Link className="dropdown-item" to="/property/Hello Kitty">Hello Kitty</Link></li>
              <li><Link className="dropdown-item" to="/property/House of Blues">House of Blues</Link></li>
              <li><Link className="dropdown-item" to="/property/KISS">KISS</Link></li>
              <li><Link className="dropdown-item" to="/property/New York Mets">New York Mets</Link></li>
              <li><Link className="dropdown-item" to="/property/Philadelphia 76ers">Philadelphia 76ers</Link></li>
              <li><Link className="dropdown-item" to="/property/San Francisco Giants">San Francisco Giants</Link></li>
              <li><Link className="dropdown-item" to="/property/WWE: Legends">WWE: Legends</Link></li>
              <li><Link className="dropdown-item" to="/property/WWE: Superstars">WWE: Superstars</Link></li>
              </ul>
            </li>   
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Variants
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/variant/Black and Gold">Black and Gold</Link></li>
              <li><Link className="dropdown-item" to="/variant/Black and Silver">Black and Silver</Link></li>
              <li><Link className="dropdown-item" to="/variant/Black Nickel">Black Nickel</Link></li>
              <li><Link className="dropdown-item" to="/variant/Glitter">Glitter</Link></li>
              <li><Link className="dropdown-item" to="/variant/Glow-in-the-Dark">Glow-in-the-Dark</Link></li>
              <li><Link className="dropdown-item" to="/variant/Gold">Gold</Link></li>
              <li><Link className="dropdown-item" to="/variant/Gold Plated">Gold Plated</Link></li>
              <li><Link className="dropdown-item" to="/variant/Greyscale">Greyscale</Link></li>
              <li><Link className="dropdown-item" to="/variant/Infinity Stone">Infinity Stone</Link></li>
              <li><Link className="dropdown-item" to="/variant/Sepia Tone">Sepia Tone</Link></li>
              <li><Link className="dropdown-item" to="/variant/Silver Plated">Silver Plated</Link></li>
              <li><Link className="dropdown-item" to="/variant/White and Black Nickel">White and Black Nickel</Link></li>
              <li><Link className="dropdown-item" to="/variant/White and Gold">White and Gold</Link></li>
              </ul>
            </li>    
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tags
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/pins">See All Pins</Link></li>
              <li><Link className="dropdown-item" to="/tags/2-Pack">2-Pack</Link></li>
              <li><Link className="dropdown-item" to="/tags/AwesomeFest">AwesomeFest</Link></li>
              <li><Link className="dropdown-item" to="/tags/Chase">Chase</Link></li>
              <li><Link className="dropdown-item" to="/tags/D23 Expo">D23 Expo</Link></li>
              <li><Link className="dropdown-item" to="/tags/ECCC">ECCC</Link></li>
              <li><Link className="dropdown-item" to="/tags/Halloween">Halloween</Link></li>
              <li><Link className="dropdown-item" to="/tags/LACC">LACC</Link></li>
              <li><Link className="dropdown-item" to="/type/Logo">Logo</Link></li>
              <li><Link className="dropdown-item" to="/type/Mini">Mini</Link></li>
              <li><Link className="dropdown-item" to="/tags/NYCC">NYCC</Link></li>
              <li><Link className="dropdown-item" to="/tags/SDCC">SDCC</Link></li>
              <li><Link className="dropdown-item" to="/type/XL">XL</Link></li>
              </ul>
            </li> 
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Info
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/new">New Releases</Link></li>
              <li><Link className="dropdown-item" to="/calendar">Unlock Calendar</Link></li>
              <li><Link className="dropdown-item" to="/where">Where To Buy</Link></li>
              </ul>
            </li>             
            
{/*
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
              </Link>
              { isAuthenticated ? (
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li> <a className="dropdown-item" href="" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</a></li>
              <li><Link className="dropdown-item" to="/where">{user.name}'s Profile</Link></li>
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
