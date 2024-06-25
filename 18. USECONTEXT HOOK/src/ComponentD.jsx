import React, {useContext} from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {

    const user = useContext(UserContext);
    return(
        <div className="border-2 border-solid border-black inline-block text-4xl p-10 m-5">
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}

export default ComponentD;