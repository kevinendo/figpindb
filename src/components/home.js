import React from "react";
import { Link } from "react-router-dom";


function Home() {
{/*}
    const response =  fetch('https://figpindb-backend.herokuapp.com/api/v1/figpindb/calendar')
    if (response.ok) {
      console.log("data loaded")
      }
    */}
    return (
        <div className="detail-box">      
<h3 align="center">Welcome to FigpinDB</h3>

<ul className="gallery mw-gallery-traditional">
<li className="gallerybox">
        <a title="New Releases" href="/new"><img alt="New Releases" className="where-image" src="logo_new.png"/></a>
    </li>   
    {/*
    <li className="gallerybox">
        <a title="Giveaway" href="https://www.instagram.com/p/CqtROI_vDwf/" target="_blank"><img alt="Giveaway" className="where-image" src="giveaway-1.png"/></a>
    </li>   
    */}
    <li className="gallerybox">
    <a title="FiGPiN Official Instagram" href="https://www.instagram.com/figpindb/" target="_blank" rel="noreferrer noopener"><img alt="figpindb Instagram" className="where-image" src="logo_fdb_ig.png"/></a>
    </li>       
    <li className="gallerybox">
        <Link title="Assassin's Creed" to="/property/Assassin's Creed"><img alt="Assassin's Creed" className="where-image" src="logo_assassinscreed.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Astro Boy" to="/property/Astro Boy"><img alt="Astro Boy" className="where-image" src="logo_astroboy.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Attack on Titan" to="/property/Attack on Titan"><img alt="Attack on Titan" className="where-image" src="logo_attackontitan.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Avatar The Last Airbender" to="/property/Avatar The Last Airbender"><img alt="Avatar The Last Airbender" className="where-image" src="logo_avatar.png"/></Link>
    </li> 
    <li className="gallerybox">
        <Link title="Disney" to="/licensor/Blizzard"><img alt="Blizzard" className="where-image" src="logo_blizz.png"/></Link>
    </li>          
    <li className="gallerybox">
        <Link title="Borderlands3" to="/property/Borderlands3"><img alt="Borderlands3" className="where-image" src="logo_borderlands3.png"/></Link>
    </li>       
    <li className="gallerybox">
        <Link title="Bruce Lee" to="/property/Bruce Lee"><img alt="Bruce Lee" className="where-image" src="logo_brucelee.png"/></Link>
    </li>         
    <li className="gallerybox">
        <Link title="Call of Duty" to="/property/Call of Duty: Black Ops 4"><img alt="Call of Duty" className="where-image" src="logo_cod.png"/></Link>
    </li>                
    <li className="gallerybox">
        <Link title="Care Bears" to="/property/Care Bears"><img alt="Care Bears" className="where-image" src="logo_carebears.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Chainsaw Man" to="/property/Chainsaw Man"><img alt="Chainsaw Man" className="where-image" src="logo_chainsawman.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Cowboy Bebop" to="/property/Cowboy Bebop"><img alt="Cowboy Bebop" className="where-image" src="logo_cowboy_bebop.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Dark Souls" to="/property/Dark Souls"><img alt="Dark Souls" className="where-image" src="logo_darksouls.png"/></Link>
    </li>                   
    <li className="gallerybox">
        <Link title="Demon Slayer" to="/property/Demon Slayer"><img alt="Demon Slayer" className="where-image" src="logo_demonslayer.png"/></Link>
    </li>       
    <li className="gallerybox">
        <Link title="Disney" to="/licensor/Disney"><img alt="Disney" className="where-image" src="logo_disney.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="DC" to="/licensor/DC"><img alt="DC" className="where-image" src="logo_dc.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Dragon Ball" to="/property/Dragon Ball"><img alt="Dragon Ball" className="where-image" src="logo_dragon_ball.png"/></Link>
    </li>       
    <li className="gallerybox">
        <Link title="Dragon Ball FighterZ" to="/property/Dragon Ball FighterZ"><img alt="Dragon Ball FighterZ" className="where-image" src="logo_dbfighterz.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Dragon Ball GT" to="/property/Dragon Ball GT"><img alt="Dragon Ball GT" className="where-image" src="logo_dbgt.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Dragon Ball Super" to="/property/Dragon Ball Super"><img alt="Dragon Ball Super" className="where-image" src="logo_dbsuper.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Dragon Ball Super Broly Movie" to="/property/Dragon Ball Super Broly Movie"><img alt="Dragon Ball Super Broly Movie" className="where-image" src="logo_broly.png"/></Link>
    </li>       
     <li className="gallerybox">
        <Link title="Dragon Ball Z" to="/property/Dragon Ball Z"><img alt="Dragon Ball Z" className="where-image" src="logo_dbz.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Fallout" to="/property/Fallout"><img alt="Fallout" className="where-image" src="logo_fallout.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Five Nights at Freddy's" to="/property/Five Nights at Freddy's"><img alt="Five Nights at Freddy's" className="where-image" src="logo_fnaf.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Godzilla" to="/property/Godzilla"><img alt="Godzilla" className="where-image" src="logo_godzilla.png"/></Link>
    </li> 
    <li className="gallerybox">
        <Link title="Godzilla" to="/property/Gundam"><img alt="Gundam" className="where-image" src="logo_gundam.png"/></Link>
    </li>       
    <li className="gallerybox">
        <Link title="Halo" to="/property/Halo"><img alt="Halo" className="where-image" src="logo_halo.png"/></Link>
    </li>       
    <li className="gallerybox">
        <Link title="Harry Potter" to="/property/Harry Potter"><img alt="Harry Potter" className="where-image" src="logo_harrypotter.png"/></Link>
    </li>     
    <li className="gallerybox">
        <Link title="Harry Potter" to="/property/Hunter x Hunter"><img alt="Hunter x Hunter" className="where-image" src="logo_hunter.png"/></Link>
    </li>       

    <li className="gallerybox">
        <Link title="Jujutsu Kaisen" to="/property/Jujutsu Kaisen"><img alt="Jujutsu Kaisen" className="where-image" src="logo_jjk.png"/></Link>
    </li>     

    <li className="gallerybox">
        <Link title="KISS" to="/property/KISS"><img alt="KISS" className="where-image" src="logo_kiss.png"/></Link>
    </li>       
    <li className="gallerybox">
        <Link title="The Legend of Korra" to="/property/The Legend of Korra"><img alt="The Legend of Korra" className="where-image" src="logo_korra.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Looney Tunes" to="/property/Looney Tunes"><img alt="Looney Tunes" className="where-image" src="logo_looneytunes.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Marvel" to="/licensor/Marvel"><img alt="Marvel" className="where-image" src="logo_marvel.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="MotU" to="/property/Masters of the Universe"><img alt="MotU" className="where-image" src="logo_motu.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="Minecraft" to="/property/Minecraft"><img alt="Minecraft" className="where-image" src="logo_minecraft.png"/></Link>
    </li> 
    <li className="gallerybox">
        <Link title="MLB" to="/licensor/MLB"><img alt="MLB" className="where-image" src="logo_mlb.png"/></Link>
    </li> 
    <li className="gallerybox">
        <Link title="My Hero Academia" to="/property/My Hero Academia"><img alt="My Hero Academia" className="where-image" src="logo_mha.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="Naruto" to="/property/Naruto"><img alt="Naruto" className="where-image" src="logo_naruto.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="NBA" to="/licensor/NBA"><img alt="NBA" className="where-image" src="logo_nba.png"/></Link>
    </li> 
    <li className="gallerybox">
        <Link title="Neon Genesis Evangelion" to="/property/Neon Genesis Evangelion"><img alt="Neon Genesis Evangelion" className="where-image" src="logo_evangelion.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="One Piece" to="/property/One Piece"><img alt="One Piece" className="where-image" src="logo_onepiece.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Powerpuff Girls" to="/property/Powerpuff Girls"><img alt="Powerpuff Girls" className="where-image" src="logo_ppg.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Power Rangers" to="/property/Power Rangers"><img alt="Power Rangers" className="where-image" src="logo_powerrangers.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Sailor Moon" to="/property/Sailor Moon"><img alt="Sailor Moon" className="where-image" src="logo_sailormoon.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Sanrio" to="/licensor/Sanrio"><img alt="Sanrio" className="where-image" src="logo_sanrio.png"/></Link>
    </li>        
    <li className="gallerybox">
        <Link title="Scooby-Doo!" to="/property/Scooby-Doo!"><img alt="Scooby-Doo!" className="where-image" src="logo_scooby.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="The Seven Deadly Sins" to="/property/The Seven Deadly Sins"><img alt="The Seven Deadly Sins" className="where-image" src="logo_tsds.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="The Simpsons" to="/property/The Simpsons"><img alt="The Simpsons" className="where-image" src="logo_simpsons.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="Sonic The Hedgehog" to="/property/Sonic The Hedgehog"><img alt="Sonic The Hedgehog" className="where-image" src="logo_sonic.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="South Park" to="/property/South Park"><img alt="South Park" className="where-image" src="logo_southpark.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="SpongeBob SquarePants" to="/property/SpongeBob SquarePants"><img alt="SpongeBob SquarePants" className="where-image" src="logo_spongebob.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Sppy X Family" to="/property/Spy X Family"><img alt="Spy X Family" className="where-image" src="logo_spyxfamily.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Squid Game" to="/property/Squid Game"><img alt="Squid Game" className="where-image" src="logo_squidgame.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Star Wars" to="/licensor/Lucasfilm"><img alt="Star Wars" className="where-image" src="logo_starwars.png"/></Link>
    </li> 
    <li className="gallerybox">
        <Link title="Stranger Things" to="/property/Stranger Things"><img alt="Stranger Things" className="where-image" src="logo_strangerthings.png"/></Link>
    </li>     
    <li className="gallerybox">
        <Link title="Teenage Mutant Ninja Turtles" to="/property/Teenage Mutant Ninja Turtles"><img alt="Teenage Mutant Ninja Turtles" className="where-image" src="logo_tmnt.png"/></Link>
    </li>     
    <li className="gallerybox">
        <Link title="Tekken" to="/property/Tekken 7"><img alt="Tekken" className="where-image" src="logo_tekken.png"/></Link>
    </li>     
    <li className="gallerybox">
        <Link title="Transformers" to="/property/Transformers"><img alt="Transformers" className="where-image" src="logo_transformers.png"/></Link>
    </li>         
    <li className="gallerybox">
        <Link title="Webtoon" to="/licensor/Webtoon"><img alt="Webtoon" className="where-image" src="logo_webtoon.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="WWE" to="/licensor/WWE"><img alt="WWE" className="where-image" src="logo_wwe.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Yu-Gi-Oh" to="/property/Yu-Gi-Oh"><img alt="Yu-Gi-Oh" className="where-image" src="logo_yugioh.png"/></Link>
    </li>    
    </ul>
    <div className="home-category">Event Exclusives</div>
    <ul className="gallery mw-gallery-traditional">
    <li className="gallerybox">
        <Link title="AwesomeFest" to="/tags/FiGPiN%20Event"><img alt="FiGPiN Event" className="where-image" src="logo_figpin.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Anime Arizona" to="/tags/Anime Arizona"><img alt="Anime Expo" className="where-image" src="logo_animearizona.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Anime Expo" to="/tags/Anime Expo"><img alt="Anime Expo" className="where-image" src="logo_animeexpo.png"/></Link>
    </li>      
    <li className="gallerybox">
        <Link title="Anime NYC" to="/tags/Anime%20NYC"><img alt="Anime NYC" className="where-image" src="logo_animenyc.png"/></Link>
    </li>      
    <li className="gallerybox">
        <Link title="Crunchyroll Expo" to="/tags/Crunchyroll Expo"><img alt="Crunchyroll Expo" className="where-image" src="logo_crx.png"/></Link>
    </li>      
    <li className="gallerybox">
        <Link title="D23 Expo" to="/tags/D23 Expo"><img alt="D23 Expo" className="where-image" src="logo_d23.png"/></Link>
    </li>        
    <li className="gallerybox">
        <Link title="DCON" to="/tags/DesignerCon"><img alt="DCON" className="where-image" src="logo_dcon.png"/></Link>
    </li>        
    <li className="gallerybox">
        <Link title="ECCC" to="/tags/ECCC"><img alt="ECCC" className="where-image" src="logo_eccc.png"/></Link>
    </li>        
    <li className="gallerybox">
        <Link title="Florida Superson" to="/tags/Florida Supercon"><img alt="Florida Supercon" className="where-image" src="logo_floridasupercon.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="LACC" to="/tags/LACC"><img alt="LACC" className="where-image" src="logo_lacc.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="MegaCon" to="/tags/MegaCon Orlando"><img alt="MegaCon" className="where-image" src="logo_megacon.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="MomoCon" to="/tags/MomoCon"><img alt="MomoCon" className="where-image" src="logo_momocon.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Power-Con" to="/tags/Power-Con"><img alt="Power-Con" className="where-image" src="logo_powercon.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="NYCC" to="/tags/NYCC"><img alt="NYCC" className="where-image" src="logo_nycc.png"/></Link>
    </li>        
    <li className="gallerybox">
        <Link title="SDCC" to="/tags/SDCC"><img alt="SDCC" className="where-image" src="logo_sdcc.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="SWC" to="/tags/Star Wars Celebration"><img alt="SWC" className="where-image" src="logo_swc.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="SWC" to="/tags/WonderCon"><img alt="WonderCon" className="where-image" src="logo_wondercon.png"/></Link>
    </li>        
    </ul>
    <div className="home-category">Store Exclusives</div>
    <ul className="gallery mw-gallery-traditional">
    <li className="gallerybox">
        <Link title="FiGPiN Exclusive" to="/availability/FiGPiN Exclusive"><img alt="FiGPiN" className="where-image" src="logo_figpin.png"/></Link>
    </li>          
    <li className="gallerybox">
        <Link title="AMC Exclusive" to="/availability/AMC Theatres Exclusive"><img alt="AMC" className="where-image" src="logo_amc.png"/></Link>
    </li> 
    <li className="gallerybox">
        <Link title="BAIT Exclusive" to="/availability/BAIT Exclusive"><img alt="BAIT" className="where-image" src="logo_bait.png"/></Link>
    </li> 
    <li className="gallerybox">
        <Link title="Best Buy Exclusive" to="/availability/Best Buy Exclusive"><img alt="Best Buy" className="where-image" src="logo_bestbuy.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Big Apple Toys Exclusive" to="/availability/Big Apple Toys Exclusive"><img alt="Big Apple Toys" className="where-image" src="logo_bigapple.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Big Bad Toy Store Exclusive" to="/availability/Big Bad Toy Store Exclusive"><img alt="Big Bad Toy Store" className="where-image" src="logo_bbts.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Bethesda Exclusive" to="/availability/Bethesda Exclusive"><img alt="Bethesda Exclusive" className="where-image" src="logo_bethesda.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Blizzard Exclusive" to="/availability/Blizzard Exclusive"><img alt="Blizzard Exclusive" className="where-image" src="logo_blizzard.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Box Lunch Exclusive" to="/availability/Box Lunch Exclusive"><img alt="Box Lunch Exclusive" className="where-image" src="logo_boxlunch.png"/></Link>
    </li>       
    <li className="gallerybox">
        <Link title="Bump-N-Bite Exclusive" to="/availability/Bump-N-Bite Exclusive"><img alt="Bump-N-Bite Exclusive" className="where-image" src="logo_bumpnbite.png"/></Link>
    </li>       
    <li className="gallerybox">
        <Link title="Chalice Collectibles Exclusive" to="/availability/Chalice Collectibles Exclusive"><img alt="Chalice Collectibles" className="where-image" src="logo_chalice.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Chronotoys Exclusive" to="/availability/Chronotoys Exclusive"><img alt="Chronotoys" className="where-image" src="logo_chronotoys.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Crunchyroll Exclusive" to="/availability/Crunchyroll Exclusive"><img alt="Crunchyroll" className="where-image" src="logo_crunchyroll.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Disney" to="/availability/Disney Exclusive"><img alt="Disney Exclusive" className="where-image" src="logo_disney.png"/></Link>
    </li>             
    <li className="gallerybox">
        <Link title="Entertainment Earth Exclusive" to="/availability/Entertainment Earth Exclusive"><img alt="EE" className="where-image" src="logo_ee.png"/></Link>
    </li>     
    <li className="gallerybox">
        <Link title="eVend Earth Exclusive" to="/availability/eVend Exclusive"><img alt="eVend" className="where-image" src="logo_eVend.png"/></Link>
    </li>     
    <li className="gallerybox">
        <Link title="Ferrera Market Exclusive" to="/availability/Ferrera Market Exclusive"><img alt="Ferrera Market" className="where-image" src="logo_ferrera.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Fry Guy Pins" to="/availability/Fry Guy Pins Exclusive"><img alt="Fry Guy Pins" className="where-image" src="logo_fryguy.png"/></Link>
    </li>     
    <li className="gallerybox">
        <Link title="Fugitive Toys Exclusive" to="/availability/Fugitive Toys Exclusive"><img alt="Fugitive Toys" className="where-image" src="logo_fugitive.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="FYE Exclusive" to="/availability/FYE Exclusive"><img alt="FYE" className="where-image" src="logo_fye.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Galactic Toys Exclusive" to="/availability/Galactic Toys Exclusive"><img alt="Galactic Toys" className="where-image" src="logo_galactic.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="GameStop Exclusive" to="/availability/GameStop Exclusive"><img alt="GameStop" className="where-image" src="logo_gamestop.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Grail Game Exclusive" to="/availability/Grail Game Exclusive"><img alt="Grail Game" className="where-image" src="logo_grailgame.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Hot Topic Exclusive" to="/availability/Hot Topic Exclusive"><img alt="Hot Topic" className="where-image" src="logo_hottopic.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Krakens Collection Exclusive" to="/availability/Krakens Collection Exclusive"><img alt="Krakens Collection" className="where-image" src="logo_krakens.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Pink A La Mode Exclusive" to="/availability/Pink A La Mode Exclusive"><img alt="Pink A La Mode" className="where-image" src="logo_pinkalamode.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Pins on Fire Exclusive" to="/availability/Pins on Fire Exclusive"><img alt="Pins on Fire" className="where-image" src="logo_pinsonfire.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Plastic Empire Exclusive" to="/availability/Plastic Empire Exclusive"><img alt="Plastic Empire" className="where-image" src="logo_pe.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Pops and Pins Exclusive" to="/availability/Pops and Pins Exclusive"><img alt="Pops and Pins" className="where-image" src="logo_popsandpins.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Poptopia Exclusive" to="/availability/Poptopia Exclusive"><img alt="Poptopia" className="where-image" src="logo_poptopia.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="QVC Exclusive" to="/availability/QVC Exclusive"><img alt="QVC" className="where-image" src="logo_qvc.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Ralphie's Funhouse Exclusive" to="/availability/Ralphie’s%20Funhouse%20Exclusive"><img alt="Ralphie's Funhouse" className="where-image" src="logo_ralphies.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Shumi Toys Exclusive" to="/availability/Shumi Toys Exclusive"><img alt="Shumi Toys" className="where-image" src="logo_shumi.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Taggem Exclusive" to="/availability/Taggem Exclusive"><img alt="Taggem" className="where-image" src="logo_taggem.png"/></Link>
    </li>      
    <li className="gallerybox">
        <Link title="Target Exclusive" to="/availability/Target Exclusive"><img alt="Target" className="where-image" src="logo_target.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="The Might Hobby Exclusive" to="/availability/The Mighty Hobby Exclusive"><img alt="The Mighty Hobby" className="where-image" src="logo_mighty.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Toy Drops Exclusive" to="/availability/Toy Drops Exclusive"><img alt="Toy Drops" className="where-image" src="logo_toydrops.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Toy Temple Exclusive" to="/availability/Toy Temple Exclusive"><img alt="Toy Temple" className="where-image" src="logo_toytemple.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Toynk Exclusive" to="/availability/Toynk Exclusive"><img alt="Toynk" className="where-image" src="logo_toynk.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Walgreens Exclusive" to="/availability/Walgreens Exclusive"><img alt="Walgreens" className="where-image" src="logo_walgreens.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Walmart Exclusive" to="/availability/Walmart Exclusive"><img alt="Walmart" className="where-image" src="logo_walmart.png"/></Link>
    </li>  
    </ul>
    <div className="home-category">Types</div>
    <ul className="gallery mw-gallery-traditional">
    <li className="gallerybox">
        <Link title="Logo" to="/type/Logo"><img alt="LOGO" className="where-image" src="logo_logos.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Logo" to="/type/Logo Series"><img alt="LOGO SERIES" className="where-image" src="logo_logoseries.png"/></Link>
    </li>     
    <li className="gallerybox">
        <Link title="Mini" to="/type/Mini"><img alt="MINI" className="where-image" src="logo_minis.png"/></Link>
    </li>         
    <li className="gallerybox">
        <Link title="XL" to="/type/XL"><img alt="XL" className="where-image" src="logo_xls.png"/></Link>
    </li>     
    <li className="gallerybox">
        <Link title="Mystery" to="/tags/Mystery"><img alt="Mystery" className="where-image" src="logo_mystery.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Limited Edition" to="/availability/Limited Edition"><img alt="Limited Edition" className="where-image" src="logo_limited.png"/></Link>
    </li>         
    <li className="gallerybox">
        <Link title="Very Hard To Find" to="/tags/Very Hard To Find"><img alt="Very Hard To Find" className="where-image" src="logo_vhtf.png"/></Link>
    </li>         
    <li className="gallerybox">
        <Link title="Hard To Find" to="/tags/Hard to Find"><img alt="Hard To Find" className="where-image" src="logo_htf.png"/></Link>
    </li>         \
    <li className="gallerybox">
        <Link title="See All" to="/pins"><img alt="ALL" className="where-image" src="logo_seeall.png"/></Link>
    </li>         
</ul>

<div className="home-category">Run Sizes</div>
<ul className="gallery mw-gallery-traditional">
    <li className="gallerybox"><Link title="1-249" to="/tags/1-249"><img alt="1-249" className="where-image" src="volume_1.png"/></Link></li>     
    <li className="gallerybox"><Link title="250-499" to="/tags/250-499"><img alt="250-499" className="where-image" src="volume_250.png"/></Link></li>     
    <li className="gallerybox"><Link title="500-749" to="/tags/500-749"><img alt="500-749" className="where-image" src="volume_500.png"/></Link></li>     
    <li className="gallerybox"><Link title="750-999" to="/tags/750-999"><img alt="750-999" className="where-image" src="volume_750.png"/></Link></li>     
    <li className="gallerybox"><Link title="1000-1499" to="/tags/1000-1499"><img alt="1000-1499" className="where-image" src="volume_1000.png"/></Link></li>     
    <li className="gallerybox"><Link title="1500-1999" to="/tags/1500-1999"><img alt="1500-1999" className="where-image" src="volume_1500.png"/></Link></li>     
    <li className="gallerybox"><Link title="2000-2999" to="/tags/2000-2999"><img alt="2000-2999" className="where-image" src="volume_2000.png"/></Link></li>     
    <li className="gallerybox"><Link title="3000-4999" to="/tags/3000-4999"><img alt="3000-4999" className="where-image" src="volume_3000.png"/></Link></li>     
    <li className="gallerybox"><Link title="5000-9999" to="/tags/5000-9999"><img alt="5000-9999" className="where-image" src="volume_5000.png"/></Link></li>     
    <li className="gallerybox"><Link title="10000-19999" to="/tags/10000-19999"><img alt="10000-19999" className="where-image" src="volume_10000.png"/></Link></li>     
    <li className="gallerybox"><Link title="20000" to="/tags/%E2%89%A520000"><img alt="20000" className="where-image" src="volume_20000.png"/></Link></li>     
</ul>


        </div>
    );
}

export default Home;