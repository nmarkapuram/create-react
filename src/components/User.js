import {useState} from "react";

const User = () => {

    const [count] = useState(0);
    return (
        <div>
            <div>
                <span>Count: {count}</span>
                <span> Name: Naga </span>
                <span> Email: Naga@gmail.com </span>
            </div>
        </div>
    );
}

export default User;