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
        <Link title="Assassin's Creed" to="/property/Assassin's Creed"><img alt="Assassin's Creed" className="where-image" src="logo_assassinscreed.png"/></Link>
    </li>   
    <li className="gallerybox">
        <Link title="Avatar The Last Airbender" to="/property/Avatar The Last Airbender"><img alt="Avatar The Last Airbender" className="where-image" src="logo_avatar.png"/></Link>
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
        <Link title="Halo" to="/property/Halo"><img alt="Halo" className="where-image" src="logo_halo.png"/></Link>
    </li>       
    <li className="gallerybox">
        <Link title="Harry Potter" to="/property/Harry Potter"><img alt="Harry Potter" className="where-image" src="logo_harrypotter.png"/></Link>
    </li>       
    <li className="gallerybox">
        <Link title="Looney Tunes" to="/property/Looney Tunes"><img alt="Looney Tunes" className="where-image" src="logo_looneytunes.png"/></Link>
    </li>    
    <li className="gallerybox">
        <Link title="Marvel" to="/licensor/Marvel"><img alt="Marvel" className="where-image" src="logo_marvel.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="My Hero Academia" to="/property/My Hero Academia"><img alt="My Hero Academia" className="where-image" src="logo_mha.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="Naruto" to="/property/Naruto"><img alt="Naruto" className="where-image" src="logo_naruto.png"/></Link>
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
        <Link title="South Park" to="/property/South Park"><img alt="South Park" className="where-image" src="logo_southpark.png"/></Link>
    </li>
    <li className="gallerybox">
        <Link title="SpongeBob SquarePants" to="/property/SpongeBob SquarePants"><img alt="SpongeBob SquarePants" className="where-image" src="logo_spongebob.png"/></Link>
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
        <Link title="BAIT Exclusive" to="/availability/BAIT Exclusive"><img alt="BAIT" className="where-image" src="logo_bait.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="BAIT Exclusive" to="/availability/Box Lunch Exclusive"><img alt="Box Lunch" className="where-image" src="logo_boxlunch.png"/></Link>
    </li>             
    <li className="gallerybox">
        <Link title="Entertainment Earth Exclusive" to="/availability/Entertainment Earth Exclusive"><img alt="EE" className="where-image" src="logo_ee.png"/></Link>
    </li>     
    <li className="gallerybox">
        <Link title="FiGPiN Exclusive" to="/availability/FiGPiN Exclusive"><img alt="FiGPiN" className="where-image" src="logo_figpin.png"/></Link>
    </li>      
    <li className="gallerybox">
        <Link title="Fugitive Toys Exclusive" to="/availability/Fugitive Toys Exclusive"><img alt="Fugitive Toys" className="where-image" src="logo_fugitive.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Funimation Exclusive" to="/availability/Funimation Exclusive"><img alt="Funimation" className="where-image" src="logo_funimation.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="GameStop Exclusive" to="/availability/GameStop Exclusive"><img alt="GameStop" className="where-image" src="logo_gamestop.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Hot Topic Exclusive" to="/availability/Hot Topic Exclusive"><img alt="Hot Topic" className="where-image" src="logo_hottopic.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Pins on Fire Exclusive" to="/availability/Pins on Fire Exclusive"><img alt="Pins on Fire" className="where-image" src="logo_pinsonfire.png"/></Link>
    </li>  
    <li className="gallerybox">
        <Link title="Target Exclusive" to="/availability/Target Exclusive"><img alt="Target" className="where-image" src="logo_target.png"/></Link>
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
        <Link title="See All" to="/pins"><img alt="ALL" className="where-image" src="logo_seeall.png"/></Link>
    </li>         

</ul>
        </div>
    );
}

export default Home;