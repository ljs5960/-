import {useParams} from "react-router-dom";

const Diary = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Diary Page</h1>
            <div>Diary No.{id}</div>
        </div>
    )
};
export default Diary;