import React, { useMemo, useState } from 'react';

function DemoList(props) {


    console.log("DEMO LIST RUNNING");

    const [desc, setDesc] = useState(false)

    useMemo(() => {
        if (!desc) {
            props.item.sort((a, b) => a - b)
        }
        else {
            props.item.sort((a, b) => b - a)
        }
        console.log("SORTING IS DONE");
    }, [props.item, desc])

    // To Descending
    const toDescending = () => {
        setDesc((prev) => !prev)
    }



    return (
        <div className=' DemoList-div '>
            <h1>{props.title}</h1>

            <h1>{desc === true ? "Sorted In Descending" : "Sorted In Ascending"}</h1>
            <button onClick={toDescending}>{desc === true ? "Descending" : "Ascending"}</button>
            {
                props.item.map((val) => {
                    return <h3 key={Math.random()}>{val}</h3>
                })
            }
        </div>
    );
}

export default React.memo(DemoList);
