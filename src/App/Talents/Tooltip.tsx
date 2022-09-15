const Tooltip = ({selectedTalent, selectTalent} :any) => {

  return (
  selectedTalent[0] ? (
    <>
      <div className="popup"
        onClick = {() => {
          selectTalent("","");
        }}>
        <div className = "talent-tooltip">
          <div className = "tooltip-title">
            <div className = "spell-border">
              <div id = { selectedTalent[1] } className = "spell-icon" />
            </div>
            { selectedTalent[0] }
          </div>
          <div className= "tooltip-output">
            { selectedTalent[2]? selectedTalent[2]:null }
            </div>
          </div>
          <div className = "talent-analysis">
          { selectedTalent[3]? selectedTalent[3]:null }
        </div>
      </div>
    </>
    ) : (
      null
    )
  )
}

export default Tooltip;
