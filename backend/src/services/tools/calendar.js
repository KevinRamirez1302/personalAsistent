import {google} from "googleapis";

const crearEvento = async (auth,{titulo,fechaInicio}) => {
    const calendar = google.calendar({version: 'v3', auth});

    const event  = {
        summary:titulo,
        start:{
            dateTime:{dateTime:fechaInicio, timeZone: 'UTC'}
        },
        end:{
            dataTime: new Date(new Date(fechaInicio).getTime() + 3600000).toISOString(),
            timeZone: 'UTC'
        }
    }


    const response = await calendar.events.insert ({
        calendarId: 'primary',
        requestBody: event
    })

    return response.data;
    
}

export default crearEvento;