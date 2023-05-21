import "@/scss/index.scss";
import { Raleway, Fira_Code} from 'next/font/google';

//IMPORTAMOS MANUALMENTE LAS FUENTES DE GOOGLE PARA QUE CARGUE MAS RAPIDO
const raleway = Raleway({subsets:["latin"]});
const firecode = Fira_Code({
  subsets:["latin"], 
  weight:["300","400","500","600","700"]
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root{
          --raleway:${raleway.style.fontFamily};
          --fira-code: ${firecode.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
