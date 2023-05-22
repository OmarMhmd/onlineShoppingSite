
function Data({items,deleteItem})
{
    return(
        <>
     <table className="table table-striped col-6">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Price</th>
            <th scope="col">Details</th>
            {/* <th scope="col">Image</th> */}
          </tr>
        </thead>
        <tbody>
          {
            items.map(item => (
              <tr key={item._id}>
                <th scope="row">{item._id}</th>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.price}</td>
                <td>{item.details}</td>
                <td><button className="btn btn-danger" onClick={()=>deleteItem(item._id)}>delete</button></td>
              </tr>
            ))
          }

        </tbody>
      </table>
        
        </>
    )

}

export default Data