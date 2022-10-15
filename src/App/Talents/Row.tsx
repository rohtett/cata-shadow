const Row = (props: any) => {

  const key = props.tree + "-" + props.row;

  return (
    <div className = { props.tree + " " + props.row } >
    { props.talents.map((talent :string[]) => {
      return talent ? (
        <div key = { key + "-" + talent }
          onClick = { () => {
            (props.selectedTalent === talent) ?
              props.selectTalent(["", ""])
              : props.selectTalent(talent);
          }}
          className = "spell-border talent">
          <div id = { talent[1] } className = "spell-icon" />
        </div>
      ) : (
        <div className = "spell-border talent empty-talent">
          <div className = "spell-icon" />
        </div>
      );
    })}
    </div>
  )
}

export default Row
