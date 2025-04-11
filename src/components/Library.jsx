import React from "react";
import Button from "./Button";

const Library = () => {
  return (
    <section className="bg-primary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-2xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-black pb-2">
          Here is A Library of Components used to create the app:
        </h2>
        <p>The Button components used on the page:</p>
        <br />
        <Button />
        <div className="h-[350px]"></div>
      </div>
    </section>
  );
};

export default Library;
