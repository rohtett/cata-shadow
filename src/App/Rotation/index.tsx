import Spell from "../Spell";

const Rotation = (props:any) => {
  return (
    <article id="rotation">
    <section>
      <h3>Understanding your Mastery</h3>
      <p>Shadow Priest's Mastery: Shadow Orb Power provides two main benefits. Using <Spell title="Mind Flay" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> or the ticking damage from <Spell title="Shadow Word: Pain" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> has a chance to give you a Shadow Orb. Consuming these will increase the damage of your next <Spell title="Mind Blast" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> or <Spell title="Mind Spike" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> by an amount depending on your mastery, as well as the number of stacks on the buff up to a maximum of three.</p>
      <p> After consuming the buff, you will gain <Spell title="Empowered Shadow" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>. Having the buff will provide you an increase in damage  based off your mastery for all damage over time effects. This means that if you have any ticking damage over time effects that are not empowered by this effect, you must re-apply them with the effect. This is especially important in earlier patches where it is common to apply your damage over time spells active when combat starts and must refresh when the relevant buffs are present. Mind Sear and Mind Flay count as damage over time effects and gain benefit from <Spell title="Empowered Shadow" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>.</p>
      <h3>General Rotation</h3>
      <p>A very basic priority-based rotation can be used to explain the general rotation, however it is very important to read the other parts to gain a stronger understanding of the class and all it's intracicies.</p>
      <ol>
        <li>Cast <Spell title="Mind Blast" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/></li>
        <li>Apply <Spell title="Shadow Word: Pain" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> if the target will live to sustain at least half the duration.</li>
        <li>Cast <Spell title="Shadow Word: Death" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> if the boss is below 25% health</li>
        <li>Cast <Spell title="Mind Spike" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> if the target will not live for longer than 8 seconds.</li>
        <li>Apply and maintain <Spell title="Vampiric Embrace" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> if the target will survive at least half the duration.</li>
        <li>Apply and maintain <Spell title="Devouring Plague" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> if the target will survive at least half the duration.</li>
        <li>Use <Spell title="Mind Flay" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> to refresh <Spell title="Shadow Word: Pain" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> if it is about to expire.</li>
        <li>Cast <Spell title="Mind Flay" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>.</li>
      </ol>
      <h3>Multiple Target Rotation</h3>
      <p>If there are four or more targets, it is always worth cast <Spell title="Mind Sear" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>.<br /><br /> For less than four targets, it is best to apply and maintain all of your damage over time effects on all targets. Remember, that <Spell title="Devouring Plague" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> can only affect a single target and that Mind Flay will refresh <Spell title="Shadow Word: Pain" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>. <br /><br />In both of these cases, it is usually worth using <Spell title="Mind Blast" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> for more damage and to apply the <Spell title="Empowered Shadow" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> buff which increases the damage of all damage over time effects, including that of <Spell title="Mind Sear" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>. <br /><br />It is also worth using <Spell title="Shadow Word: Death" inline="true" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> to execute targets below 25% health, providing there are no more than six targets. </p>
    </section>
    <section id="macros">
      <h3>Cooldown Usage</h3>
      <p>As a Shadow Priest, you only have two major cooldowns available to you, as well as any trinkets and enchants available to you. It is worth tracking these enchants, namely Power Torrent weapon enchant and Lightweave Embroidery if you have Tailoring.</p>
      <h4><Spell title="Shadowfiend" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/></h4>
      <p>Shadowfiend requires a target to cast and will immediately put you in combat. The creature summoned by the spell counts as a pet, which means that it's spell power will dynamically update with your own based off any buffs gained. The best time to use this cooldown is when you have all of these buffs available to you, so that it deals the most damage.</p>
      <h4><Spell title="Archangel" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/></h4>
      <p>Not only do you need to use this cooldown at the correct time, you will need to prepare accordingly beforehand. Archangel should always be used with five stacks of Dark Evangelism for maximum effect. This spell will increase the damage of your Mind Blast, Mind Spike, Mind Flay and Shadow Word: Death. Using this during your potion phases is especially important and you should always use it right before a Mind Blast empowered by Shadow Orbs, so that you can cast as many Mind Blasts during the cooldown as possible. If the boss is approaching 25% health, it is best to hold off on using this cooldown so you can execute using Shadow Word: Death with Archangel.</p>
      <h3>Mastering your Shadow Priest</h3>
      <h4><div className="spell-border"><div className="spell-icon" id="gear-cog" /></div>Tier-13 Set Bonus</h4>
      <p>The Dragon Soul tier-13 set bonus is one of the strongest bonuses in the game. The 2-set bonus will provide you with extra damage to your Shadow Word: Death with is already a very strong damage increase, but the 4-set will cause every attack made by your Shadowfiend to generate three Shadow Orbs which can be consumed by your Mind Blast and Mind Spike. This makes using Archangel with Shadowfiend a necessity, and requires careful to get maximum effect out of the combination. With this, you gain your first real cooldown spells.</p>
      <p>It is important to remember that, like all pets, Shadowfiend benefits from Heroism separelty from the priest, which means that their attack speed will match yours if you gain the benefit and your pet does not.</p>
      <h4><div className="spell-border"><div className="spell-icon" id="stopwatch" /></div>DoT Clipping</h4>
      <p>Refreshing a damage over time effect right before it deals it's final tick, will cause the spell to generate one free extra tick. The newly applied buff will be longer than usual, and over an extended period of time these extra ticks will contribute more and more damage to your rotation. It is important to note that Vampiric Touch has a cast time, which makes it slightly harder to Dot clip.</p>
      <p>If you DoT clip a weaker version of a damage over time effect with a stronger version (through more spell power, haste or Empowered Shadow buff) then the penultimate tick will deal damage according to the new stats. Similarly, if you refresh a stronger version of the spell with a weaker one, the penultimate tick will now deal less damage, just as with any refreshing of damage over time effects.</p>
      <h4><Spell title="Shadowy Apparition" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/></h4>
      <p>You should aim to move as much as possible during the down-time presented by your global cooldowns. It's not worth moving over casting <Spell title="Mind Flay" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> at any time, however there are certain situations where such opportunities present themselves.</p>
      <ul>
      <li>After refreshing <Spell title="Devouring Plague" inline={true} spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/>.</li>
      <li>After using an instant cast <Spell title="Mind Blast" inline={true}spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> triggered by <Spell title="Mind Melt" inline={true}spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> when bursting with the tier 14 4-set bonus. Note this only applies if there is a target that has <Spell title="Shadow Word: Pain" inline={true}spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/> applied.</li>
      </ul>
      <h3>Macros</h3>
      <h4><Spell title="Shadowfiend" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/></h4>
      <p>By default, your Shadowfiend will try to follow your target as you attack different enemies to try and refresh your damage over time effects. This macro will put your Shadowfiend on passive and keep it attacking a single target. It is important that you press the macro again to make the pet attack a new target if their current target dies. To override this target, you must use a <div className="code inline"> /petattack</div> macro.</p>
      <div className="code">
        #showtooltip <br />
        /cast Shadowfiend <br />
        /petpassive <br />
        /petattack [@pettarget,noexists] <br />
      </div>
      <h4><Spell title="Dispersion" spec={props.spec} viewer={props.viewer} setViewer={props.setViewer}/></h4>
        <p>Cancelling Dispersion is a lot simpler with macros than by right-clicking the ever-changing buff list in combat. It's quite easy to macro it together with another spell so that you don't accidentally double click Dispersion.</p>
        <div className="code">
          #showtooltip <br />
          /cancelaura Dispersion <br />
          /cast Mind Blast
        </div>
    </section>
    </article>
  )
}

export default Rotation;
