export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="col-span-full xl:col-span-2">
         
      </div>
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Dombestein Data
            </span>{" "}
            </h1>
        </main>
        </div>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        This page is still in development, Client projects will always have priority over this page.
        </p>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
