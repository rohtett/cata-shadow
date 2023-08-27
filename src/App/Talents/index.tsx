import { useState } from "react";
import Talent from "./Talent";
import Spell from "../Spell";

const dungeon = {
  name:"dungeon",
  shadow:[3,2,2,undefined,0,3,2,2,undefined,1,2,2,0,1,2,2,2,1,0,undefined,0,2,3,undefined,undefined,1,undefined,undefined],
  discipline:[0,3,2,undefined,2,1,0,0,],
  holy:[0,0,0,undefined,undefined,0,0,0,0,0,0,0,0,undefined,0,0,0,0,0,0,0,0,0,undefined,0,0,undefined,undefined]
};
const raid = {
  name:"raid",
  shadow:[3,2,2,undefined,0,3,2,2,undefined,1,0,2,0,1,2,2,2,1,0,undefined,0,2,3,undefined,undefined,1,undefined,undefined],
  discipline:[1,3,3,undefined,2,1,0,0,0,0,0,0,undefined,0,0,0,0,0,0,0,0,undefined,0,undefined,undefined,0,undefined,undefined],
  holy:[0,0,0,undefined,undefined,0,0,0,0,0,0,0,0,undefined,0,0,0,0,0,0,0,0,0,undefined,0,0,undefined,undefined]
}
const pvp = {
  name:"pvp",
  shadow:[3,0,2,undefined,2,0,2,2,undefined,1,2,2,1,1,2,2,1,1,2,undefined,1,2,3,undefined,undefined,1,undefined,undefined],
  discipline:[2,3,0,undefined,2,1,0,0],
  holy:[0,0,0,undefined,undefined,0,0,0,0,0,0,0,0,undefined,0,0,0,0,0,0,0,0,0,undefined,0,0,undefined,undefined]
}

const Talents = (props:any) => {
  const [build, setBuild] = useState(dungeon);
  return (
    <article id="talents">
    <section>
      <h3>Talents</h3>
        <p>The majority of the recommended talents for PvE content is included within the Dungeon and Raid builds, however there is a little room for lee-way to adjust your build to your own preference. For example, picking up <Spell title="Psychic Horror" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> instead of an extra point in <Spell title="Mental Agility" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>.<br /><br />For PvP builds, there is also a few points of lee-way available to make your build be hybrid or more offensive!</p>
        <ul id="build-planner">
          <input type="radio" name="build" id="dungeon"
            checked={build.name==="dungeon"}
            onChange={()=> {
              setBuild(dungeon)
            }}
          />
          <label htmlFor="dungeon" className="build">
            <li>
              <div className="build-title">Dungeon Build</div>
              <p>Recommended build included with utility for open-world content and dungeons, as well as certain raid encounters.</p>
            </li>
          </label>
          <input type="radio" name="build" id="raid"
            checked={build.name==="raid"}
            onChange={()=> {
              setBuild(raid)
            }}
          />
          <label htmlFor="raid" className="build">
            <li>
              <div className="build-title">Raid Build</div>
              <p>Recommended build purposed for raiding and survivability.</p>
            </li>
          </label>
          <input type="radio" name="build" id="pvp"
            checked={build.name==="pvp"}
            onChange={()=> {
              setBuild(pvp)
            }}
          />
          <label htmlFor="pvp"className="build">
            <li>
              <div className="build-title">PvP Build</div>
              <p>This build sacrifices a lot of the damaging talents used in the other builds in favour of increased CC and survivability.</p>
            </li>
          </label>
        </ul>
        <div id="talent-builder">
          <section id="discipline">
            <h4><div className="spell-border"><div className="spell-icon" id="power-word-shield" /></div><div><span>Discipline</span><span>{build.discipline.reduce((sum, each) => {return each!==undefined? sum! + each: sum}, 0)}</span></div></h4>
            <div className="talent-tree discipline">
            { props.spec? (
              props.spec.off[0].map((talent:any, index:number)=> (
                <Talent talent={talent} setViewer={props.setViewer} viewer={props.viewer} points={build.discipline[index]} key={talent.id} />
              ))
            ):(<div>No Data</div>) }
            </div>
          </section>
          <section id="holy">
            <h4><div className="spell-border"><div className="spell-icon" id="guardian-spirit" /></div><div><span>Holy</span><span>{build.holy.reduce((sum, each) => {return each!==undefined? sum! + each: sum}, 0)}</span></div></h4>
            <div className="talent-tree holy">
            { props.spec? (
              props.spec.off[1].map((talent:any, index:number)=> (
                <Talent talent={talent} setViewer={props.setViewer} viewer={props.viewer} points={build.holy[index]} key={talent.id} />
              ))
            ):(<div>No Data</div>) }
            </div>
          </section>
          <section id="shadow">
            <h4><div className="spell-border"><div className="spell-icon" id="shadow-word-pain" /></div><div><span>Shadow</span><span>{build.shadow.reduce((sum, each) => {return each!==undefined? sum! + each: sum}, 0)}</span></div></h4>
            <div className="talent-tree shadow">
            { props.spec? (
              props.spec.main.map((talent:any, index:number)=> (
                <Talent talent={talent} setViewer={props.setViewer} viewer={props.viewer} points={build.shadow[index]} key={talent.id} />
              ))
            ):(<div>No Data</div>) }
            </div>
          </section>
        </div>
        <p>In order to optimise your PvP build to a more hybrid playability, you would have to gain the Improved Mind Blast talent, for which you could sacrifice a variety of talents. You will need a combination of up to three talent points from any of the three talents listed below:</p>
        <ol>
          <li><Spell title="Twisted Faith" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> (up to 1 point) – if by any chance you are probably well over hit-cap anyways in your PvE gear and don't have enough gold to reforge (but enough to get a respec).</li>
          <li><Spell title="Mind Melt" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> (up to 1 points) – you will lose damage by taking this talent, however without DS-Tier set bonuses, the amount of damage you will lose is drastically reduced.</li>
          <li><Spell title="Phantasm" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> (up to 2 points) – while this talent provides a lot of benefit in PvP, it has a very similar effect to the Discipline 4-piece bonus provided by the gear you wear.</li>
          <li><Spell title="Masochism" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> (up to 2 points) – with high gear (and thus, mana regen), this talent may find benefit not included in either of these builds for casual PvE content such as dungeons.</li>
          <li><Spell title="Paralysis" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> (up to 2 point) – with reduced cooldown on <Spell title="Mind Blast" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>, you will be able to use this effect more often, and a 50% chance to proc it's effect isn't much to miss.</li>
        </ol>
      </section>
      <section>
        <h3>Glyphs</h3>
      </section>
    </article>
  )
}

export default Talents;
