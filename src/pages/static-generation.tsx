import {
  GetStaticProps,
  GetStaticPropsContext,
} from "next";

type Props = {
  name: string;
};
export const StaticGenerationPage = (props: Props) => {
  return <div>{props.name}</div>;
};

export default StaticGenerationPage;

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
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
