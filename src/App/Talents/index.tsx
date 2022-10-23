import { useState, useEffect } from "react";
import "./index.css";
import Viewer from "../Viewer";
import Talent from "./Talent";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";


const discOne = [["Improved Power Word: Shield", "power-word-shield", "Increases the damage absorbed by your Power Word: Shield by 10%."],
["Twin Disciplines", "twin-disciplines", "Increases your Shadow and Holy spell damage and healing by 2/4/6%."],
["Mental Agility", "mental-agility", "Reduces the mana cost of your instant cast spells by 4/8/12%."], undefined];

const discTwo = [["Evangelism", "evangelism", "When you cast Smite, Holy Fire or Mind Flay you gain Evangelism. Stacks up to 5 times. Lasts for 20 sec. Evangelism (Smite, Holy Fire): Increases the damage done by your Smite, Holy Fire and Penance spells by 2/4% and reduces the mana cost of these spells by 3/6%. Dark Evangelism (Mind Flay): Increases the damage done by your Period Shadow spells by 1/2%."],
["Archangel", "archangel", "Consumes your Evangelism effects, causing an effect dependigng on what type of Evangelism effect was consumed. Archangel (Evangelism) - Instantly restores 1% of your total mana and increases your healing done by 3% for each stack. Lasts 18 sec. 30 sec cooldown. Dark Archangel (Dark Evangelism) - Instantly restores 5% of your total mana and increases the damage done by your Mind Flay, Mind Spike, Mind Blast and Shadow Word: Death by 4% for each stack. Lasts 18 sec. 90 sec cooldown."],
["Inner Sanctum", "inner-fire", "Your Inner Fire also reduces all spell damage taken by 2/4/6% while it is active, and the movement speed bonus of your Inner Will is increased by 2/4/6%."],
["Soul Warding", "soul-warding", "Reduces the cooldown of your Power Word: Shield ability by 1/2 sec."]];

const holyOne = [["Improved Renew", "renew", "Increases the amount healed by your Renew spell by 5/10%."],
["Empowered Healing", "greater-heal", "Increases the healing done by your Flash Heal, Heal, Binding Heal and Greater Heal by 5/10/15%."],
["Divine Fury", "divine-fury", "Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.15/0.35/0.5 sec."], undefined];

const holyTwo = [undefined,
["Desperate Prayer", "desperate-prayer", "Instantly heals the caster for 30% of their total health."],
["Surge of Light", "surge-of-light", "You have a 3/6% chance when you Smite, Heal, Flash Heal, Binding Heal or Greater Heal to cause your next Flash Heal to be instant cast and cost no mana."],
["Inspiration", "inspiration", "Reduces your target's physical damage taken by 5/10% for 15 sec after getting a critical effect from your Flash Heal, Greater Heal, Binding Heal, Penance, Prayer of Mending, Prayer of Healing or Circle of Healing spell. "]];

const Talents = (props:any) => {
  const [talentInfo, setTalentInfo] = useState<any>();
  const talentCollectionRef = collection(db, "talent-info");
  useEffect(() => {
    const fetchTalentInfo = async() => {
      const data = await getDocs(talentCollectionRef);
      setTalentInfo(data.docs.map((doc:any) =>({...doc.data(), id:doc.id})));
      console.log("fetched server");
    }
    fetchTalentInfo();
  }, []);
  return (
    <article id="talents">
    <h3>Talents</h3>
      <Viewer mousePos={props.mousePos} viewer={props.viewer} />
      <div>
        <section id="discipline">
          <h4><div className="spell-border"><div className="spell-icon" id="power-word-shield" /></div>Discipline</h4>
          <div className="discipline"></div>
        </section>
        <section id="holy">
          <h4><div className="spell-border"><div className="spell-icon" id="guardian-spirit" /></div>Holy</h4>
          <div className="holy"></div>
        </section>
        <section id="shadow">
          <h4><div className="spell-border"><div className="spell-icon" id="shadow-word-pain" /></div>Shadow</h4>
          <div className="shadow">
          { talentInfo? (
            talentInfo.map((talent:any)=> (
              <Talent talent={talent} setViewer={props.setViewer} viewer={props.viewer}/>
            ))
          ):(<div>No Data</div>) }
          </div>
        </section>
      </div>
    </article>
  )
}

export default Talents;
