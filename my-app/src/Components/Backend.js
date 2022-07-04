import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Backend(props) {
    return (
        <div> 
          <div className="table-responsive"> 
              <table className="table table-striped table-fixed"  >
                        <thead className="table-warning">
                            <tr>
                                <th scope="col" >Sno</th>
                                <th scope="col" >Name</th>
                                <th scope="col" >Project Allocation</th>
                                <th scope="col" >Skills</th>
                                <th scope="col" >Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                    {props.rows?.map((object, key) => {
                        return (
                            <tr key={object.sn}>
                                <td>{key + 1}</td>
                                <td >{object.name}</td>
                                <td>
                                    <button type="button" class="btn btn-warning"
                                        onClick={() => props.Allocation(object.sn)}
                                    >
                                        {object.allocation ? "Yes" : "No"}
                                    </button>
                                </td>
                                <td >{object.skills}</td>
                                <td >
                                    <input
                                        type="text"
                                        value={object.comments}
                                        onChange={(e) => props.updateComment(object.sn, e)}
                                        style={{ width: "100%" }}
                                    />
                                </td><br></br>
                            </tr>
                        )
                    })}
            </tbody>
         </table>
    </div>
</div>
    );
}

export default Backend;