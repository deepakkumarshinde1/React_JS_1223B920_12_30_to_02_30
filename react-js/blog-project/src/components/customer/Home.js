import ViewBlog from "./ViewBlog";

const Home = () => {
  return (
    <>
      <main>
        <section id="blog-list">
          <ViewBlog />
          <ViewBlog />
          <ViewBlog />
          <ViewBlog />
          <ViewBlog />
        </section>
      </main>
    </>
  );
};

export default Home;
