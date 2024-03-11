function App() {
  return (
    <>
      <div className="bg-[#333333] min-h-screen">
        <header className="bg-[url('src/assets/sl-mobile.jpg')] bg-cover bg-no-repeat h-[165px] bg-opacity-50 px-9 py-2">
          <div className="flex justify-between items-center">
            <div className="w-[44px] h-[35px] -ml-[10px]">
              <img src="src/assets/logo.png" alt="SL Logo"></img>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect width="16" height="16" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_51_22" transform="scale(0.00195312)" />
                </pattern>
                <image id="image0_51_22" width="512" height="512" xlinkHref="data:image/png;base64,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" />
              </defs>
            </svg>
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <hr className="w-[80px]" />

            <div>
              <h1 className="text-[1.5rem] font-rubik font-bold text-[#F0EAD6] leading-[90%]">SAMMYLEE</h1>
              <p className="font-rublik font-semibold text-[0.875rem] text-[#CCCCCC] leading-[90%]">Musician | Producer</p>
            </div>
            <button className="bg-[#008080] text-white rounded-[4px] text-[0.625rem] font-semibold w-[80px] h-6 leading-[120%]">CONTACT ME</button>
          </div>
        </header>

        <main className="mt-8 px-9">
          <div className="flex flex-col gap-5">
            <img src="src/assets/sl-one.jpg" alt="SL Image" />

            <div className="flex flex-col items-center gap-2">
              <h2 className="font-rubik font-semibold text-[1.25rem] text-[#F0EAD6] leading-[90%]">About Me</h2>
              <hr className="w-[54px] border-2" />
            </div>

            <p className="font-inter text-[0.813rem] leading-[120%] text-[#CCCCCC]">
              Adewunmi Ayobami Samuel a.k.a SammyLee was born on the 3rd of August and brought up in Lagos into the family of Adewunmi.<br /><br />
              His unique style of music is called Afro-Urban which has sweet harmonies, melodies designed to create excitement and fun for people to dance. He plays 3 musical instruments such as piano, guitar and drum set and he’s also a music producer.<br /><br />
              SammyLee has collaborated with Lil kesh on a song titled “wait” Ice prince, Mr Eazi, Dj enimoney, Dremo, Skales,D-black and many more talented artistes.
            </p>

          </div>
        </main>
      </div>
    </>
  )
}

export default App
