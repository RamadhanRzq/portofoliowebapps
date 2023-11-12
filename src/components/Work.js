import CardWork from "./CardWork";

function Work() {
  return (
    <div className="min-h-screen">
      <h1 className="flex justify-center items-center text-2xl">WORK</h1>
      <div className="flex justify-center gap-10">
        <CardWork src="https://academy.alterra.id/blog/wp-content/uploads/2022/05/CI.png" title="CSS"/>
        <CardWork src="https://academy.alterra.id/blog/wp-content/uploads/2022/05/CI.png" title="HTML"/>
        <CardWork src="https://academy.alterra.id/blog/wp-content/uploads/2022/05/CI.png" title="CSS"/>
      </div>
    </div>
  );
}

export default Work;
