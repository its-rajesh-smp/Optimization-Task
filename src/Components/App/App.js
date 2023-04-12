import React, { useCallback, useMemo, useState } from 'react';
import "./App.css"
import DemoList from '../DemoList/DemoList';
import Button from '../Button/Button';





function App(props) {

    const [title, setTitle] = useState(1)

    const functionChangeTitle = useCallback(() => {
        console.log("FUNCTION RUN");
        setTitle((prev) => prev + 1)
    }, [])

    // const functionChangeTitle = () => {
    //     setTitle((prev) => !prev)
    // }


    const item = useMemo(() => {
        return [21, 5, 98, 4, 1, 0, 6, 8, 6, 1, 8]
    }, [])

    return (
        <div className=' App-div '>
            <DemoList title={title} item={item} />
            <Button functionChangeTitle={functionChangeTitle} />
        </div>
    );
}

export default App;
