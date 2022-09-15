import { NavLink } from "react-router-dom";
import "./index.css";

const Introduction = () => {
  return (
    <article>
      <section>
        <h3>Introduction</h3>
        <p>Shadow Priest has a rocky start to the expansion; having two very strong healing specialisations to them, Shadow became very underappreciated. By Dragon Soul patch, Shadow can easily be recognised as a strong damage spec, matching and even exceeding some of its ranged competitors. It presents the player with a rotation that is both easy to understand and easy to master.</p>
        <p>The strengths of Shadow lies in it's ability to cleave enemies at range. Shadow is un-matched when it comes to its multi-dotting (hitting multiple targets with damage over time) abilities, surpassing even Affliction Warlock and Balance Druid. This allows it to easily surpass Shamans in situations where enemies cannot stand close enough to be cleaved otherwise.</p>
      </section>
      <section id="spells">
        <h3>Notable Spells and Talents</h3>
        <p>Every class is unique, and these are just some of the spells which makes Shadow Priest what it is.</p>
        <ul>
          <li><div className="spell-border"><div className="spell-icon" id="vampiric-embrace"></div></div>Vampiric Embrace</li>
          <p>This spell heals the party for a maximum of 18% of all single target Shadow spell damage you deal, including over-time effects. 6% of all damage is done to the priest, whereas each subsequent party member (up to 4) will receive 3% of that damage each in healing.</p>
          <li><div className="spell-border"><div className="spell-icon" id="shadow-word-death"></div></div>Shadow Word: Death</li>
          <p>Not all classes have access to an execute ability... Shadow Priest is not all classes.</p>
          <li><div className="spell-border"><div className="spell-icon" id="dispersion"></div></div>Dispersion</li>
          <p>This spells acts not only provides a whopping 90% damage reduction, it also serves as a quick way to quickly gain mana in a pinch!</p>
          <li><div className="spell-border"><div className="spell-icon" id="mass-dispel"></div></div>Mass Dispel</li>
          <p>The legendary ability is not just limited to other Priest specialisations, but Shadow too! All without removing you from your Shadowform stance.</p>
          <li><div className="spell-border"><div className="spell-icon" id="mind-control"></div></div>Mind Control</li>
          <p>While it serves little purpose in a PvE environment, it is a particularly strong spell for fighting against other players.</p>
        </ul>
        <p>On top of these, Shadow Priest is also capable of providing many other useful raid utility, such as 585 Stamina buff, 195 Shadow Resistance and 5% Haste.</p>
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
