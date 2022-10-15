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
          <li className="notable-spell">
            <div className="spell-border">
              <div className="spell-icon" id="vampiric-embrace" />
            </div>
            <div className="spell-title">Vampiric Embrace</div>
              <div className="spell-tooltip">
                <div className="spell-tooltip-title">Vampiric Embrace</div>
                <table className="tooltip-table">
                  <tr>
                    <td>Instant</td>
                    <td />
                  </tr>
                </table>
                <span>Fills you with the embrace of Shadow energy, causing you to be healed for 6% and other party members to be healed for 3% of any single-target Shadow spell damage you deal.</span>
            </div>
          </li>
          <p>The amount of healing this spell provides over prolonged encounters is simply incredible... and all this both passively without any effort and for free, just by being in a group.</p>
          <li className="notable-spell">
            <div className="spell-border">
              <div className="spell-icon" id="shadow-word-death" />
            </div>
            <div className="spell-title">Shadow Word: Death</div>
              <div className="spell-tooltip">
                <div className="spell-tooltip-title">Shadow Word: Death</div>
                <table className="tooltip-table">
                  <tr>
                    <td>2471 mana</td>
                    <td>40 y range</td>
                  </tr>
                  <tr>
                    <td>Instant</td>
                    <td>10 sec cooldown</td>
                  </tr>
                </table>
                <span>A word of dark binding that inflicts 4900 Shadow damage to the target. Deals three times as much damage to targets below 25% health.<br /><br />If the target is not killed by Shadow Word: Death, the caster takes damage equal to the damage inflicted upon the taret.</span>
              </div>
          </li>
          <p>Not all classes have access to an execute ability... Shadow Priest is not all classes.</p>
          <li className="notable-spell">
            <div className="spell-border">
              <div className="spell-icon" id="dispersion" />
            </div>
            <div className="spell-title">Dispersion</div>
              <div className="spell-tooltip">
                <div className="spell-tooltip-title">Dispersion</div>
                <table className="tooltip-table">
                  <tr>
                    <td>Instant</td>
                    <td>2 min cooldown</td>
                  </tr>
                </table>
                <span>You disperse into pure Shadow energy, reducing all damage taken by 90%. You are unable to attack or cast spells, but you regenerate 6% mana every 1 sec for 6 sec.<br /><br />Dispersion can be cast while stunned, feared or silenced. Clears all snare and movement imparing effects when cast, and makes you immune to them while dispersed.</span>
              </div>
          </li>
          <p>This spells acts not only provides a whopping 90% damage reduction, it also serves as a quick way to quickly gain mana in a pinch!</p>
          <li className="notable-spell">
            <div className="spell-border">
              <div className="spell-icon" id="mass-dispel" />
            </div>
            <div className="spell-title">Mass Dispel</div>
              <div className="spell-tooltip">
                <div className="spell-tooltip-title">Vampiric Embrace</div>
                <table className="tooltip-table">
                  <tr>
                    <td>7824 mana</td>
                    <td>30 y range</td>
                  </tr>
                  <tr>
                    <td>1.24 sec cast</td>
                    <td />
                  </tr>
                </table>
                <span>Dispels magic in a 15 yard radius, removing 1 harmful spell from each friendly target and 1 beneficial spell from each enemy target. Affects a maximum of 10 friendly targts and 10 enemy targets. This dispel is potent enough to remove Magic effects that are normally undispellable.</span>
              </div>
          </li>
          <p>The legendary ability is not just limited to other Priest specialisations, but Shadow too! All without removing you from your Shadowform stance.</p>
          <li className="notable-spell">
            <div className="spell-border">
              <div className="spell-icon" id="mind-control" />
            </div>
            <div className="spell-title">Mind Control</div>
              <div className="spell-tooltip">
                <div className="spell-tooltip-title">Mind Control</div>
                <table className="tooltip-table">
                  <tr>
                    <td>2471 mana</td>
                    <td>30 y range</td>
                  </tr>
                  <tr>
                    <td>2.07 sec cast</td>
                    <td />
                  </tr>
                </table>
                <span>Controls a humnaoid mind up to level 88, but increases the time between its attacks by 25%. Lasts up to 30 sec.</span>
              </div>
          </li>
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
