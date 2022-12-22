import { encode } from 'morsee';
import '../Output.css';

const Output = (props) => {

    // let url = 'https://cors-anywhere.herokuapp.com/https://www.de-vis-software.ro/morsesonat.aspx';
    // let username = 'lucas tello'
    // let password = 'Mnd@2021'
    // var data = { 
    //     morse_wav_file:'IGUIIGIGU...base64...YUFYTFYT',
    //     normal_text:'NO',
    //     morse_text: encode(props.value) 
    //  };

    // fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //       'Authorization': 'Basic ' + window.btoa(username + ':' + password),
    //       'Accept':'application/json'
    //     },
    //   })
    //      .then((response) => response.json())
    //      .then((data) => {
    //         console.log(JSON.stringify(data));
    //         // Handle data
    //      })
    //      .catch((err) => {
    //         console.log(err.message);
    //      });

    return (
        <div className="output">
                <p className="output-text">{encode(props.value)}</p>
        </div>
    );
}

export default Output;