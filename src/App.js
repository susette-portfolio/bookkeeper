import PageLanding from "./components/PageLanding";
import PageAbout from "./components/PageAbout";
import PageQuestions from "./components/PageQuestions";
import PageOffer from "./components/PageOffer";
import PageTasks from "./components/PageTasks";
import PageAccomplished from "./components/PageAccomplished";
import PageProcess from "./components/PageProcess";
import PageContact from "./components/PageContact";
import { useEffect } from "react";


const App = () => {
  useEffect(()=>{
    console.log("This is the process.env", process.env.PUBLIC_URL)
  }, [])

  return (
    <div className="App">
      <PageLanding />
      <PageAbout />
      <PageQuestions />
      <PageOffer />
      <PageTasks />
      <PageAccomplished />
      <PageProcess />
      <PageContact />
    </div>
  );
}

export default App;
