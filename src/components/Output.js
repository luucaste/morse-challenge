import { encode } from 'morsee';
import '../Output.css';

const Output = (props) => {

    return (
        <div className="output">
                <p className="output-text">{encode(props.value)}</p>
        </div>
    );
}

export default Output;