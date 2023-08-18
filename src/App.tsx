interface IStatBlockProps {
  name: string;
  value: string;
}

const data = [
  { name: "companies", value: "10k+" },
  { name: "templates", value: "314" },
  { name: "queries", value: "12M+" },
];

const StatBlock = (props: IStatBlockProps) => {
  const { name, value } = props;
  return (
    <div className="flex flex-col py-3 xl:py-0">
      <p className="mb-1 text-2xl font-bold text-white">{value}</p>
      <p className="text-sm uppercase text-white-300">{name}</p>
    </div>
  );
};

const App = () => {
  return (
    <article className="flex h-[780px] w-[327px] flex-col overflow-hidden rounded-lg bg-dark-desaturated-blue xl:h-[450px] xl:w-[1110px] xl:flex-row-reverse">
      <section className="w-full bg-soft-violet">
        <picture>
          <source
            srcSet="./image-header-desktop.jpg"
            media="(min-width: 768px)"
          />
          <img
            src="./image-header-mobile.jpg"
            alt="Header"
            className="h-full w-full opacity-75 mix-blend-multiply"
          />
        </picture>
      </section>
      <section className="flex w-full flex-col px-8 py-10 text-center xl:p-16 xl:text-left">
        <header>
          <h1 className="text-[28px] font-bold leading-tight text-white xl:text-4xl">
            Get <span className="text-soft-violet">insights</span> that help
            your business grow.
          </h1>
        </header>

        <p className="py-4 text-white-200 xl:max-w-[350px] xl:py-8">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <section className="flex flex-col xl:mt-12 xl:max-w-[350px] xl:flex-row xl:justify-between">
          {data.map((item) => (
            <StatBlock key={item.name} {...item} />
          ))}
        </section>
      </section>
    </article>
  );
};

export default App;
