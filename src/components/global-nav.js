import React from "react";
import { Link } from "react-router-dom";

function GlobalNav() {
  return (
    <div className="App">
 
 <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><img width="30" src="/fdb-logo.png"></img></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Anime
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/property/Astro Boy">Astro Boy</a></li>
              <li><a class="dropdown-item" href="/property/Cannon Busters">Cannon Busters</a></li>
              <li><a class="dropdown-item" href="/property/Demon Slayer">Demon Slayer</a></li>
              <li><a class="dropdown-item" href="/property/Dr. Stone">Dr. Stone</a></li>
              <li><a class="dropdown-item" href="/property/Dragon Ball">Dragon Ball</a></li>
              <li><a class="dropdown-item" href="/property/Dragon Ball GT">Dragon Ball GT</a></li>
              <li><a class="dropdown-item" href="/property/Dragon Ball Super">Dragon Ball Super</a></li>
              <li><a class="dropdown-item" href="/property/Dragon Ball Super Broly Movie">Dragon Ball Super Broly Movie</a></li>
              <li><a class="dropdown-item" href="/property/Dragon Ball Z">Dragon Ball Z</a></li>
              <li><a class="dropdown-item" href="/property/Full Metal Alchemist">Full Metal Alchemist</a></li>
              <li><a class="dropdown-item" href="/property/Mob Psycho">Mob Psycho</a></li>
              <li><a class="dropdown-item" href="/property/My Hero Academia">My Hero Academia</a></li>
              <li><a class="dropdown-item" href="/property/Naruto">Naruto</a></li>
              <li><a class="dropdown-item" href="/property/Neon Genesis Evangelion">Neon Genesis Evangelion</a></li>
              <li><a class="dropdown-item" href="/property/One Punch Man">One Punch Man</a></li>
              <li><a class="dropdown-item" href="/property/Sanrio x My Hero Academia">Sanrio x My Hero Academia</a></li>              
              </ul>
            </li>        

          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Comics
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/property/DC Comics: Classic Batman">DC Comics: Classic Batman</a></li>
              <li><a class="dropdown-item" href="/property/DC Comics: Justice League">DC Comics: Justice League</a></li>
              <li><a class="dropdown-item" href="/property/DC Comics: Rebirth">DC Comics: Rebirth</a></li>
              <li><a class="dropdown-item" href="/property/Deadpool">Deadpool</a></li>
              <li><a class="dropdown-item" href="/property/Marvel Comics Retro">Marvel Comics Retro</a></li>
              <li><a class="dropdown-item" href="/property/Spider-Man: Maximum Venom">Spider-Man: Maximum Venom</a></li>
              </ul>
            </li>        
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Games
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/property/Assassin's Creed">Assassin's Creed</a></li>
              <li><a class="dropdown-item" href="/property/Avengers">Avengers</a></li>              
              <li><a class="dropdown-item" href="/property/Borderlands3">Borderlands3</a></li>
              <li><a class="dropdown-item" href="/property/Call of Duty: Black Ops 4">Call of Duty: Black Ops 4</a></li>
              <li><a class="dropdown-item" href="/property/Contest of Champions">Contest of Champions</a></li>
              <li><a class="dropdown-item" href="/property/Crash Bandicoot">Crash Bandicoot</a></li>
              <li><a class="dropdown-item" href="/property/Dark Souls">Dark Souls</a></li>
              <li><a class="dropdown-item" href="/property/Dragon Ball FighterZ">Dragon Ball FighterZ</a></li>                
              <li><a class="dropdown-item" href="/property/Fallout">Fallout</a></li> 
              <li><a class="dropdown-item" href="/property/Gears of War">Gears of War</a></li>
              <li><a class="dropdown-item" href="/property/God of War">God of War</a></li>                  
              <li><a class="dropdown-item" href="/property/Half Life 2">Half Life 2</a></li>
              <li><a class="dropdown-item" href="/property/Halo">Halo</a></li>
              <li><a class="dropdown-item" href="/property/Hearthstone">Hearthstone</a></li>
              <li><a class="dropdown-item" href="/property/Holy Diver">Holy Diver</a></li>
              <li><a class="dropdown-item" href="/property/Injustice 2">Injustice 2</a></li>
              <li><a class="dropdown-item" href="/property/Kingdom Hearts">Kingdom Hearts</a></li>     
              <li><a class="dropdown-item" href="/property/Mass Effect">Mass Effect</a></li>
              <li><a class="dropdown-item" href="/property/Mortal Kombat X">Mortal Kombat X</a></li>   
              <li><a class="dropdown-item" href="/property/Ni No Kuni 2">Ni No Kuni 2</a></li>   
              <li><a class="dropdown-item" href="/property/Overwatch">Overwatch</a></li>
              <li><a class="dropdown-item" href="/property/Persona 5">Persona 5</a></li>
              <li><a class="dropdown-item" href="/property/Portal 2">Portal 2</a></li>
              <li><a class="dropdown-item" href="/property/PUBG">PUBG</a></li>
              <li><a class="dropdown-item" href="/property/Rainbow6">Rainbow6</a></li>
              <li><a class="dropdown-item" href="/property/Sonic The Hedgehog">Sonic The Hedgehog</a></li>   
              <li><a class="dropdown-item" href="/property/Soul Calibur VI">Soul Calibur VI</a></li>                 
              <li><a class="dropdown-item" href="/property/Spider-Man Game">Spider-Man Game</a></li> 
              <li><a class="dropdown-item" href="/property/Spyro the Dragon">Spyro the Dragon</a></li> 
              <li><a class="dropdown-item" href="/property/Tekken 7">Tekken 7</a></li>                                   
              <li><a class="dropdown-item" href="/property/World of Warcraft">World of Warcraft</a></li>                    
              </ul>
            </li>    
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Movies
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/property/Alice In Wonderland">Alice In Wonderland</a></li>
              <li><a class="dropdown-item" href="/property/Avengers Endgame">Avengers Endgame</a></li>
              <li><a class="dropdown-item" href="/property/Avengers Infinity War">Avengers Infinity War</a></li>
              <li><a class="dropdown-item" href="/property/Big Hero 6">Big Hero 6</a></li>
              <li><a class="dropdown-item" href="/property/Black Widow">Black Widow</a></li>
              <li><a class="dropdown-item" href="/property/Captain Marvel">Captain Marvel</a></li>
              <li><a class="dropdown-item" href="/property/Disney Classic">Disney Classic</a></li>
              <li><a class="dropdown-item" href="/property/Disney Princesses">Disney Princesses</a></li>
              <li><a class="dropdown-item" href="/property/Disney Villains">Disney Villains</a></li>
              <li><a class="dropdown-item" href="/property/Fantasia">Fantasia</a></li>
              <li><a class="dropdown-item" href="/property/Godzilla">Godzilla</a></li>
              <li><a class="dropdown-item" href="/property/Harry Potter">Harry Potter</a></li>
              <li><a class="dropdown-item" href="/property/Incredibles2">Incredibles2</a></li>
              <li><a class="dropdown-item" href="/property/IT">IT</a></li>
              <li><a class="dropdown-item" href="/property/Justice League 2017">Justice League 2017</a></li>
              <li><a class="dropdown-item" href="/property/Lilo and Stitch">Lilo & Stitch</a></li>
              <li><a class="dropdown-item" href="/property/Mickey Mouse and Friends">Mickey Mouse & Friends</a></li>
              <li><a class="dropdown-item" href="/property/Nightmare Before Christmas">Nightmare Before Christmas</a></li>
              <li><a class="dropdown-item" href="/property/Onward">Onward</a></li>
              <li><a class="dropdown-item" href="/property/Raya and The Last Dragon">Raya and The Last Dragon</a></li>
              <li><a class="dropdown-item" href="/property/Spider-Man: Into the Spider-Verse">Spider-Man: Into the Spider-Verse</a></li>
              <li><a class="dropdown-item" href="/property/Star Wars">Star Wars</a></li>
              <li><a class="dropdown-item" href="/property/Toy Story 4">Toy Story 4</a></li>
              <li><a class="dropdown-item" href="/property/WALL-E">WALL-E</a></li>
              </ul>
            </li>        

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                TV
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/property/Aggretsuko">Aggretsuko</a></li>
              <li><a class="dropdown-item" href="/property/Avatar The Last Airbender">Avatar The Last Airbender</a></li>
              <li><a class="dropdown-item" href="/property/Batman The Animated Series">Batman The Animated Series</a></li>
              <li><a class="dropdown-item" href="/property/Care Bears">Care Bears</a></li>
              <li><a class="dropdown-item" href="/property/Looney Tunes">Looney Tunes</a></li>
              <li><a class="dropdown-item" href="/property/MTV">MTV</a></li>
              <li><a class="dropdown-item" href="/property/MTV Beavis and Butt-Head">MTV Beavis & Butt-Head</a></li>
              <li><a class="dropdown-item" href="/property/Scooby-Doo!">Scooby-Doo!</a></li>
              <li><a class="dropdown-item" href="/property/SpongeBob SquarePants">SpongeBob SquarePants</a></li>
              <li><a class="dropdown-item" href="/property/Star Wars Clone Wars">Star Wars Clone Wars</a></li>
              <li><a class="dropdown-item" href="/property/Star Wars The Bad Batch">Star Wars The Bad Batch</a></li>
              <li><a class="dropdown-item" href="/property/Star Wars The Mandalorian">Star Wars The Mandalorian</a></li>
              <li><a class="dropdown-item" href="/property/Stranger Things">Stranger Things</a></li>
              <li><a class="dropdown-item" href="/property/Teenage Mutant Ninja Turtles Animated">Teenage Mutant Ninja Turtles Animated</a></li>        
              <li><a class="dropdown-item" href="/property/The Falcon and the Winter Soldier">The Falcon and the Winter Soldier</a></li>
              <li><a class="dropdown-item" href="/property/Transformers">Transformers</a></li>
              <li><a class="dropdown-item" href="/property/WandaVision">WandaVision</a></li>
              <li><a class="dropdown-item" href="/property/X-Men Animated">X-Men Animated</a></li>      
              </ul>
            </li>            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Misc
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/property/ACDC High Voltage">AC/DC: High Voltage</a></li>
              <li><a class="dropdown-item" href="/property/Alien Remix">Alien Remix</a></li>
              <li><a class="dropdown-item" href="/property/Bruce Lee">Bruce Lee</a></li>                
              <li><a class="dropdown-item" href="/property/David Bowie">David Bowie</a></li>    
              <li><a class="dropdown-item" href="/property/DesignerCon">DesignerCon</a></li>     
              <li><a class="dropdown-item" href="/property/FiGPiN Logo Pin">FiGPiN Logo Pin</a></li>
              <li><a class="dropdown-item" href="/property/Gudetama">Gudetama</a></li>
              <li><a class="dropdown-item" href="/property/Hello Kitty">Hello Kitty</a></li>
              <li><a class="dropdown-item" href="/property/House of Blues">House of Blues</a></li>
              <li><a class="dropdown-item" href="/property/KISS">KISS</a></li>
              <li><a class="dropdown-item" href="/property/New York Mets">New York Mets</a></li>
              <li><a class="dropdown-item" href="/property/Philadelphia 76ers">Philadelphia 76ers</a></li>
              <li><a class="dropdown-item" href="/property/San Francisco Giants">San Francisco Giants</a></li>
              <li><a class="dropdown-item" href="/property/WWE: Legends">WWE: Legends</a></li>
              <li><a class="dropdown-item" href="/property/WWE: Superstars">WWE: Superstars</a></li>
              </ul>
            </li>   
            {/*    
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Licensor
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/licensor/Activision">Activision</a></li>
<li><a class="dropdown-item" href="/licensor/Anime Limited">Anime Limited</a></li>
<li><a class="dropdown-item" href="/licensor/Aniplex of America">Aniplex of America</a></li>
<li><a class="dropdown-item" href="/licensor/Atlus">Atlus</a></li>
<li><a class="dropdown-item" href="/licensor/Bandai Namco">Bandai Namco</a></li>
<li><a class="dropdown-item" href="/licensor/Bethesda">Bethesda</a></li>
<li><a class="dropdown-item" href="/licensor/BioWare">BioWare</a></li>
<li><a class="dropdown-item" href="/licensor/Bruce Lee">Bruce Lee</a></li>
<li><a class="dropdown-item" href="/licensor/Cloudco Entertainment">Cloudco Entertainment</a></li>
<li><a class="dropdown-item" href="/licensor/Crunchyroll">Crunchyroll</a></li>
<li><a class="dropdown-item" href="/licensor/DesignerCon">DesignerCon</a></li>
<li><a class="dropdown-item" href="/licensor/Disney">Disney</a></li>
<li><a class="dropdown-item" href="/licensor/Epic Rights">Epic Rights</a></li>
<li><a class="dropdown-item" href="/licensor/FiGPiN">FiGPiN</a></li>
<li><a class="dropdown-item" href="/licensor/Funimation">Funimation</a></li>
<li><a class="dropdown-item" href="/licensor/Gearbox">Gearbox</a></li>
<li><a class="dropdown-item" href="/licensor/Hasbro">Hasbro</a></li>
<li><a class="dropdown-item" href="/licensor/Irem">Irem</a></li>
<li><a class="dropdown-item" href="/licensor/Kobunsha">Kobunsha</a></li>
<li><a class="dropdown-item" href="/licensor/LiveNation">LiveNation</a></li>
<li><a class="dropdown-item" href="/licensor/Lucasfilm">Lucasfilm</a></li>
<li><a class="dropdown-item" href="/licensor/Manga">Manga</a></li>
<li><a class="dropdown-item" href="/licensor/Marvel">Marvel</a></li>
<li><a class="dropdown-item" href="/licensor/Microsoft">Microsoft</a></li>
<li><a class="dropdown-item" href="/licensor/MLB">MLB</a></li>
<li><a class="dropdown-item" href="/licensor/NBA">NBA</a></li>
<li><a class="dropdown-item" href="/licensor/Netflix">Netflix</a></li>
<li><a class="dropdown-item" href="/licensor/Perryscope">Perryscope</a></li>
<li><a class="dropdown-item" href="/licensor/PUBG Corporation">PUBG Corporation</a></li>
<li><a class="dropdown-item" href="/licensor/Sanrio">Sanrio</a></li>
<li><a class="dropdown-item" href="/licensor/Sega">Sega</a></li>
<li><a class="dropdown-item" href="/licensor/Sony">Sony</a></li>
<li><a class="dropdown-item" href="/licensor/Toho">Toho</a></li>
<li><a class="dropdown-item" href="/licensor/Ubisoft">Ubisoft</a></li>
<li><a class="dropdown-item" href="/licensor/Valve">Valve</a></li>
<li><a class="dropdown-item" href="/licensor/Viacom">Viacom</a></li>
<li><a class="dropdown-item" href="/licensor/Viz Media">Viz Media</a></li>
<li><a class="dropdown-item" href="/licensor/Warner Bros.">Warner Bros.</a></li>
<li><a class="dropdown-item" href="/licensor/WWE">WWE</a></li>
              </ul>
            </li>   
            */}
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Variants
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/variant/Black and Gold">Black and Gold</a></li>
              <li><a class="dropdown-item" href="/variant/Black Nickel">Black Nickel</a></li>
              <li><a class="dropdown-item" href="/variant/Glitter">Glitter</a></li>
              <li><a class="dropdown-item" href="/variant/Glow-in-the-Dark">Glow-in-the-Dark</a></li>
              <li><a class="dropdown-item" href="/variant/Gold">Gold</a></li>
              <li><a class="dropdown-item" href="/variant/Gold Plated">Gold Plated</a></li>
              <li><a class="dropdown-item" href="/variant/Greyscale">Greyscale</a></li>
              <li><a class="dropdown-item" href="/variant/Infinity Stone">Infinity Stone</a></li>
              <li><a class="dropdown-item" href="/variant/Sepia Tone">Sepia Tone</a></li>
              <li><a class="dropdown-item" href="/variant/Silver Plated">Silver Plated</a></li>
              <li><a class="dropdown-item" href="/variant/White and Black Nickel">White and Black Nickel</a></li>
              <li><a class="dropdown-item" href="/variant/White and Gold">White and Gold</a></li>
              </ul>
            </li>    
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tags
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/tags/2-Pack">2-Pack</a></li>
              <li><a class="dropdown-item" href="/tags/AwesomeFest">AwesomeFest</a></li>
              <li><a class="dropdown-item" href="/tags/Chase">Chase</a></li>
              <li><a class="dropdown-item" href="/tags/D23 Expo">D23 Expo</a></li>
              <li><a class="dropdown-item" href="/tags/ECCC">ECCC</a></li>
              <li><a class="dropdown-item" href="/tags/Halloween">Halloween</a></li>
              <li><a class="dropdown-item" href="/tags/LACC">LACC</a></li>
              <li><a class="dropdown-item" href="/tags/NYCC">NYCC</a></li>
              <li><a class="dropdown-item" href="/tags/SDCC">SDCC</a></li>
              </ul>

            </li>                
          </ul>
        </div>
      </div>
    </nav>



  </div>
  );
}

export default GlobalNav;
