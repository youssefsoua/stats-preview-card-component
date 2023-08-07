const data = [
  { name: "companies", value: "10k+" },
  { name: "templates", value: "314" },
  { name: "queries", value: "12M+" },
];

function StatBlock({ name, value }: any) {
  return (
    <div className="flex flex-col">
      <h5 className="mb-1 text-xl font-bold text-white">{value}</h5>
      <p className="text-xs uppercase text-white300">{name}</p>
    </div>
  );
}

function App() {
  return (
    <div className="flex max-w-[75%] flex-col overflow-hidden rounded-xl bg-darkDesaturatedBlue 2k:flex-row-reverse">
      <div className="flex w-1/2 flex-col bg-softViolet max-2k:w-[500px] max-sm:w-[350px] max-small:w-[100%]">
        <img
          src="./image-header-mobile.jpg"
          alt="Header"
          className="block h-[100%] w-[100%] opacity-75 mix-blend-multiply small:hidden"
        />
        <img
          src="./image-header-desktop.jpg"
          alt="Header"
          className="hidden h-[100%] w-[100%] opacity-75 mix-blend-multiply small:block"
        />
      </div>
      <div className="flex w-1/2 flex-col p-10 text-left max-2k:w-[500px] max-sm:w-[350px] max-small:w-[100%] max-small:text-center sm:p-20">
        <h1 className="mb-8 text-3xl font-bold text-white">
          Get <span className="text-softViolet">insights</span> that help your
          business grow.
        </h1>
        <p className="mb-16 text-white200">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="flex flex-row justify-between max-small:flex-col">
          {data.map((item) => (
            <StatBlock key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
