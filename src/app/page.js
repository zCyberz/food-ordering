import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="max-w-2xl mx-auto mt-4 text-gray-500 flex flex-col gap-4">
          <p>
            Magna sint sit incididunt in incididunt irure laborum sit in ad.
            Labore do id excepteur irure qui laborum mollit et sunt esse ipsum
            est est magna. Aliquip anim fugiat mollit excepteur voluptate labore
            ad id deserunt Lorem ex laborum. In deserunt nostrud adipisicing
            reprehenderit nisi ipsum enim consectetur.
          </p>
          <p>
            In deserunt nostrud adipisicing reprehenderit nisi ipsum enim
            consectetur.asjdashdjksadhjksahasjkdhjksadhjashdjksahdkjashdjkhasjkdhaskjdhsajkdhaskjd
          </p>
          <p>Ant nostrud adipisicing reprehenderit nisi ipsum enim</p>
        </div>
      </section>
      <section className="text-center my-8 ">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact Us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+46738123123"
          >
            +46 738 123 123
          </a>
        </div>
      </section>
    </>
  );
}
