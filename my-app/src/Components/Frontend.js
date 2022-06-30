import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Frontend(props) {
    return (
        <div>
          <div class="table-responsive">
              <table class="table table-fixed">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col" class="col-3">Sno</th>
                                <th scope="col" class="col-3">First</th>
                                <th scope="col" class="col-3">Last</th>
                                <th scope="col" class="col-3">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" class="col-3">1</th>
                                <td class="col-3">Mark</td>
                                <td class="col-3">Otto</td>
                                <td class="col-3">@mdo</td>
                            </tr>
                            <tr class="table-success">
                                <th scope="row" class="col-3">2</th>
                                <td class="col-3">Jacob</td>
                                <td class="col-3">Thornton</td>
                                <td class="col-3">@fat</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-3">3</th>
                                <td colspan="2" class="col-6">Larry the Bird</td>
                                <td class="col-3">@twitter</td>
                            </tr>
                            <tr class="table-success">
                                <th scope="row" class="col-3">4</th>
                                <td class="col-3">Martin</td>
                                <td class="col-3">Williams</td>
                                <td class="col-3">@Marty</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-3">5</th>
                                <td colspan="2" class="col-3">Sam</td>
                                <td colspan="2" class="col-3">Pascal</td>
                                <td class="col-3">@sam</td>
                            </tr>
                            <tr class="table-success">
                                <th scope="row" class="col-3">6</th>
                                <td class="col-3">John</td>
                                <td class="col-3">Green</td>
                                <td class="col-3">@john</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-3">7</th>
                                <td colspan="2" class="col-3">David</td>
                                <td colspan="2" class="col-3">Bowie</td>
                                <td class="col-3">@david</td>
                            </tr>
                            <tr class="table-success">
                                <th scope="row" class="col-3">8</th>
                                <td class="col-3">Pedro</td>
                                <td class="col-3">Rodriguez</td>
                                <td class="col-3">@rod</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-3">5</th>
                                <td colspan="2" class="col-3">Sam</td>
                                <td colspan="2" class="col-3">Pascal</td>
                                <td class="col-3">@sam</td>
                            </tr>
                            <tr class="table-success">
                                <th scope="row" class="col-3">10</th>
                                <td class="col-3">Jacob</td>
                                <td class="col-3">Thornton</td>
                                <td class="col-3">@fat</td>
                            </tr>
                        
            </tbody>
         </table>
    </div>
</div>
    );
}

export default Frontend;