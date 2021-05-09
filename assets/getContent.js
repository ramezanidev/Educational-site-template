export default async ($axios, error, page = 1) => {
    try {
        let { data: posts } = await $axios.get("/posts" + page);
        return { posts };
    } catch (e) {
        error({
            statusCode: 404,
            message: "Not found",
        });
    }
}