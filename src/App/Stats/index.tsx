import "./index.css";

const Stats = () => {
  return (
    <article>
      <section>
        <h3>Understanding your statistics</h3>
        <p><strong>Intellect</strong> provides spell power which directly increases the damage all of your spells do, as well as increasing your mana pool and additional critical strike rating. You should look for any opportunity possible to increase your total amount of intellect.</p>
        <p><strong>Hit or Spirit</strong> determines your chance to miss a target with spells. After reaching the hit cap for your target it is no longer a valuable stat. As a Shadow Priest, Spirit is converted directly into Hit.</p>
        <p><strong>Haste</strong> affects the speed of your spell casts as well as how quickly each of your damage over time abilities deal damage.</p>
        <p><strong>Mastery</strong> increases the damage of your Shadow Orbs when consumed by Mind Blast or Mind Spike, as well as the bonus damage buff given to all your damage over time effects thereafter.</p>
        <p><strong>Critical Strike</strong> will increase the chances for your spells to critically hit.</p>
      </section>
      <section>
        <h3>Stat priority</h3>
        <ol>
          <li>Intellect</li>
          <li>Hit or Spirit (until 17% hit cap, 1742 rating)</li>
          <li>Haste (until your haste cap, see below)</li>
          <li>Mastery</li>
          <li>Critical Strike</li>
          <li>Haste</li>
        </ol>
      </section>
      <section>

      </section>
    </article>
  )
}

export default Stats;
