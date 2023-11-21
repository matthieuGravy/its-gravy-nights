const NormalTitle = (props) => (
  <div className="text-center flex justify-center flex-col gap-4">
    <h1 className="text-3xl font-bold pt-12">{props.normalTitle}</h1>
    <p className="text-xl pb-8">{props.normalSubtitle}</p>
  </div>
);

export { NormalTitle };
