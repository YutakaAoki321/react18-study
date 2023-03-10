import axios from "axios";
import { useQuery } from "@tanstack/react-query"

type Album = {
    userId: number;
    id: number;
    title: string;
}

const fetchAlbums = async () => {
    const result = await axios.get<Album[]>("https://jsonplaceholder.typicode.com/albums");
    return result.data;
}

export const ReactQuery = () => {
    const { data } = useQuery<Album[]>(["albums"], fetchAlbums);

    return (
        <div>
            <p>React Query</p>
            {data?.map((album) => <p key={album.id}>{album.title}</p>)}
        </div>
    )
}