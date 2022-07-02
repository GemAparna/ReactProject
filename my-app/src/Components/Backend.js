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
                    {props.members?.map((item, key) => {
                        return (
                            <tr key={item.sn}>
                                <td>{key + 1}</td>
                                <td >{item.name}</td>
                                <td>
                                    <button type="button" class="btn btn-warning"
                                        onClick={() => props.updateAllocation(item.sn)}
                                    >
                                        {item.allocation ? "Yes" : "No"}
                                    </button>
                                </td>
                                <td >{item.skills}</td>
                                <td >
                                    <input
                                        type="text"
                                        value={item.comments}
                                        onChange={(e) => props.updateComment(item.sn, e)}
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