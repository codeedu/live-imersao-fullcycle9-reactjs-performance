import {
  GetStaticProps,
  GetStaticPropsContext,
} from "next";

type Props = {
  date: string;
};
export const IncrementalGenerationPage = (props: Props) => {
  return <div>{props.date}</div>;
};

export default IncrementalGenerationPage;

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  //conectar num banco de dados
  //conectar numa api externa

  return {
    props: {
      date: new Date().toISOString(),
    },
    revalidate: 10
  };
};

// formulario de envio e-mail
