import {useState, useEffect } from "react";
const Viewer = (props:any) => {
  const [points,setPoints] = useState(0);
  const parseHTML = () => {
    return {
      __html: props.viewer.talent.info[points-1>=1? points-1:0]
    }
  }
  useEffect(()=> {
    setPoints(props.viewer.points)
    console.log(props.viewer)
  }, [props.mousePos])

  return (
    <div className="spell-tooltip" id="Viewer"
      style={{position: "absolute", left: props.mousePos.x, top: props.mousePos.y, display: props.viewer.display? "block": "none" }}>
      <div className="spell-tooltip-header">
        <div className="spell-tooltip-header-title">{props.viewer.talent.name}</div>
        <p>{props.viewer.norank? null :
            <span>{"Rank "+(points)+"/"+props.viewer.talent.info.length}</span>
        }</p>
      </div>
      {props.viewer.talent.spell? (
        <table className="tooltip-table">
          <tbody>
            <tr>
              <td>
                { props.viewer.talent.spell.mana?
                  (props.viewer.talent.spell.mana + " Mana")
                  : null
                }
                </td>
              <td>
                { props.viewer.talent.spell.range?
                  (props.viewer.talent.spell.range) + " y range"
                  : null
                }
                </td>
            </tr>
            <tr>
              <td>{props.viewer.talent.spell.cast}</td>
              <td>
                { props.viewer.talent.spell.cooldown?
                  (props.viewer.talent.spell.cooldown) + " cd"
                  : null
                }
                </td>
            </tr>
          </tbody>
        </table>
      ): null}
      {<p dangerouslySetInnerHTML={parseHTML()} />}
    </div>
  )
}

export default Viewer;
