export async function getSearchResult(data: {id: number, month: string,  usertext: string }) {
const {id, month, usertext} = {...data};
return {id, month, usertext }
}
