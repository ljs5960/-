import {useSearchParams} from "react-router-dom";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('sort'));

    return <div>Home Page</div>;
};
export default Home;