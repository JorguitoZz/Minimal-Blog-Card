import Image from "next/image";

export default function Home() {
  return (
    <main >
      <div className="w-11/12 max-w-96 h-auto m-auto mt-20 pt-4 rounded-lg shadow-lg">
        
        <div className="p-4">
          <div className="relative w-full h-40 overflow-hidden rounded-xl mb-4">
            <Image  src="/cactus_img.jpg" fill objectFit="cover"/>
          </div>
        
          <p className="bg-lavender-light inline-block py-1 px-4 rounded-full text-xs text-purple-bright font-bold">Design</p>

          <h2 className="mt-3 mb-2 font-bold text-xl text-navy-dark">Embracing Minimalism</h2>

          <p className="text-gray-muted mb-3">From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
        </div>
        <p className="text-gray-muted border-t-2 p-4 text-sm " >Annie Spratt</p>
      </div>
    </main>
  );
}
