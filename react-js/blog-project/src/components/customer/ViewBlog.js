const ViewBlog = () => {
  return (
    <>
      <section className="blog-area-view">
        <section className="blog-area-view-text">
          <h2 className="title">title</h2>
          <p className="desc">description</p>
          <p className="author">- author</p>
          <section className="like-dislike">
            <span className="fa fa-2x fa-thumbs-o-up"> 10</span>
            <span className="fa fa-2x fa-thumbs-o-down"> 20</span>
          </section>
        </section>
        <img className="image-preview-view" src="/images/banner-1.jpg" alt="" />
      </section>
    </>
  );
};

export default ViewBlog;
