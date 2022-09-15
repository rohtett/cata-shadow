import { useState } from "react";
import "./index.css";
import Row from "./Row";
import Tooltip from "./Tooltip";


const shadowOne =
[["Darkness", "darkness", "Increase spell haste by 1/2/3%."],
["Improved Shadow Word: Pain", "shadow-word-pain", "Increases the damage of your Shadow Word: Pain spell by 3/6%."],
["Veiled Shadows", "veiled-shadows", "Decreases the cooldown of your Fade ability by 3/6 sec, and reduces the cooldown of your Shadowfiend ability by 30/60 sec."], undefined];

const shadowTwo =
[["Improved Psychic Scream", "improved-psychic-scream", "Reduces the cooldown of your Psychic Scream spell by 2/4 sec."],
["Improved Mind Blast", "mind-blast", "Reduces the cooldown of your Mind Blast spell by 0.5/1/1.5 sec, and while in Shadowform your Mind Blast has a 33/66/100% chance to reduce all healing done to the target by 10% for 10 sec."],
["Improved Devouring Plague", "devouring-plague", "Your Devouring Plague instantly deals damage equal to 15/30% of its total periodic effect."],
["Twisted Faith", "twisted-faith", "Increases your Shadow spell damage by 1/2%, and grants you spell hit rating equal to 50/100% of any Spirit gained from items or effects."]];

const shadowThree =
[undefined, ["Shadowform", "shadowform", "Assume a Shadowform, increasing your Shadow damage by 15%, reducing all damage done to you by 15%, and increasing all party and raid members spell haste by 5%. However, you may not cast Holy spells while in this form."],
["Phantasm", "phantasm", "Your Fade ability now has a 50/100% chance to remove all movement imparing effects."],
["Harnessed Shadows", "harnessed-shadows", "Increases the chance for you to gain a Shadow Orb when dealing damage with your Mind Flay and Shadow Word: Pain by 4/8%, and you have a 50/100% chance to gaina Shadow Orb when criticall hit by any attack."]];

const shadowFour =
[["Silence", "silence", "Silences the target, preventing them from casting spells for 5 sec. Non-player victim spellcasting is also interrupted for 3 sec."],
["Vampiric Embrace", "vampiric-embrace", "Fills you with the embrace of Shadow energy, causing you to be healed for 6% and other party members to be healed for 3% of any single-target Shadow spell damage you deal."],
["Masochism", "masochism", "When you take a damaging attack equal to or greater than 10% of your total health or damage yourself with Shadow Word: Death, you instantly gain 5/10% of your total mana."],
["Mind Melt", "mind-melt", "Increases the damage done with your Shadow Word: Death by 15/30% on targets at or below 25% health, and when you deal damage with Mind Spike, the cast time of your next Mind Blast is reduced by 25/50% lasting 6 sec. Mind Melt can stack up to 2 times."]];

const shadowFive =
[["Pain and Suffering", "pain-and-suffering", "Your Mind Flay has a 30/60% chance to refresh the duration of your Shadow Word: Pain on the target, and reduces the damage you take from your own Shadow Word: Death by 20/40%."],
["Vampiric Touch", "vampiric-touch", "Causes [1.76 * Spell Power] damage over 15 sec, and when you deal damage with Mind Blast to an affected target you cause up to 10 party or raid members to gain 1% of their maximum mana per 10 sec."],
["Paralysis", "paralysis", "When you critically hit with your Mind Blast, you cause the target to be unable to move for 2/4 sec."], undefined];

const shadowSix =
[["Psychic Horror", "psychic-horror", "You terrify the target, causing them to tremble in horror for 3 sec and drop their main hand and ranged weapons for 10 sec."],
["Sin and Punishment", "sin-and-punishment", "When you Vampiric Touch is dispelled, the dispeller and all nearby enemy targets have a 50/100% chance to be instantly feared in horror for 3 sec. When your Mind Flay critically hits, the cooldown of your Shadowfiend is reduced by 5/10 sec. "],
["Shadowy Apparition", "shadowy-apparition", "When you deal period damage with your Shadow Word: Pain, you have a 4/8/12% chance to summon a shadow version of yourself which will slowly move towards a target which is afflicted by your Shadow Word: Pain. Once reaching the target, it will instantly deal [0.46 * Spell Power] shadow damage. While moving, the chance to summon the shadowy apparition is increased to 20/40/60%. You can have up to 4 Shadowy Apparitions active at a time."], undefined];
const shadowSeven = [undefined,
["Dispersion", "dispersion", "You disperse into pure Shadow energy, reducing all damage taken by 90%. You are unable to atack or cast spells, but you regenerate 6% mana every 1 sec for 6 sec."], undefined, undefined];

const discOne =
[["Improved Power Word: Shield", "power-word-shield", "Increases the damage absorbed by your Power Word: Shield by 10%."],
["Twin Disciplines", "twin-disciplines", "Increases your Shadow and Holy spell damage and healing by 2/4/6%."],
["Mental Agility", "mental-agility", "Reduces the mana cost of your instant cast spells by 4/8/12%."], undefined];

