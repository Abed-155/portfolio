import Layout from "../components/Layout";
import HeadTitle from "../components/utility/HeadTitle";
import Personal from "../components/about/Personal";
import Skills from "../components/about/Skills";
import Education from "../components/about/Education";

export default function About() {
  return (
    <>
      <Layout>
        <HeadTitle label="About Me" />
        <div>
          <Personal />
          <Skills />
          <Education />
        </div>
      </Layout>
    </>
  );
}
