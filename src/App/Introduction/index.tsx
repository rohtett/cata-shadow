import { NavLink } from "react-router-dom";
import Spell from "../Spell";

const Introduction = (props:any) => {
  return (
    <article>
    <div id="banner" />
      <section>
        <h3>Introduction</h3>
        <p>Shadow Priest has a rocky start to the expansion. Having two very strong healing specialisations to the class, Shadow became very underappreciated. By Dragon Soul patch however, Shadow can easily be recognised as a strong damage spec. Matching, and even exceeding some of its ranged competitors, it presents the player with a rotation that is both easy to understand and easy to master.</p>
        <p>The strengths of Shadow lies in it's ability to cleave enemies at range. Shadow is un-matched when it comes to its multi-dotting (hitting multiple targets with damage over time) abilities, surpassing even Affliction Warlock and Balance Druid. This allows it to easily surpass Shamans, and melee DPSes, in situations where enemies cannot stand close enough to be cleaved otherwise.</p>
        <p>While Shadow brings a lot of the same buffs to the raid as other ranged damage classes, it has uniquness in the cooldowns and on-use skills it brings to a group. They have spells which grant a burst of healing or mana, that can save a wipe. While also offering a lot in the ways of utility such as dispelling and pulling other players towards them.</p>
      </section>
      <section id="spells">
        <h3>Notable Spells and Talents</h3>
        <p>Every class is unique, and these are just some of the spells which makes Shadow Priest what it is.</p>
        <ul>
          <li className="notable-spell">
            <Spell title="Shadowform"spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
          </li>
          <p>While very cool to look at, this skill increases all Shadow damage you do significantly and also provides the 5% haste buff to your entire raid.</p>
          <li className="notable-spell">
            <Spell title="Mind Sear"spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
          </li>
          <p>A very convenient and efficient way to kill multiple enemies at once.</p>
          <li className="notable-spell">
            <Spell title="Shadow Word: Death" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
          </li>
          <p>An execute ability is always appreciated, and this one is particularly strong especially when it comes to end-game.</p>
          <li className="notable-spell">
            <Spell title="Dispersion" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
          </li>
          <p>This spells acts not only provides a whopping 90% damage reduction, it also serves as a quick way to quickly gain mana in a pinch!</p>
          <li className="notable-spell">
            <Spell title="Leap of Faith" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
          </li>
          <p>While it's not implicitly a Shadow spell, it's very much a staple skill of this class and something that you may want to consider when picking this spec.</p>
        </ul>
        <h3>Buffs, Debuffs and Useful Abilities</h3>
        <ul className="buffs">
        <li className="notable-spell">
          <Spell title="Power Word: Fortitude"spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
        </li>
        <li className="notable-spell">
          <Spell title="Shadow Protection"spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
        </li>
        <li className="notable-spell">
          <Spell title="Power Word: Shield"spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
        </li>
          <li className="notable-spell">
            <Spell title="Vampiric Embrace"spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
          </li>
          <li className="notable-spell">
            <Spell title="Improved Mind Blast"spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
          </li>
          <li className="notable-spell">
            <Spell title="Psychic Scream"spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
          </li>
          <li className="notable-spell">
            <Spell title="Mass Dispel"spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
          </li>
          <li className="notable-spell">
            <Spell title="Fear Ward"spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
          </li>
          <li className="notable-spell">
            <Spell title="Divine Hymn"spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
          </li>
          <li className="notable-spell">
            <Spell title="Hymn of Hope"spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
          </li>
          <li className="notable-spell">
            <Spell title="Fade"spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
          </li>
          <li className="notable-spell">
            <Spell title="Ressurection"spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
          </li>
        </ul>
      </section>
      <section id="contents">
        <h3>Contents</h3>
        <p>This guide will cover the following topics:</p>
        <ul>
          <NavLink to="/cata-shadow/talents">
            <li>Talents and Glyphs</li>
          </NavLink>
          Learn more about talents, what's recommended and how you may customise your build.
          <NavLink to="/cata-shadow/rotation">
            <li>Rotation</li>
          </NavLink>
          Understand how to play your class in an optimal way.
          <NavLink to="/cata-shadow/stats">
            <li>Stats</li>
          </NavLink>
          Read up on respective values of your statistics.
          <NavLink to="/cata-shadow/consumables">
            <li>Consumables</li>
          </NavLink>
          Figure out which gems, enchantments and consumables are best used with your class to optimise output. As well as information about the best Glyphs.
        </ul>
      </section>
    </article>
  )
}

export default Introduction;
