import React from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function Resources() {
    return (
        <div className="detail-box">

<h3 align="center">Scoring</h3>
<div class="scoring">
<p><img class="scoring" src="/scoring_collector_score.png" alt="Collector Score"/><b>COLLECTOR SCORE</b>: This is based on all the activities you do as a collector, regardless of what FiGPiNs you have in your collection. You get one BOOST per day per 500 COLLECTOR SCORE.</p>
<ul>
	<li>Account Created: 1000 points</li>
	<li>Username Created: 500 points</li>
	<li>User Avatar Created: 500 points</li>
	<li>FiGPiN Ultra Bonus: 1500 points</li>
	<li>FiGPin Event Card: 500 points (this is from GOFiG at FWAP2)</li>
	<li>Questionnaire Answered: varies (this is from responding to verification requests)</li>
  </ul>

<p><img class="scoring" src="/scoring_collection_power.png" alt="Collection Power"/><b>COLLECTION POWER</b>: This is determined by the total amount of all your FiGPiN powers.</p>

<p><img class="scoring" src="/scoring_figpin_power.png" alt="FiGPiN Power"/><b>FiGPiN POWER</b>: This is a FiGPiN's FACTORY SCORE multiplied by its STORY SCORE.</p>

<p><img class="scoring" src="/scoring_figpin_ultra.png" alt="FiGPiN Ultra"/><b>FiGPiN ULTRA</b>: You will be able to purchase FiGPiN ULTRA Exclusives based on a combination of your COLLECTION POWER and your COLLECTOR SCORE.</p>
</div>

<div class="scoring">
<h5 align="center"><img class="scoring" src="/scoring_factory.png" alt="Factory Score"/> FACTORY SCORE</h5>
<p>Every FiGPiN ever made comes with a <b>FACTORY SCORE</b>. This score is determined by the three manufacturing facets of that FiGPiN.</p>
<p><img class="scoring" src="/scoring_edition.png" alt="Edition"/><b>EDITION</b>: All of the FiGPiNs that are made in one production run belong to an EDITION.</p>
<p><img class="scoring" src="/scoring_volume.png" alt="Volume"/><b>VOLUME</b>: This score is determined by the number of FiGPiNs that are manufactured in one production run.</p>
<p><img class="scoring" src="/scoring_sequence.png" alt="Sequence"/><b>SEQUENCE</b>: This score is determined by the order in which your FiGPiN was made during manufacturing. </p>
</div> 

<div class="scoring">
<h5 align="center"><img class="scoring" src="/scoring_story.png" alt="Story Score"/> STORY SCORE</h5>
<p>A FiGPiN's <b>STORY SCORE</b> tells the history of that FiGPiN after it has been claimed by a collector.</p>
<p><b>CLAIM</b></p>
<ul>
  <li class="scoring"><img class="scoring" src="/scoring_claim.png" alt="Claim"/>1st Claim: 50 (Newly claimed FiGPiN)</li>
  <li class="scoring"><img class="scoring" src="/scoring_reclaim.png" alt="Re-Claim"/>Re-Claim: 20 (Previously claimed by someone else)</li>
</ul>

<p><img class="scoring" src="/scoring_launch.png" alt="Launch"/><b>LAUNCH</b>: 5-100 (If you are one of the first people to launch a FiGPiN, you will get a higher score.)</p>
<p><b>SEQUENCE</b></p>
<ul>
  <li class="scoring"><img class="scoring" src="/scoring_sequence_first.png" alt="First Off The Line"/>First off the Line: 40 (When your FiGPiN's Sequence Number is the first one of the run.)</li>
  <li class="scoring"><img class="scoring" src="/scoring_sequence_last.png" alt="Last Chopper Out"/>Last Chopper Out: 40 (When your FiGPiN's Sequence Number is the last one in the run.)</li>
  <li class="scoring"><img class="scoring" src="/scoring_sequence_match.png" alt="Super Match"/>Super Match: 100 (When your FiGPiN number matches your FiGPiN's Sequence Number)</li>
  <li class="scoring"><img class="scoring" src="/scoring_sequence_excess.png" alt="Excess"/>Excess Lot: 20 (When your FiGPiN's Sequence Number is over the labeled volume.)</li>
</ul>
<p><img class="scoring" src="/scoring_boosts.png" alt="Boosts"/><b>BOOSTS</b>: 0-100 (FiGPiNs can only be BOOSTED during the 24 hours time period while they are in the UNLOCKER ROOM.</p>
<p><img class="scoring" src="/scoring_cohort.png" alt="Cohort"/><b>COHORT</b>: 0-100 (10 points for every 10% of the Serial Numbers claimed for this Edition)</p>
<p><img class="scoring" src="/scoring_chrono.png" alt="Chrono"/><b>CHRONO</b>: 10+ (This FiGPiN has celebrated one trip around the sun! For each additional year that passes, it will receive an additional 10 points.)</p>
<p><b>CHASE DAY</b></p>
<ul>
  <li class="scoring"><img class="scoring" src="/scoring_chase.png" alt="Chase"/>Loss: 1+ (1 addition points for each losing week.)</li>
  <li class="scoring"><img class="scoring" src="/scoring_chase.png" alt="Chase"/>Win: 5 (5 points when a CHASE is won.)</li>
</ul>
<p><img class="scoring" src="/scoring_insight.png" alt="Insight"/><b>INSIGHT</b>: 20 (From a survey on Disney Parks FiGPiNs)</p>
<p><b>COLLECTOR</b></p>
<ul>
  <li class="scoring"><img class="scoring" src="/scoring_deluxe_box.png" alt="Deluxe"/>Deluxe Box Set: 10, 15 or 20</li>
  <li class="scoring"><img class="scoring" src="/scoring_deluxe_plus.png" alt="Deluxe+"/>Deluxe+ Box Set: 25 or 50 (Set with FiGPiN Logo)</li>
  <li class="scoring"><img class="scoring" src="/scoring_2_pack.png" alt="2-Pack"/>2-Pack: 10</li>
  <li class="scoring"><img class="scoring" src="/scoring_set.png" alt="Set"/>Set: 10</li>
</ul>
<p><img class="scoring" src="/scoring_glitch.png" alt="Glitch"/><b>GLITCH</b>: 20 (Bonus due to incorrect Mandalorian FiGPiNs)</p>
<p><img class="scoring" src="/scoring_gift_pass.png" alt="Gift Pass"/><b>GIFT PASS</b>: 5 (Awarded by FiGPiN to resolve customer service issues)</p>
<p><img class="scoring" src="/scoring_gofig.png" alt="Gofig"/><b>GOFiG</b>: 15-100 (Random bonus from FWAP2 or ECCC 202.)</p>
<p><img class="scoring" src="/scoring_arena.png" alt="Arena"/><b>ARENAS</b>: 0-100 (Starts with 5 points)</p>
<p><img class="scoring" src="/scoring_arenacheckin.png" alt="Arena Checkin"/><b>ARENA Check In</b>: 20 (Checked in at ECCC 2023)</p>
<p><img class="scoring" src="/scoring_reward.png" alt="Reward"/><b>REWARD</b>: 20 (Bonus for redeeming in-app logo)</p>

<p><b>ULTRA</b></p>
<ul>
  <li class="scoring"><img class="scoring" src="/scoring_figpin_ultra.png" alt="Ultra"/>ULTRA Power to the Pin: 100 (Bonus for ULTRA)</li>
  <li class="scoring"><img class="scoring" src="/scoring_figpin_ultra.png" alt="Ultra"/>ULTRA Power to the Collection: 100 (Given to one other FiGPiN by an ULTRA)</li>
  <li class="scoring"><img class="scoring" src="/scoring_snap.png" alt="Snap"/>SNAP Power to the Community: 5+ (FiGPiNs may have multiple SNAP cards)</li>
  <li class="scoring"><img class="scoring" src="/scoring_snap.png" alt="Snap"/>SNAP Power to the Community: 0-100 (% of flips from an ULTRA SNAP)</li>
</ul>
</div> 

</div>
    );
}

export default Resources;


