import CustomFilter from "@/components/customFilter";
import Hero from "@/components/hero";
import SearchBar from "@/components/searchbar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="padding-x padding-y max-width mb-60" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Find a <span className="text-primary">car</span> suitable for
            personal use.
          </h1>
        </div>

        <div className="home__filters ">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
      </div>
    </main>
  );
}
