const BigTitle = (props) => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold">{props.title}</h1>
      <p className="text-xl">{props.subtitle}</p>
    </div>
  );
};

export { BigTitle };
