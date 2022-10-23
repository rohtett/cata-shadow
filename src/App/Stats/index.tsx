import Table from "./Table/index";

const Stats = (props:any) => {
  return (
    <article>
      <section>
        <h3>Understanding your Statistics</h3>
        <p><strong>Intellect</strong> provides spell power which directly increases the damage all of your spells do, as well as increasing your mana pool and additional critical strike rating. You should look for any opportunity possible to increase your total amount of intellect.</p>
        <p><strong>Hit or Spirit</strong> determines your chance to miss a target with spells. After reaching the hit cap for your target it is no longer a valuable stat. As a Shadow Priest, Spirit is converted directly into Hit.</p>
        <p><strong>Haste</strong> affects the speed of your spell casts as well as how quickly each of your damage over time abilities deal damage.</p>
        <p><strong>Mastery</strong> increases the damage of your Shadow Orbs when consumed by Mind Blast or Mind Spike, as well as the bonus damage buff given to all your damage over time effects thereafter.</p>
        <p><strong>Critical Strike</strong> will increase the chances for your spells to critically hit.</p>
      </section>
      <section>
        <h3>Stat Priority</h3>
        <ol>
          <li>Intellect</li>
          <li>Hit or Spirit (until 17% hit cap, 1742 rating)</li>
          <li>Haste (until your haste cap, see below)</li>
          <li>Mastery</li>
          <li>Critical Strike</li>
          <li>Haste</li>
        </ol>
      </section>
      <section id="haste-caps">
        <h3>Haste Caps</h3>
        <p>With haste, all your damage over time effects will deal damage at a quicker rate, while maintaining the same maximum duration. At certain haste breakpoints, certain spells will be able to deal an extra "tick" of damage within it's duration. These breakpoints are what we refer to as haste soft caps, and Shadow Priests have five available to them.
        <br />
        <br />
        Early priest playstyles would benefit greatly from as much haste as possible, however by the Firelands patch there is so much haste available that it is better to stop at specific caps. When you reach this point, it is always reccomended to aim for the +31.26% haste cap, but for your information, we have provided details of each haste cap that is available to priests.</p>
        <h4><div className="spell-border"><div className="spell-icon" id="devouring-plague" /></div>Devouring Plague</h4>
        <p>At the +31.26% haste cap, Devouring Plague will have a total of three additional ticks. The second additional tick is granted at the other haste cap, +18.74%. The first additional tick is automatically gained simply from the use of Shadowform's Mind Quickening as well as Darkness talents.</p>
        <div className = "tableContainer">
          <Table haste = "+18.74%" base = "1255" goblin = "1115" di = "845" goblindi = "710" />
          <Table haste = "+31.26%" base = "2737" goblin = "2583" di = "2283" goblindi = "2135" />
        </div>
        <h4><div className="spell-border"><div className="spell-icon" id="shadow-word-pain" /></div>Shadow Word: Pain</h4>
        <p>While the +24.97% haste cap, which grants a second additional tick, is often the first one Shadow Priests will aim for, the other cap cannot be attained unless the Priest is a Goblin having the Warlock buff, Dark Intent with full T-13 Best in Slot gear. This final +41.67% haste cap grants the third additional tick. Again, t first additional tick is automatically gained simply from the use of Shadowform's Mind Quickening as well as Darkness talents.</p>
        <div className = "tableContainer">
          <Table haste = "+24.97%" base = "1993" goblin = "1845" di = "1562" goblindi = "1419" />
          <Table haste = "+41.67%" base = "3970" goblin = "3804" di = "3482" goblindi = "3320" />
        </div>
        <h4><div className="spell-border"><div className="spell-icon" id="vampiric-touch" /></div>Vampiric Touch</h4>
        <p> The +30.00% haste cap will grant the Priest a second additional tick of Vampiric Touch, with the first tick being given from the Shadowform's Mind Quickening as well as Darkness talent's passive bonuses to haste.</p>
        <div className = "tableContainer">
          <Table haste = "+30.00%" base = "2589" goblin = "2437" di = "2149" goblindi = "1993" />
        </div>
      </section>
    </article>
  )
}

export default Stats;
