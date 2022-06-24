import React from "react";
import MUIDataTable from "mui-datatables";

function FriendList (){
    var data = require('./data.json');
    const columns = [
        {
            name: "id",
            options: {
                display: false
            }
        },
        {
            name: "name",
            options: {
                display: true
            }
        },
        {
            name: "color",
            options: {
                display: false
            }
        }
    ];
    return(
        <React.Fragment>
      <MUIDataTable
        title={"FriendList"}
        data={data.userData.friends}
        columns={columns}
      />
    </React.Fragment>
    );
}
export default FriendList;