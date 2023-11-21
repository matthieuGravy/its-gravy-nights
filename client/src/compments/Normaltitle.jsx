const NormalTitle = (props) => (
  <div className="text-center flex justify-center flex-col gap-4">
    <h2 className="text-5xl font-bold pt-12">{props.normalTitle}</h2>
    <p className="text-xl pb-8 px-10">{props.normalSubtitle}</p>
  </div>
);

export { NormalTitle };
