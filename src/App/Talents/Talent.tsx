const Talent = (props: any) => {
  const urlParse = (name:string) => {
    return name.toLowerCase().replaceAll(" ", "-").replace(":","");
  }
  return (
    props.talent.exists!=false? (
      <div
        key = { props.talent.id }
        onMouseEnter={() => {
          props.setViewer([props.talent,100])
        }}
        onMouseOut={() => {
          props.setViewer([props.talent,0])
        }}
        className = "spell-border talent"
      >
        <div className = {"spell-icon"} id={urlParse(props.talent.name)} />
      </div>
    ) : (
      <div key = { props.talent.id }
        className = "spell-border talent empty-talent">
        <div
          className = {"spell-icon"}
        />
      </div>
    )
  )
}

export default Talent;
