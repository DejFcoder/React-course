import ComponentC from "./ComponentC";

function ComponentB() {
    return(
        <div className="border-2 border-solid border-black inline-block text-4xl p-10 m-5">
            <h1>ComponentB</h1>
            <ComponentC/>
        </div>
    )
}

export default ComponentB;