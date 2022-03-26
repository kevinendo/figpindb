import React from "react";
import { Link } from "react-router-dom";


function Home() {

    const response =  fetch('https://figpindb-backend.herokuapp.com/api/v1/figpindb/calendar')
    if (response.ok) {
      console.log("data loaded")
      }

    return (
        <div className="detail-box">      
<h3 align="center">Welcome to FigpinDB</h3>

<ul className="gallery mw-gallery-traditional">
<li className="gallerybox">
        <Link title="New Releases" to="/new"><img alt="New Releases" className="where-image" src="logo_new.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Assassin's Creed" to="/property/Assassin's Creed"><img alt="Assassin's Creed" className="where-image" src="logo_assassinscreed.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Astro Boy" to="/property/Astro Boy"><img alt="Astro Boy" className="where-image" src="logo_astroboy.png"/></Link>
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
        <Link title="KISS" to="/property/KISS"><img alt="KISS" className="where-image" src="logo_kiss.png"/></Link>
    </li>       
    <li className="gallerybox">
        <Link title="Looney Tunes" to="/property/Looney Tunes"><img alt="Looney Tunes" className="where-image" src="logo_looneytunes.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Marvel" to="/licensor/Marvel"><img alt="Marvel" className="where-image" src="logo_marvel.png"/></Link>
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
        <Link title="Sanrio" to="/licensor/Sanrio"><img alt="Sanrio" className="where-image" src="logo_sanrio.png"/></Link>
    </li>        
    <li className="gallerybox">
        <Link title="Scooby-Doo!" to="/property/Scooby-Doo!"><img alt="Scooby-Doo!" className="where-image" src="logo_scooby.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="The Simpsons" to="/property/The Simpsons"><img alt="The Simpsons" className="where-image" src="logo_simpsons.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="South Park" to="/property/South Park"><img alt="South Park" className="where-image" src="logo_southpark.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="SpongeBob SquarePants" to="/property/SpongeBob SquarePants"><img alt="SpongeBob SquarePants" className="where-image" src="logo_spongebob.png"/></Link>
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
        <Link title="Teenage Mutant Ninja Turtles Animated" to="/property/Teenage Mutant Ninja Turtles Animated"><img alt="Teenage Mutant Ninja Turtles Animated" className="where-image" src="logo_tmnt.png"/></Link>
    </li>     
    <li className="gallerybox">
        <Link title="Tekken" to="/property/Tekken 7"><img alt="Tekken" className="where-image" src="logo_tekken.png"/></Link>
    </li>     
    <li className="gallerybox">
        <Link title="Transformers" to="/property/Transformers"><img alt="Transformers" className="where-image" src="logo_transformers.png"/></Link>
    </li>         
    <li className="gallerybox">
        <Link title="WWE" to="/licensor/WWE"><img alt="WWE" className="where-image" src="logo_wwe.png"/></Link>
    </li>    
    </ul>
    <div className="home-category">Con Exclusives</div>
    <ul className="gallery mw-gallery-traditional">
    <li className="gallerybox">
        <Link title="AwesomeFest" to="/tags/AwesomeFest"><img alt="AwesomeFest" className="where-image" src="logo_awesomefest.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="D23 Expo" to="/tags/D23 Expo"><img alt="D23 Expo" className="where-image" src="logo_d23.png"/></Link>
    </li>        
    <li className="gallerybox">
        <Link title="ECCC" to="/tags/ECCC"><img alt="ECCC" className="where-image" src="logo_eccc.png"/></Link>
    </li>        
    <li className="gallerybox">
        <Link title="NYCC" to="/tags/NYCC"><img alt="NYCC" className="where-image" src="logo_nycc.png"/></Link>
    </li>        
    <li className="gallerybox">
        <Link title="SDCC" to="/tags/SDCC"><img alt="SDCC" className="where-image" src="logo_sdcc.png"/></Link>
    </li>        
    </ul>
    <div className="home-category">Store Exclusives</div>
    <ul className="gallery mw-gallery-traditional">
    <li className="gallerybox">
        <Link title="FiGPiN Exclusive" to="/availability/FiGPiN Exclusive"><img alt="FiGPiN" className="where-image" src="logo_figpin.png"/></Link>
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
        <Link title="Chalice Collectibles Exclusive" to="/availability/Chalice Collectibles Exclusive"><img alt="Chalice Collectibles" className="where-image" src="logo_chalice.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="Disney" to="/availability/Disney Exclusive"><img alt="Disney Exclusive" className="where-image" src="logo_disney.png"/></Link>
    </li>             
    <li className="gallerybox">
        <Link title="Entertainment Earth Exclusive" to="/availability/Entertainment Earth Exclusive"><img alt="EE" className="where-image" src="logo_ee.png"/></Link>
    </li>     
    <li className="gallerybox">
        <Link title="Ferrera Market Exclusive" to="/availability/Ferrera Market Exclusive"><img alt="Ferrera Market" className="where-image" src="logo_ferrera.png"/></Link>
    </li>     
    <li className="gallerybox">
        <Link title="Fugitive Toys Exclusive" to="/availability/Fugitive Toys Exclusive"><img alt="Fugitive Toys" className="where-image" src="logo_fugitive.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Funimation Exclusive" to="/availability/Funimation Exclusive"><img alt="Funimation" className="where-image" src="logo_funimation.png"/></Link>
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
        <Link title="Hot Topic Exclusive" to="/availability/Hot Topic Exclusive"><img alt="Hot Topic" className="where-image" src="logo_hottopic.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Krakens Collection Exclusive" to="/availability/Krakens Collection Exclusive"><img alt="Krakens Collection" className="where-image" src="logo_krakens.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Pins on Fire Exclusive" to="/availability/Pins on Fire Exclusive"><img alt="Pins on Fire" className="where-image" src="logo_pinsonfire.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Poptopia Exclusive" to="/availability/Poptopia Exclusive"><img alt="Poptopia" className="where-image" src="logo_poptopia.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Shumi Toys Exclusive" to="/availability/Shumi Toys Exclusive"><img alt="Shumi Toys" className="where-image" src="logo_shumi.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Spastic Collectibles Exclusive" to="/availability/Spastic Collectibles Exclusive"><img alt="Spastic Collectibles" className="where-image" src="logo_spastic.png"/></Link>
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
        <Link title="Mini" to="/type/Mini"><img alt="MINI" className="where-image" src="logo_minis.png"/></Link>
    </li>         
    <li className="gallerybox">
        <Link title="XL" to="/type/XL"><img alt="XL" className="where-image" src="logo_xls.png"/></Link>
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