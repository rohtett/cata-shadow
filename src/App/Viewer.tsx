import {useState, useEffect } from "react";

const Viewer = (props:any) => {
  const [points,setPoints] = useState<number>(0);
  const parseHTML = () => {
    return {
      __html: props.viewer.talent.info[points-1>=1? points-1:0]
    }
  }

  //Mouse position tracker from:
  //https://codingbeautydev.com/blog/react-get-mouse-position/
  const [mousePos, setMousePos] = useState({x:0,y:0});
  const handleMouseMove = (event:any) => {
    const calcX = () => event.clientX+270>window.innerWidth? event.clientX+270-window.innerWidth:event.clientX;
    setMousePos({ x: calcX(), y: event.clientY+window.pageYOffset });
  }

  useEffect(()=> {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [props.mousePos])

  useEffect(() => {
    setPoints(props.viewer.points)
  })

  return (
    <div className="spell-tooltip" id="Viewer"
      style={{position: "absolute", left: mousePos.x, top: mousePos.y, display: props.viewer.display? "block": "none" }}>
      <div className="spell-tooltip-header">
        <div className="spell-tooltip-header-title">{props.viewer.talent.name}</div>
        <p>{props.viewer.talent.info.length-1?
          <span>{"Rank "+(points)+"/"+props.viewer.talent.info.length}</span> :null
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
