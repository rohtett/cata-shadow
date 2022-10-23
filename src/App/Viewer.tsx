const Viewer = (props:any) => {
  return (
    <div className="spell-tooltip"
      style={{position: "absolute", left: props.mousePos.x-285, top: props.mousePos.y-80, opacity: props.viewer[1]}}>
      <div className="spell-tooltip-title">{props.viewer[0].name}</div>
      {props.viewer[0].spell? (
        <table className="tooltip-table">
          <tbody>
            <tr>
              <td>{props.viewer[0].spell.mana}</td><td>{props.viewer[0].spell.range? (props.viewer[0].spell.range) + "y range": null}</td>
            </tr>
            <tr>
              <td>{props.viewer[0].spell.cast}</td><td>{props.viewer[0].spell.cooldown}</td>
            </tr>
          </tbody>
        </table>
      ): null}
      {props.viewer[0].info[0]}
    </div>
  )
}

export default Viewer;
