import React from "react";

const Blog = () => {
  const post = [
    {
      img: "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5m61dotp8kq7ltylx04y.png",
      title: "How to build a portfolio website with React & Tailwind CSS",
      url: "https://dev.to/coderamrin/how-to-build-a-portfolio-website-with-react-tailwind-css-fni",
    },
    {
      img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fa8okx5rxzuh5fojibsy3.png",
      title: "How to build a counter app with JavaScript",
      url: "https://dev.to/coderamrin/how-to-build-a-counter-app-with-javascript-439p",
    },
    {
      img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgv7y2de8kalk9l0820ag.jpg",
      title: "JavaScript Ultimate Guide 02: The DOM",
      url: "https://dev.to/coderamrin/javascript-ultimate-guide-02-the-dom-3ho9",
    },
   
  ];

  return (
    <section className="bg-secondery text-white px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-black pb-2">
            Blogs
          </h2>
          <h1> I am going to rewrite the tutorials i used to make
             this site and then turn them into blog post and link them here</h1>
          <p className="pb-5">Here are some blog posts with handy tutorials, 
          including the one I used to create this page.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {post.map((item) => {
          return (
            <div>
              <img src={item.img} alt={item.title} />
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <a
                href={item.url}
                className=" btn bg-accent  border-2 border-[#fef8ea] text-white px-6 py-3 hover:bg-transparent" target="_blank" rel="noreferrer" 
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog; 