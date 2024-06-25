import ComponentD from "./ComponentD";
import React, {useContext} from "react";
import { UserContext } from "./ComponentA";

function ComponentC() {

    const user = useContext(UserContext);
    return(
        <div className="border-2 border-solid border-black inline-block text-4xl p-10 m-5">
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD/>
        </div>
    )
}

export default ComponentC;