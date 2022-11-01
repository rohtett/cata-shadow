const Talent = (props: any) => {
  const urlParse = (name:string) =>  name.toLowerCase().replaceAll(" ", "-").replace(":","");
  return (
    props.talent.exists!==false? (
      <>
        <div
          key = { props.talent.id }
          onMouseEnter={() => {
            props.setViewer({talent:props.talent,display:true,points:props.points})
          }}
          onMouseOut={() => {
            props.setViewer({talent:props.talent,display:false,points:props.points})
          }}
          className = "spell-border talent real-talent"
        >
          <div className = {props.points>0? "spell-icon": "greyscale spell-icon"}  id={urlParse(props.talent.name)} />
        </div>
        <div className="point-tracker" style={{color: props.points<1? "#bbb": props.points===props.talent.info.length? "gold": "lime"}}>{props.points}</div>
      </>
    ) : (
      <div className = "spell-border talent empty-talent">
        <div
          className = {"spell-icon"}
        />
      </div>
    )
  )
}

export default Talent;
