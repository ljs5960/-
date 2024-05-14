import { useEffect } from "react";
function Even() {
    useEffect(() => {
        return () => {
            console.log('Even Component Unmount');
        };
    }, []);

    return (
        <div>Count is Even</div>
    )
}

export default Even;