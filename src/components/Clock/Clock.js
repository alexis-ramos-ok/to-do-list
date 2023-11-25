import React from 'react';
import './Clock.css';

function Clock(){
    const moment = new Date();
    var hora = moment.getHours();
    var minuto = moment.getMinutes();
    var horaImprimible = hora + ":" + minuto;

    return(
        <div className="clock">
            {horaImprimible}
        </div>
    );
}

export default Clock;