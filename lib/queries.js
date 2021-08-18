export function findEntry(uuid) {
    const entries = db.collection("entries");
    const query = { uuid: uuid };
    return user = await entries.findOne(query);
}