import { getAccessToken, getSession } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

const Index: React.FC = () => {
  return null;
};
export default Index;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);
  const accessToken = getAccessToken(req, res);

  console.log({ accessToken });

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/login",
        permanent: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/app",
        permanent: false,
      },
    };
  }
};
