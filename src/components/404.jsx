import PageContainer from "./PageContainer";
import { titlePrefix } from "./utils";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>{`${titlePrefix}404`}</title>
      </Helmet>
      <h1 style={{textAlign:'center'}}>404</h1>
      <h2 style={{textAlign:'center'}}>pagina non trovata</h2>
    </PageContainer>
  );
};

export default NotFound;
