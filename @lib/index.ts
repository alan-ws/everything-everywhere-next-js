interface IResponse {
  branch_name: string;
  commit_sha: string;
  commit_short_sha: string;
  commit_message: string;
  id: string;
}

export async function getdata(ids?: string[]) {
  if (!ids) return;
  const data: IResponse[] = await (
    await fetch("https://639040c665ff4183110d7bdd.mockapi.io/blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    })
  ).json();

  return data.filter((response: IResponse) => ids.includes(response.id));
}
