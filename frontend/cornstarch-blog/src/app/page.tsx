import AberrationImage from "@/components/AbberationImage";
export default function Home() {
  return (
    <main className="font-mono min-h-screen flex flex-col items-center sm:items-start p-6 gap-12">

      {/* Self portrait */}
      <section className="w-full max-w-full mx-auto mt-0">
        <AberrationImage
          src="/homepage_SelfPortrait.JPG"
          alt="Self Portrait of Christian Ornelas"
        />
      </section>
    </main >
  );
}
