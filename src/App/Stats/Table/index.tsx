const Table = (props:any) => {
  return (
    <table>
    <thead>
      <tr>
        <th>{ props.haste }</th>
        <td>{ props.base }</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Goblin</th>
        <td>{ props.goblin } </td>
      </tr>
      <tr>
        <th>Dark Intent</th>
        <td>{ props.di }</td>
      </tr>
      <tr>
        <th>Dark Intent, Goblin</th>
        <td>{ props.goblindi }</td>
      </tr>
    </tbody>
    </table>
  )
}

export default Table;
