import {useState, useEffect} from "react";
const Viewer = (props:any) => {
  const [points,setPoints] = useState(0);
  const parseHTML = () => {
    return {
      __html: props.viewer.talent.info[points-1>=1? points-1:0]
    }
  }
  useEffect(()=> {
    setPoints(props.viewer.points)
  }, [props.mousePos])
  return (
    <div className="spell-tooltip" id="Viewer"
      style={{position: "absolute", left: props.mousePos.x, top: props.mousePos.y, opacity: props.viewer.value+"%"}}>
      <div className="spell-tooltip-header"><span className="spell-tooltip-header-title">{props.viewer.talent.name}</span><span>{"Rank "+(points)+"/"+props.viewer.talent.info.length}</span></div>
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
