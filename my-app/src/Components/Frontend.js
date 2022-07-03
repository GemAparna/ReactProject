import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Icon} from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import Modal from "./Modal";
import useModal from './useModal';
// import { useModal } from 'react-hooks-use-modal';



function Frontend(props) {
    const {isShowing, toggle} = useModal();
    return (
        <div> 
          <div className="table-responsive"> 
              <table className="table table-striped table-fixed"  >
                        <thead className="table-success">
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
                                    <button type="button" class="btn btn-success"
                                        onClick={() => props.updateAllocation(object.sn)}
                                    >
                                        {object.allocation ? "Yes" : "No"}
                                    </button>
                                </td>
                                <td ><Icon icon={eye} onClick={toggle}/>
                                     <Modal
                                       isShowing={isShowing}
                                         hide={toggle}
                                        /></td>
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

export default Frontend;