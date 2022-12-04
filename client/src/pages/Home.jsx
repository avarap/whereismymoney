// import axios from "axios";
import CashFlowForm from "../components/CashFlowForm";
import FullFeaturedCrudGrid from "../components/GridForm";
import Layout from "./layout";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function Home() {
	

	return (
    <Layout>
      
          <h1>Homepage</h1>
          <CashFlowForm />

      
      {/* <FullFeaturedCrudGrid/> */}
    </Layout>
  );
}

export default Home;