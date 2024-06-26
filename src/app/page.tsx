"use client"
import { useMediaQuery } from '@react-hook/media-query';

export default function Home() {

  const fullScreenView = useMediaQuery('only screen and (min-width: 600px)')
  
  const myappContentView = () => {
    try {
      return (
        <div>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            </div>
            <div
              style={!fullScreenView ? { textAlign: 'center' } : {}}
              className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
              USER MANAGEMENT
            </div>
            <div
              style={{
                background: '#e8e5e5',
                cursor: 'pointer'
              }}
              className=" mid-center group rounded-lg border border-transparent px-10 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <a
                href="/landing"
              >
                Enter
              </a>
            </div>
          </main>
        </div>
      )

    } catch (error) {
      console.log("Error in myappContentView :: ", error);
    }
  }

  return (
    <>
      {myappContentView()}
    </>
  );
}
