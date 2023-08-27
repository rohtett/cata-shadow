const Spell = (props: any) => {
  const urlParse = (name:string) =>  name.toLowerCase().replaceAll(" ", "-").replace(":","").replace(`'`,"");

  let talent :any;

  try {
    talent = [...props.spec.main, ...props.spec.off.flat(), ...props.spec.spell].find(((obj:any) => {
      return obj.name===props.title
    }))
  } catch {
    talent = false;
  }

  return (
    <>
      <span className={props.inline? "spell-border inline-border": "spell-border"}
        onMouseEnter={() => {
          if (talent) {
            props.setViewer({
              talent:talent,
              display:true,
              points: talent.info.length,
            })
          }
        }}
        onMouseOut={() => {
          if (talent) {
            props.setViewer((prevState :any) => ({
              ...prevState,
              display: false,
            }));
          }
        }}>
        <span className={props.inline? "spell-icon inline-icon": "spell-icon"} id={urlParse(props.title)} />
      </span>
      <b>
        { props.title }
      </b>
    </>
  )
}

export default Spell;
