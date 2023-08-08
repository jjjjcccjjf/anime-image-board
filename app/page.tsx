import Image from "next/image";
import GridItemTest from "./components/GridItemTest";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-4 bg-red-300 gap-2 p-2 overflow-auto">
      <div className="row-span-2 bg-green-100 ">content</div>

      <GridItemTest></GridItemTest>
    </main>
  );
}