const discTwo =
[["Evangelism", "evangelism", "When you cast Smite, Holy Fire or Mind Flay you gain Evangelism. Stacks up to 5 times. Lasts for 20 sec. Evangelism (Smite, Holy Fire): Increases the damage done by your Smite, Holy Fire and Penance spells by 2/4% and reduces the mana cost of these spells by 3/6%. Dark Evangelism (Mind Flay): Increases the damage done by your Period Shadow spells by 1/2%."],
["Archangel", "archangel", "Consumes your Evangelism effects, causing an effect dependigng on what type of Evangelism effect was consumed. Archangel (Evangelism) - Instantly restores 1% of your total mana and increases your healing done by 3% for each stack. Lasts 18 sec. 30 sec cooldown. Dark Archangel (Dark Evangelism) - Instantly restores 5% of your total mana and increases the damage done by your Mind Flay, Mind Spike, Mind Blast and Shadow Word: Death by 4% for each stack. Lasts 18 sec. 90 sec cooldown."],
["Inner Sanctum", "inner-fire", "Your Inner Fire also reduces all spell damage taken by 2/4/6% while it is active, and the movement speed bonus of your Inner Will is increased by 2/4/6%."],
["Soul Warding", "soul-warding", "Reduces the cooldown of your Power Word: Shield ability by 1/2 sec."]];

const holyOne =
[["Improved Renew", "renew", "Increases the amount healed by your Renew spell by 5/10%."],
["Empowered Healing", "greater-heal", "Increases the healing done by your Flash Heal, Heal, Binding Heal and Greater Heal by 5/10/15%."],
["Divine Fury", "divine-fury", "Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.15/0.35/0.5 sec."], undefined];

const holyTwo = [undefined,
["Desperate Prayer", "desperate-prayer", "Instantly heals the caster for 30% of their total health."],
["Surge of Light", "surge-of-light", "You have a 3/6% chance when you Smite, Heal, Flash Heal, Binding Heal or Greater Heal to cause your next Flash Heal to be instant cast and cost no mana."],
["Inspiration", "inspiration", "Reduces your target's physical damage taken by 5/10% for 15 sec after getting a critical effect from your Flash Heal, Greater Heal, Binding Heal, Penance, Prayer of Mending, Prayer of Healing or Circle of Healing spell. "]];

const Talents = () => {
  const [selectedTalent, selectTalent] = useState(["", ""]);
  return (
    <article id="talents">
    <h3>Talents</h3>
      <div>
        <section id="discipline">
          <h4><div className="spell-border"><div className="spell-icon" id="power-word-shield" /></div>Discipline</h4>
          <Row tree="discipline" row="first" selectTalent = { selectTalent }
          talents={discOne} selectedTalent={ selectedTalent } />
          <Row tree="discipline" row="second" selectTalent = { selectTalent }
          talents={discTwo} selectedTalent={ selectedTalent } />
          <Row tree="discipline" row="third" selectTalent = { selectTalent }
          talents={[undefined]} selectedTalent={ selectedTalent } />
          <Row tree="discipline" row="fourth" selectTalent = { selectTalent }
          talents={[undefined]} selectedTalent={ selectedTalent } />
          <Row tree="discipline" row="fifth" selectTalent = { selectTalent }
          talents={[undefined]} selectedTalent={ selectedTalent } />
          <Row tree="discipline" row="sixth" selectTalent = { selectTalent }
          talents={[undefined]} selectedTalent={ selectedTalent } />
          <Row tree="discipline" row="seventh" selectTalent = { selectTalent }
          talents={[undefined]} selectedTalent={ selectedTalent } />
        </section>
        <section id="holy">
          <h4><div className="spell-border"><div className="spell-icon" id="guardian-spirit" /></div>Holy</h4>
          <Row tree="holy" row="first" selectTalent = { selectTalent }
          talents={holyOne} selectedTalent={ selectedTalent } />
          <Row tree="holy" row="second" selectTalent = { selectTalent }
          talents={holyTwo} selectedTalent={ selectedTalent } />
          <Row tree="holy" row="third" selectTalent = { selectTalent }
          talents={[undefined]} selectedTalent={ selectedTalent } />
          <Row tree="holy" row="fourth" selectTalent = { selectTalent }
          talents={[undefined]} selectedTalent={ selectedTalent } />
          <Row tree="holy" row="fifth" selectTalent = { selectTalent }
          talents={[undefined]} selectedTalent={ selectedTalent } />
          <Row tree="holy" row="sixth" selectTalent = { selectTalent }
          talents={[undefined]} selectedTalent={ selectedTalent } />
          <Row tree="holy" row="seventh" selectTalent = { selectTalent }
          talents={[undefined]} selectedTalent={ selectedTalent } />
        </section>
        <section id="shadow">
          <h4><div className="spell-border"><div className="spell-icon" id="shadow-word-pain" /></div>Shadow</h4>
          <Tooltip selectedTalent = { selectedTalent } selectTalent = { selectTalent } />
          <Row tree="shadow" row="first" selectTalent = { selectTalent }
          talents={shadowOne} selectedTalent={ selectedTalent } />
          <Row tree="shadow" row="second" selectTalent = { selectTalent }
          talents={shadowTwo} selectedTalent={ selectedTalent } />
          <Row tree="shadow" row="third" selectTalent = { selectTalent }
          talents={shadowThree} selectedTalent={ selectedTalent } />
          <Row tree="shadow" row="fourth" selectTalent = { selectTalent }
          talents={shadowFour} selectedTalent={ selectedTalent } />
          <Row tree="shadow" row="fifth" selectTalent = { selectTalent }
          talents={shadowFive} selectedTalent={ selectedTalent } />
          <Row tree="shadow" row="sixth" selectTalent = { selectTalent }
          talents={shadowSix} selectedTalent={ selectedTalent } />
          <Row tree="shadow" row="seventh" selectTalent = { selectTalent }
          talents={shadowSeven} selectedTalent={ selectedTalent } />
        </section>
      </div>
    </article>
  )
}

export default Talents;
