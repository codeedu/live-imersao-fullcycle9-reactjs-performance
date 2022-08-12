import { Typography, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { Form } from "../../components/Form";
import { http } from "../../utils/http";
import { useSWRConfig } from "swr";

type Props = {};
export const UserNewPage = (props: Props) => {
  const { cache, mutate: mutateGlobal } = useSWRConfig();
  const router = useRouter();
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const nameField = document.getElementById("name") as HTMLInputElement;
    const nameValue = nameField.value;
    await http.post("names", { name: nameValue });

    const pattern = /^names\?/g;
    const mutates = Array.from((cache as Map<any, any>).keys())
      .filter((key) => pattern.test(key))
      .map((key) => mutateGlobal(key, undefined, { revalidate: true }));
    await Promise.all(mutates);
    router.push("/users");
  }

  return (
    <div>
      <Typography variant="h4">Novo nome</Typography>
      <Form onSubmit={onSubmit}>
        <TextField id="name" label="Digite seu nome" variant="outlined" />
        <Button type="submit" variant="contained">
          Criar
        </Button>
      </Form>
    </div>
  );
};

export default UserNewPage;
