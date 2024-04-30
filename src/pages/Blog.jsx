import { useParams, useRoutes } from "react-router-dom";

export default function Blog() {
    const {id} = useParams()
    return <h1>This is blog #{id}</h1>;
}
