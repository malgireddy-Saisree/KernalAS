export const useAddSource = async (embedding_model, mainfileType, url) => {
    const res = await fetch("http://localhost:8080/api/add_sources", {
        method: "POST",
        body: JSON.stringify({
            embedding_model,
            name: mainfileType,
            value: url,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    return res

}