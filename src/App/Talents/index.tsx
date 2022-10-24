import { useState, useEffect } from "react";
import Talent from "./Talent";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const dungeon = {
  name:"dungeon",
  shadow:[3,2,2,undefined,0,3,2,2,undefined,1,2,2,0,1,2,2,2,1,0,undefined,0,2,3,undefined,undefined,1,undefined,undefined],
  discipline:[1,3,2,undefined,2,1,0,0],
  holy:[0,0,0,undefined,undefined,0,0,0]
};
const raid = {
  name:"raid",
  shadow:[3,2,2,undefined,0,3,2,2,undefined,1,0,2,0,1,2,2,2,1,0,undefined,0,2,3,undefined,undefined,1,undefined,undefined],
  discipline:[0,3,3,undefined,2,1,0,0],
  holy:[0,0,0,undefined,undefined,0,0,0]
}
const pvp = {
  name:"pvp",
  shadow:[3,0,2,undefined,2,0,2,2,undefined,1,2,2,1,1,2,2,1,1,2,undefined,1,2,3,undefined,undefined,1,undefined,undefined],
  discipline:[2,3,0,undefined,2,1,0,0],
  holy:[0,0,0,undefined,undefined,0,0,0]
}

const Talents = (props:any) => {
  const [build, setBuild] = useState(dungeon);
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
      <ul id="build-planner">
        <input type="radio" name="build" id="dungeon"
          checked={build.name=="dungeon"}
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
          checked={build.name=="raid"}
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
          checked={build.name=="pvp"}
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
          <h4><div className="spell-border"><div className="spell-icon" id="power-word-shield" /></div><div><span>Discipline</span><span>{build.discipline.reduce((sum, each) => {return each!=undefined? sum! + each: sum}, 0)}</span></div></h4>
          <div className="talent-tree discipline">
          { talentInfo? (
            talentInfo.slice(28,36).map((talent:any, index:number)=> (
              <Talent talent={talent} setViewer={props.setViewer} viewer={props.viewer} points={build.discipline[index]}/>
            ))
          ):(<div>No Data</div>) }
          </div>
        </section>
        <section id="holy">
          <h4><div className="spell-border"><div className="spell-icon" id="guardian-spirit" /></div><div><span>Holy</span><span>{build.holy.reduce((sum, each) => {return each!=undefined? sum! + each: sum}, 0)}</span></div></h4>
          <div className="talent-tree holy">
          { talentInfo? (
            talentInfo.slice(36,44).map((talent:any, index:number)=> (
              <Talent talent={talent} setViewer={props.setViewer} viewer={props.viewer} points={build.holy[index]}/>
            ))
          ):(<div>No Data</div>) }
          </div>
        </section>
        <section id="shadow">
          <h4><div className="spell-border"><div className="spell-icon" id="shadow-word-pain" /></div><div><span>Shadow</span><span>{build.shadow.reduce((sum, each) => {return each!=undefined? sum! + each: sum}, 0)}</span></div></h4>
          <div className="talent-tree shadow">
          { talentInfo? (
            talentInfo.slice(0,28).map((talent:any, index:number)=> (
              <Talent talent={talent} setViewer={props.setViewer} viewer={props.viewer} points={build.shadow[index]}/>
            ))
          ):(<div>No Data</div>) }
          </div>
        </section>
      </div>
    </article>
  )
}

export default Talents;
