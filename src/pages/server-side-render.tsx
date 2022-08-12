import { GetServerSideProps, GetServerSidePropsContext } from "next";

type Props = {
  name: string;
};
export const ServerSideRenderPage = (props: Props) => {
  return <div>{props.name}</div>;
};

export default ServerSideRenderPage;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
//conectar num banco de dados
//conectar numa api externa

  return {
    props: {
      name: "full cycle",
    },
  };
};


// formulario de envio e-mail