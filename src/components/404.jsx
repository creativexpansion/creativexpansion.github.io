import { useEffect } from "react";
import PageContainer from "./PageContainer";
import { titlePrefix } from "./utils";

const NotFound = () => {
  useEffect(() => {
    document.title = titlePrefix + '404';
  }, []);
  return (
    <PageContainer>
      <h1 style={{textAlign:'center'}}>404</h1>
      <h2 style={{textAlign:'center'}}>pagina non trovata</h2>
    </PageContainer>
  );
};

export default NotFound;
