import Spell from "../Spell";

const Consumables = (props :any) => {
  return (
    <article id="consumables">
      <section>
        <h3>Consumables</h3>
        <div id="pots">
          <div>
            <p>There are a few consumables which are used in raiding that can facilitate higher performance, and easier progression. Flasks persist through death and typically last 1 hour but can be extended through guild perks and profession perks. Buffs granted by food are removed when you die, requiring you to eat again each time you wipe.<br /><br />Bearing this in mind, there are consumables in the game which can make this process much more affordable, such as Guild Cauldrons and Feasts which allow multiple people to drink and eat from.</p>
            <p>There are also potions, which are typically much cheaper than the other consumables but are used in much higher quantities. Each combat instances sees the use of 2 potions, one before the combat stats -- while puts the potion use on a cooldown but allows you to use it again within combat while still retaining the buffs provided by the potion.<br /><br/>The preffered potion used by Shadow priests are those that buff your Intellect and thus increase your damage.</p>
          </div>
          <ul className="consumables--list">
            <h4>Flask</h4>
            <li>
              <Spell title="Flask of the Draconic Mind" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
            </li>
            <h4>Food</h4>
            <li>
              <Spell title="Severed Sagefish Head" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
            </li>
            <li>
              <Spell title="Fortune Cookie" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
            </li>
            <h4>Potion</h4>
            <li>
              <Spell title="Volcanic Potion" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h3>Gems</h3>
        <p>Except for meta gems, gem sockets can fit any coloured gem but only activate the socket bonus if it is fitted with their specific colours. Note that an orange gem can satisfy both red and yellow gem sockets and activate their bonuses. Likewise, a purple gem can satisfy a blue gem socket.<br /><br />The top gem in each row is much more expensive than the bottom one, I would suggest using these for your best gear only.</p>
        <table id="gems">
          <tbody>
            <tr>
              <td>
                <div id="gem-meta" className="gem-slot"/>
              </td>
              <td>
                <div>
                  <Spell title="Burning Shadowspirit Diamond" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
                </div>
                <p>This slot can only fit meta gems, but requires at least 3 red-coloured gems throughout your gear to activate its effects.</p>
              </td>
              <td>
                This slot can only fit meta gems, but requires at least 3 red-coloured gems throughout your gear to activate its effects.
              </td>
            </tr>
            <tr>
              <td>
                <div id="gem-prismatic" className="gem-slot"/>
                <div id="gem-red" className="gem-slot"/>
              </td>
              <td>
                <div>
                  <Spell title="Brilliant Queen's Garnet" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
                </div>
                <div>
                  <Spell title="Brilliant Inferno Ruby" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
                </div>
                <p>Prismatic gem slots can satsify any coloured gem and activate their socket bonuses.</p>
              </td>
              <td>
                Prismatic gem slots can satsify any coloured gem and activate their socket bonuses.
              </td>
            </tr>
            <tr>
              <td>
                <div id="gem-yellow" className="gem-slot"/>
              </td>
              <td>
                <div>
                  <Spell title="Reckless Lava Coral" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
                </div>
                <div>
                  <Spell title="Reckless Ember Topaz" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
                </div>
                <p>Use these gems if the socket bonus you're activating is at least +20 intellect or +30 of another stat.</p>
              </td>
              <td>
                Use these gems if the socket bonus you're activating is at least +20 intellect or +30 of another stat.
              </td>
            </tr>
            <tr>
              <td>
                <div id="gem-blue" className="gem-slot"/>
              </td>
              <td>
                <div>
                  <Spell title="Purified Shadow Spinel" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
                </div>
                <div>
                  <Spell title="Purified Demonseye" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
                </div>
                <p>Use these gems if the socket bonus you're activating is at least +20 intellect or +30 of another stat.</p>
              </td>
              <td>
                Use these gems if the socket bonus you're activating is at least +20 intellect or +30 of another stat.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h3>Enchants</h3>
        <p>Using a main-hand and an off-hand usually provides greater stats of an equal item level two-handed weapon due to the extra enchant. If it helps you to reach a haste cap, you can use <Spell title="Enchant Gloves - Haste" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> in order to get it.</p>
        <div id="enchants">
          <div>
            <ul>
              <li><Spell title="Power Torrent" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/></li>
              <li><Spell title="Enchant Cloak - Greater Intellect" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/></li>
              <li><Spell title="Enchant Chest - Peerless Stats" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/></li>
              <li><Spell title="Enchant Bracer - Mighty Intellect" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/></li>
              <li><Spell title="Enchant Gloves - Greater Mastery" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/></li>
              <li><Spell title="Enchant Off-Hand - Superior Intellect" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/></li>
              <li><Spell title="Enchant Boots - Haste" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/></li>
            </ul>
          </div>
          <div>
              <ul>
                <li>
                  <Spell title="Arcanum of Hyjal" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
                  <p>Guardians of Hyjal reputation in Mount Hyjal.</p>
                </li>
                <li>
                  <Spell title="Greater Inscription of Charged Lodestone" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
                  <p>Therazane reputation in Deepholm.</p>
                </li>
              </ul>
            <ul>
              <li>
                <Spell title="Powerful Ghostly Spellthread" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
                <p>From Tailor</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="professions">
        <h3>Professions</h3>
        <p>Listed in order of benefit to the Priest, these are the best professions for your character and what benefits they bring to the table. Please note that Mining was excluded off this list as it provides only a stamina bonus which is of not benefit was it does not increase your damage.<br /><br />Generally, all professions provide at least an 80 intellect bonus, except for gathering professions. However, some offer slightly greater benefit.</p>
        <table>
          <tbody>
          <tr>
            <td>Tailoring</td>
            <td>
              <Spell title="Lightweave Embroidery" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
            </td>
          </tr>
          <tr>
            <td>Blacksmithing</td>
            <td>
              <Spell title="Socket Bracer" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
              <br />
              <Spell title="Socket Glove" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
            </td>
          </tr>
          <tr>
            <td>Engineering</td>
            <td>
              <Spell title="Synapse Springs" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
              <br />
              <Spell title="Grounded Plasma Shield" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
            </td>
          </tr>
          <tr>
            <td>Alchemy</td>
            <td>
              <Spell title="Mixology" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
            </td>
          </tr>
          <tr>
            <td>Enchanting</td>
            <td>
              <Spell title="Enchant Ring - Intellect" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
            </td>
          </tr>
          <tr>
            <td>Inscription</td>
            <td>
              <Spell title="Felfire Inscription" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
            </td>
          </tr>
          <tr>
            <td>Leatherworking</td>
            <td>
              <Spell title="Enchant Ring - Intellect" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
            </td>
          </tr>
          <tr>
            <td>Jewelcrafting</td>
            <td>
              <Spell title="Brilliant Chimera's Eye" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
            </td>
          </tr>
          <tr>
            <td>Herbalism</td>
            <td>
              <Spell title="Lifeblood" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>
            </td>
          </tr>
          </tbody>
        </table>
      </section>
    </article>
  )
}

export default Consumables;
