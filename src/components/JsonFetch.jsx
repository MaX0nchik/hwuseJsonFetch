import useJsonFetch from "../hooks/useJsonFetch"

export const JsonFetch = ({route}) => {
    const [{data, isLoading, error}] = useJsonFetch("http://localhost:7070/"+route,[]);

    return(
        <>
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {!isLoading && <div>
            Status: {(data && data.status) ? data.status : null}
            </div>
        }
        </>
    )
}