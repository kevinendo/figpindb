import React from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { Link } from "react-router-dom";

function Arenas() {
    return (
        <div className="detail-box">

<div class="scoring">
<h3 align="center">FiGPiN Arenas</h3>

<p>In order to participate in FiGPiN ARENAS, your FiGPiN App must be up to date - version 1.3.5 released on 2/14/23. </p>
<h5 align="center">GETTING STARTED</h5>
<p>Select a FiGPiN (not an AP) and press the ARENAS button. On this page, there are four tabs at the top - ARENA, SETUP, HISTORY, and EXPLAINER. Go to the HISTORY tab and click the GET POINTS button.</p>
<div align="center"><img class="arenas" alt="Arenas" src="arenas_gettingstarted_1.png"/> <img class="arenas" alt="Arenas" src="arenas_gettingstarted_3.png"/></div><br/>
<p>If you are eligible to participate, there will be a large button called ARENA ONE under the ARENA tab. Click this, and then click the MATCH NOW button.</p>
<div align="center"><img class="arenas" alt="Arenas" src="arenas_gettingstarted_2.png"/> <img class="arenas" alt="Arenas" src="arenas_gettingstarted_4.png"/></div>
<br/>
<h5 align="center">BASIC BATTLE</h5>
<p>If there is a valid opponent, a battle will begin. On this screen, you will see your opponent’s FiGPiN on the top, and your FiGPiN on the bottom. </p>
<p>For your opponent, you will see their total FiGPiN Power, as well as their three Factory Score cards in red (Edition, Volume, and Sequence) and their three best Story Score cards in orange and blue. </p>
<div align="center"><img class="arenas" alt="Arenas" src="arenas_basic_1.png"/></div>
<p>For you, you will see the same Factory Score cards and Story Score cards, as well as a mask button, a RANDO button, a 2X BOOST button, and a GO! Button.</p>
<p>Each battle consists of 2 or 3 rounds. During each round, you will pick one Factory Score card and one Story Score card and then press the GO! button. These are then multiplied by each other, to come up with a round score. If this is larger than your opponent’s round score, you win the round. The first player to win two rounds wins the battle. Each Factory Score card and Story Score card can only be used once each battle.</p>

<h5 align="center">RANDO</h5>
<p>If you press the mask button during a round, this will reveal your serial number. You can now press the RANDO button instead of the GO! button after selecting a Factory Score card and Story Score card. If you do, one of the digits in your round score will be replaced with a random digit from your serial number. For example, if your serial number is “RDRS9B” and your round score is 1000, using the RANDO button could result in your round score changing to 9000, 1900, 1090 or 1009. If you have more than one number in your serial number, one of them will be picked at random. </p>
<div align="center"><img class="arenas" alt="Arenas" src="arenas_rando_1.png"/> <img class="arenas" alt="Arenas" src="arenas_rando_2.png"/></div><br/>

<h5 align="center">2X BOOST</h5>
<p>Never press this button. Since this is very close to the RANDO and GO! Button, be careful to never accidentally press this button. If you use this with a Boost Story Score card, it will double your round score, but it will also spend all of your boosts. </p>
<div align="center"><img class="arenas" alt="Arenas" src="arenas_boost_1.png"/> </div><br/>

<h5 align="center">WINNING AND LOSING</h5>
<p>Generally speaking, when you win, you gain points on your ARENA Story Card, and when you lose, you lose points. Sometimes, for reasons unknown, points don’t always change. The maximum you can increase your ARENA Story Card to is 100. If you do so, this FiGPiN can no longer battle. If your ARENA Story Card is reduced to 0 points, you can spend 5 boosts to raise it back up to 5. The ARENA Story Card itself can also be used in battles.</p>

<h5 align="center">AUTO MATCH AND SETUP</h5>
<p>There is a feature in Arenas that allows a FiGPiN to battle unattended. First you must go to the Setup tab for a FiGPiN and pick a combination of Factory Score and Story Score cards for each round and click the SAVE button. After that, go to ARENA ONE and move the switch that says “Auto Match is OFF”. This FiGPiN will continue to battle until its ARENA Story Card has been reduced to zero.</p>
<p>It’s pretty difficult to win any matches using Auto Match since it doesn’t use the RANDO option, but some people may wish to use it to help other people get wins. </p>
<div align="center"><img class="arenas" alt="Arenas" src="arenas_auto_1.png"/> <img class="arenas" alt="Arenas" src="arenas_auto_2.png"/></div><br/>

<h5 align="center">NO VALID OPPONENTS</h5>
<p>You will sometimes get an error message that says “No Valid Opponents Currently.” This means that the matching system was unable to find an appropriate FiGPiN to battle against. If this happens, you can try using a different FiGPiN, preferably one with a higher or lower Factory Score.</p>

<h5 align="center">STRATEGY</h5>
<p>A lot of Arenas comes down to FiGPiN stats and luck, but there is some strategy. When you start a battle, you will need to decide whether you should use your best combination of scores, your worst combination, or something in between. It’s hard to say what’s the best option, but if you’re somehow able to win the first round without using your best combination, that will put you in a strong postion to win. If you are able to quickly do math in your head, you might be able to tell which scores your opponent used in the first round, and which scores they’ll have left to use, but RANDO complicates this somewhat. </p>
<div align="center"><img class="arenas" alt="Arenas" src="arenas_strat_1.png"/> <img class="arenas" alt="Arenas" src="arenas_strat_2.png"/></div><br/>
<p>For the second round, you’ll need to decide if you want to use your best remaining combination or your worst remaining combination. If you lost the first round, it usually makes the most sense to use your best combination, but you can always take a chance that your opponent will think the same thing. If you won the first round, you should try to figure out whether or not you can beat your opponent if they play their best scores.</p>
<div align="center"><img class="arenas" alt="Arenas" src="arenas_strat_3.png"/> <img class="arenas" alt="Arenas" src="arenas_strat_4.png"/></div><br/>
<p>If you each win one round, and there’s a final round, you will have to pick your last remaining Factory Score and Story Score cards. </p>
<p>If possible, it’s great to be able to get a base score of at least 1000 each round. That way, there’s always a chance of improving your score with RANDO. If you have a base score of say 900, this can never get better than 990 using RANDO. Whereas a 1000, with a 9 in the serial number was the potential to become 9000 using RANDO. Even if you have lower numbers in your serial number, there’s still the potential to improve your base score. For instance, if you have a base score of 2000, a 3 in your serial number will improve it. </p>
<p>Alternatively, if you have a base score of 4000, a 3 in your serial number will sometimes reduce your score to 3000, but it could also increase it to 4300, 4030 or 4003. </p>
<p>Another thing to consider, when you enter ARENA ONE, you are able to see the previous ten battles that have occurred. If you click on the V/S for each one, you can see what the results were. This might give you some insight into what you might be facing. </p>

<h5 align="center">BEST FIGPINS</h5>
<p>The better your FiGPiNs attributes are, the easier it will be for you to win. However, battles do seem to be matched up based on similar Factory Scores, and perhaps some other unknown factors. </p>
<p>Overall, the best FiGPiN to use for ARENAS would have high Factory Score cards, three 100 point Story Score cards and a Serial number with one or more 9s in it.</p>
<div align="center"><img class="arenas" alt="Black Widow" src="arenas_widow.png"/> <img class="arenas" alt="Gohan" src="arenas_gohan.png"/></div><br/>
<p>For Edition, 1st edition is best with 20 points. For Volume, 18 is probably the best you will ever see, with volumes from 11-150. A Volume score of 10 or better can still be good. For Sequence, 1st is best with 60 points, but these are pretty rare. A more likely high Sequence score will probably be 54. </p>
<p>If you have an ULTRA, you can add a 100 point Story Score card to any FiGPiN. Combined with max boosts, this should let you have at least 100/100/50 on nearly any FiGPiN. There are a few other rare ways to get a 100 point Story Score card - Sequence Match, GoFig from FWAP2, and 100% Cohort </p>

<h5 align="center">EVENT ARENAS</h5>
<p>If you are at a FiGPiN event, such as ECCC, Anime Expo, SDCC, NYCC, or FWAP, you may be able to check in for an arena specific to that event. Once you do so, you will be able to enter a special arena, where you can battle other people that are at the event with you.</p>
<div align="center"><img class="arenas" alt="Arena Check In" src="arenas_event_1.png"/> <img class="arenas" alt="Emerald Arena" src="arenas_event_2.png"/></div><br/>
<br/>

<h5 align="center">LOW VOLUME FIGPIN EDITIONS/LOTS</h5>
<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/70">
    <img className="pinlist-image" alt="70" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/69/b4/11/390/390.ce68e513.png"/><div className="pinname">Altaïr - 10</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/399">
    <img className="pinlist-image" alt="399" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/07/47/3a/4388/4388.ce68e513.png"/><div className="pinname">Black Widow 1B - 18</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/361">
    <img className="pinlist-image" alt="361" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/c2/f8/f6/4234/4234.ce68e513.png"/><div className="pinname">Hello Kitty 1B - 18</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/108">
    <img className="pinlist-image" alt="108" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/e2/8a/51/54/54.ce68e513.png"/><div className="pinname">John Cena - 28</div></Link></div></li>       
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/407">
    <img className="pinlist-image" alt="407" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/60/ba/ba/4338/4338.ce68e513.png"/><div className="pinname">Baymax 1C - 30</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/409">
    <img className="pinlist-image" alt="409" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/f8/8e/c8/4348/4348.ce68e513.png"/><div className="pinname">Baymax 1C - 30</div></Link></div></li>   
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/113">
    <img className="pinlist-image" alt="113" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/52/24/6e/85/85.ce68e513.png"/><div className="pinname">Thanos 1B - 36</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/326">
    <img className="pinlist-image" alt="326" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/5c/b2/f9/4415/4415.ce68e513.png"/><div className="pinname">All Might 1C - 36</div></Link></div></li>      
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/328">
    <img className="pinlist-image" alt="328" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/59/4c/59/4426/4426.ce68e513.png"/><div className="pinname">Tsuyu Asui 1C - 36</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/331">
    <img className="pinlist-image" alt="331" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/4d/0a/94/4440/4440.ce68e513.png"/><div className="pinname">Ochaco Uraraka 1B - 36</div></Link></div></li>      

<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/X32">
    <img className="pinlist-image" alt="X32" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/95/96/0f/4106/4106.ce68e513.png"/><div className="pinname">Mickey Mouse 1A Aus - 48</div></Link></div></li>      
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/X32">
    <img className="pinlist-image" alt="X32" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/95/96/0f/4106/4106.ce68e513.png"/><div className="pinname">Mickey Mouse 1B - 48</div></Link></div></li>      
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/X33">
    <img className="pinlist-image" alt="X33" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/fe/51/16/4100/4100.ce68e513.png"/><div className="pinname">Minnie Mouse 1A Aus - 48</div></Link></div></li>      
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/X33">
    <img className="pinlist-image" alt="X33" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/fe/51/16/4100/4100.ce68e513.png"/><div className="pinname">Minnie Mouse 1B - 48</div></Link></div></li>      
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/X35">
    <img className="pinlist-image" alt="X35" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/65/9e/34/4090/4090.ce68e513.png"/><div className="pinname">Eva Unit 01 1B - 48</div></Link></div></li>      
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/X36">
    <img className="pinlist-image" alt="X36" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/75/ec/09/4085/4085.ce68e513.png"/><div className="pinname">Eva Unit 02 1B - 48</div></Link></div></li>      
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/407">
    <img className="pinlist-image" alt="407" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/60/ba/ba/4338/4338.ce68e513.png"/><div className="pinname">Baymax 1A - 48</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/409">
    <img className="pinlist-image" alt="409" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/f8/8e/c8/4348/4348.ce68e513.png"/><div className="pinname">Baymax 1A - 54</div></Link></div></li>   

<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/147">
    <img className="pinlist-image" alt="147" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/e4/7b/84/781/781.ce68e513.png"/><div className="pinname">Donald Duck 2A - 72</div></Link></div></li>   
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/148">
    <img className="pinlist-image" alt="148" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/bc/26/8f/786/786.ce68e513.png"/><div className="pinname">Goofy 2A - 72</div></Link></div></li>   
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/361">
    <img className="pinlist-image" alt="361" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/c2/f8/f6/4234/4234.ce68e513.png"/><div className="pinname">Hello Kitty 1C - 82</div></Link></div></li>   
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/97">
    <img className="pinlist-image" alt="97" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/3a/e8/e2/489/489.ce68e513.png"/><div className="pinname">Batman 2A - 84</div></Link></div></li>   
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/98">
    <img className="pinlist-image" alt="98" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/6f/23/61/494/494.ce68e513.png"/><div className="pinname">The Joker 2A - 84</div></Link></div></li>   

    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/282">
    <img className="pinlist-image" alt="361" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/99/6e/d2/1724/1724.ce68e513.png"/><div className="pinname">FL4K 2A - 84</div></Link></div></li>  

<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/68">
    <img className="pinlist-image" alt="68" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/87/63/86/375/375.ce68e513.png"/><div className="pinname">Aguilar - 88</div></Link></div></li>   

<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/398">
    <img className="pinlist-image" alt="147" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/94/ec/52/4383/4383.ce68e513.png"/><div className="pinname">Black Widow 1B - 90</div></Link></div></li>   
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/360">
    <img className="pinlist-image" alt="148" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/13/70/32/4229/4229.ce68e513.png"/><div className="pinname">Hello Kitty 1B - 90</div></Link></div></li>   
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/282">
    <img className="pinlist-image" alt="361" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/99/6e/d2/1724/1724.ce68e513.png"/><div className="pinname">FL4K 1A Aus - 90</div></Link></div></li>   
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/X27">
    <img className="pinlist-image" alt="97" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/12/d8/3e/1838/1838.ce68e513.png"/><div className="pinname">Goku 1A Aus - 96</div></Link></div></li>   
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/X2">
    <img className="pinlist-image" alt="98" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/8d/99/55/875/875.ce68e513.png"/><div className="pinname">Super Saiyan Goku 1A Aus - 96</div></Link></div></li>   
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/X2">
    <img className="pinlist-image" alt="68" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/8d/99/55/875/875.ce68e513.png"/><div className="pinname">Super Saiyan Goku 6A - 96</div></Link></div></li>   

  </ul>
<br/>

<h5 align="center">HIGH COHORT FIGPIN EDITIONS/LOTS</h5>
<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/399">
    <img className="pinlist-image" alt="399" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/07/47/3a/4388/4388.ce68e513.png"/><div className="pinname">Black Widow 1B - 90%</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/113">
    <img className="pinlist-image" alt="113" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/52/24/6e/85/85.ce68e513.png"/><div className="pinname">Thanos 1B - 80%</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/303">
    <img className="pinlist-image" alt="303" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/ab/d5/09/3947/3947.ce68e513.png"/><div className="pinname">Tsuyu Asui - 80%</div></Link></div></li>       
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/304">
    <img className="pinlist-image" alt="304" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/7d/8b/76/3952/3952.ce68e513.png"/><div className="pinname">Katsuki Bakugo - 80%</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/305">
    <img className="pinlist-image" alt="305" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/a6/ca/3c/3957/3957.ce68e513.png"/><div className="pinname">Izuku Midoriya - 80%</div></Link></div></li>   
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/306">
    <img className="pinlist-image" alt="306" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/50/41/27/3962/3962.ce68e513.png"/><div className="pinname">Ochaco Uraraka - 80%</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/307">
    <img className="pinlist-image" alt="307" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/22/e8/aa/3967/3967.ce68e513.png"/><div className="pinname">Shoto Todoroki - 80%</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/L24">
    <img className="pinlist-image" alt="L24" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/9d/f7/db/4209/4209.ce68e513.png"/><div className="pinname">MHA Red & Black - 80%</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/328">
    <img className="pinlist-image" alt="328" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/59/4c/59/4426/4426.ce68e513.png"/><div className="pinname">Tsuyu Asui 1C - 80%</div></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/U1">
    <img className="pinlist-image" alt="U1" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/06/5d/fe/7687/7687.ce68e513.png"/><div className="pinname">Darth Vader - 80%</div></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/409">
    <img className="pinlist-image" alt="409" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/f8/8e/c8/4348/4348.ce68e513.png"/><div className="pinname">Baymax 1C - 80%</div></Link></div></li>   
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/407">
    <img className="pinlist-image" alt="407" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/60/ba/ba/4338/4338.ce68e513.png"/><div className="pinname">Baymax 1C - 80%</div></Link></div></li>    

<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/142">
    <img className="pinlist-image" alt="142" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/e5/15/85/958/958.ce68e513.png"/><div className="pinname">Praise the Sun Solaire - 70%</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/268">
    <img className="pinlist-image" alt="268" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/75/3b/72/1556/1556.ce68e513.png"/><div className="pinname">Woody - 70%</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/269">
    <img className="pinlist-image" alt="269" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/41/e0/03/1300/1300.ce68e513.png"/><div className="pinname">Buzz Lightyear - 70%</div></Link></div></li>       
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/271">
    <img className="pinlist-image" alt="271" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/fc/e7/d4/1571/1571.ce68e513.png"/><div className="pinname">Bo Peep - 70%</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/272">
    <img className="pinlist-image" alt="272" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/d7/7b/94/1576/1576.ce68e513.png"/><div className="pinname">Duke Caboom - 70%</div></Link></div></li>   
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/270">
    <img className="pinlist-image" alt="270" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/d3/67/bb/1305/1305.ce68e513.png"/><div className="pinname">Forky - 70%</div></Link></div></li>       
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/331">
    <img className="pinlist-image" alt="331" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/4d/0a/94/4440/4440.ce68e513.png"/><div className="pinname">Ochaco Uraraka 1B - 70%</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/401">
    <img className="pinlist-image" alt="401" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/c4/17/52/4323/4323.ce68e513.png"/><div className="pinname">Red Guardian 1B - 70%</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/402">
    <img className="pinlist-image" alt="402" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/78/cb/b5/4328/4328.ce68e513.png"/><div className="pinname">Taskmaster 1B - 70%</div></Link></div></li>       

<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/L4">
    <img className="pinlist-image" alt="L4" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/d5/e6/72/1133/1133.ce68e513.png"/><div className="pinname">White on Gold 1A - 70%</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/L11">
    <img className="pinlist-image" alt="L11" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/ed/3a/6d/1702/1702.ce68e513.png"/><div className="pinname">Clouds on Silver - 70%</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/L23">
    <img className="pinlist-image" alt="L23" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/3e/ff/1a/3896/3896.ce68e513.png"/><div className="pinname">Gingerbread Holiday - 70%</div></Link></div></li>       



  </ul>
<br/>
</div>
</div>
    );
}

export default Arenas;


