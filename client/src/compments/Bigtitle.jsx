const BigTitle = (props) => {
  return (
    <section className="text-center flex justify-center flex-col gap-10 pt-20 bg-base-300 ">
      <h1 className="text-8xl font-bold">{props.title}</h1>
      <p className="text-2xl pb-16 px-10">{props.subtitle}</p>
    </section>
  );
};

export { BigTitle };
