import { useRouter } from "next/router";

const steps = [
    { step: 1, name: 'menu', url:'/' },
    { step: 2, name: 'order', url:'/summary' },
    { step: 3, name: 'total', url:'/total' },
];

export default function Steps() {

  const router = useRouter();

  const progressBar = () => {

    let progress;

    if( router.pathname === '/' ) {
        progress = 5
    }
    if( router.pathname === '/summary' ) {
        progress = 50
    }
    else {
        progress === 100
    }
    return progress
  }
     
  return (
    <>
      <div className="flex flex-col gap-5 bg-gradient-to-t from-red-700/90 to-red-900/90 rounded sticky top-0 left-0 backdrop-blur-sm p-5">
        <div className="flex justify-between">
          { steps.map(step => (
            <button
              key={ step.step }
              onClick={() => router.push( step.url ) }
              className={`text-xl font-semibold text-orange-100 `}>
                { step.name }  
            </button>
            ))}
        </div>

        <div className="bg-orange-100/90 rounded-full backdrop-blur-sm">
          <div
            className="rounded-full bg-yellow-400 leading-none h-2"
            style={{ width: `${ progressBar()}%` }}>
          </div>
        </div>
      </div>

      
    </>
  )
}
