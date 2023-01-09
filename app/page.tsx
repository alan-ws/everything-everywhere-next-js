import { getdata } from "../@lib";

export const runtime = "edge",
  preferedRegion = "edge";

interface ISearchParams {
  id?: string;
  ids?: string[];
  branch?: string;
  branches?: string[];
}

export default async function Home({
  params,
  searchParams,
}: {
  params: any;
  searchParams: ISearchParams;
}) {
  const data = await getdata(searchParams.ids);
  return (
    <div>
      <h1>Commits</h1>
      <ol>
        {data &&
          data.map((value, index) => (
            <li key={index}>
              <p>{value.branch_name}</p>
              <span>{value.commit_message}</span>
            </li>
          ))}
      </ol>
    </div>
  );
}
