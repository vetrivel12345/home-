import React from 'react';

function Footers({listAddItems}) {
    return (
        <div style={{ position : "fixed",bottom : "0",height:"2rem",backgroundColor : "blue",color:"white",textAlign:"center"}}>
            {listAddItems}
        </div>
    );
}

export default Footers;