import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 m-auto mt-10 gap-5">
      <div className="mt-5 text-gray-400 border rounded p-2">
        <h2 className="text-orange-500 text-3xl mb-3">What is Context API?</h2>
        <p>
          This is what we call “prop-drilling.” This can frustrate and slow down
          your development in the mid- to long-term—passing props over and over
          again to your components will cause future problems in your
          application. That’s one of the main problems that Context API came to
          solve for us.
        </p>
      </div>
      <div className="mt-5 text-gray-400 border rounded p-2">
        <h2 className="text-orange-500 text-3xl mb-3">What is semantic tag?</h2>
        <p>
          Examples of semantic HTML tags include nav, footer and section. There
          are many more semantic HTML5 tags that can be used (for example
          blockquote and em), but in this article I am only looking at those
          semantic HTML tags that you will need to divide the page content into
          its basic parts.
        </p>
      </div>
      <div className="mt-5 text-gray-400 border rounded p-2">
        <h2 className="text-orange-500 text-3xl mb-3">
          Inline VS inline block elements?
        </h2>
        <p>
          inline : <br />
          inline The element doesn’t start on a new line and only occupy just
          the width it requires. You can’t set the width or height.
          <br />
          inline-block : <br />
          It’s formatted just like the inline element, where it doesn’t start on
          a new line. BUT, you can set width and height values.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
