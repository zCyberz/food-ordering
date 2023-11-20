import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-3">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="max-w-md mx-auto mt-4 text-gray-500 flex flex-col gap-4">
          <p>
            Consequat et nulla commodo minim qui ex ut elit excepteur. Fugiat
            occaecat aute ex sint. Duis deserunt occaecat aute ex sint. Duis
            deserunt duis do nulla officia mat occaecat aute ex sin inim et.
          </p>
          <p>
            Consequat occaecat aute ex sint. Duis deserunt et nulla commodo
            minim qui ex ut elit excepteur. Fugiat occaecat aute ex sint. Duis
            deserunt duis do nulla officia minim et.
          </p>
          <p>
            Consequat occaecat aute ex sint. Duis deserunt et nulla commodo
            mini. Duis deserunt duis do nulla officia minim et.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+46787689784"
          >
            +46 787 689 784
          </a>
        </div>
      </section>
    </>
  );
}
