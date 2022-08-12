import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Typography, Button } from "@mui/material";
import useSWR, { useSWRConfig } from "swr";
import { http } from "../../utils/http";
import { useRouter } from "next/router";

type Props = {};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name", width: 300 },
];

const limit = 5;

const fetcher = (url: string) => {
  return http.get(url).then((res) => ({
    data: res.data,
    total: +res.headers["x-total-count"],
  }));
};

export const UsersPage = (props: Props) => {
  const { cache } = useSWRConfig();
  console.log(cache);
  const router = useRouter();
  const { page = 1 } = router.query;
  const { data, mutate, error } = useSWR(
    router.isReady ? `names?_limit=${limit}&_page=${page}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <div style={{ height: 400 }}>
      <Typography variant="h4">Otimizar front-end com React.js</Typography>
      <Button variant="contained" onClick={() => router.push("/users/new")}>
        Novo
      </Button>
      {/* <Button variant="contained" onClick={() => mutate()}>
        Revalidar página {page}
      </Button> */}
      <DataGrid
        columns={columns}
        pageSize={limit}
        rowsPerPageOptions={[limit]}
        page={parseInt(page as any) - 1}
        rows={!data ? [] : data.data}
        rowCount={!data ? 0 : data.total}
        onPageChange={(page) => router.push(`/users?page=${page + 1}`)}
        paginationMode="server"
      />
    </div>
  );
};

export default UsersPage;
