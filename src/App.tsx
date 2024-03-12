import MusicPlayer from "./components/MusicPlayer"

function App() {
  return (
    <>
      <div className="bg-[#333333] min-h-screen">
        <header className="bg-[url('src/assets/sl-mobile.jpg')] bg-cover bg-no-repeat h-[165px] px-9 py-2">
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

        <main className="px-9">

          {/* ABOUT ME */}
          <div className="flex flex-col gap-5 mt-8 ">
            <img src="src/assets/sl-one.jpg" alt="SL Image" />

            <div className="flex flex-col items-center gap-3">
              <h2 className="font-rubik font-semibold text-[1.25rem] text-[#F0EAD6] leading-[90%]">About Me</h2>
              <hr className="w-[54px] border-2" />
            </div>

            <p className="font-inter text-[0.813rem] leading-[120%] text-[#CCCCCC]">
              Adewunmi Ayobami Samuel a.k.a SammyLee was born on the 3rd of August and brought up in Lagos into the family of Adewunmi.<br /><br />
              His unique style of music is called Afro-Urban which has sweet harmonies, melodies designed to create excitement and fun for people to dance. He plays 3 musical instruments such as piano, guitar and drum set and he’s also a music producer.<br /><br />
              SammyLee has collaborated with Lil kesh on a song titled “wait” Ice prince, Mr Eazi, Dj enimoney, Dremo, Skales,D-black and many more talented artistes.
            </p>

          </div>

          {/* DISCOGRAPHY */}
          <MusicPlayer title={"enjoyment"} src={"src/tracks/sl-enjoyment.mp3"} />
          <MusicPlayer title={"wait"} src={"src/tracks/sl-wait.mp3"} />


          {/* GALLERY */}
          <div className="flex flex-col gap-5 mt-8">
            <div className="flex flex-col items-center gap-3">
              <h2 className="font-rubik font-semibold text-[1.25rem] text-[#F0EAD6] leading-[90%]">Gallery</h2>
              <hr className="w-[42px] border-2" />
            </div>

            <div className="flex flex-col gap-7">
              <img src="src/assets/gallery/sl-two.jpg" alt="SL Image" />
              <img src="src/assets/gallery/sl-three.jpg" alt="SL Image" />
              <img src="src/assets/gallery/sl-four.jpg" alt="SL Image" />
              <img src="src/assets/gallery/sl-five.jpg" alt="SL Image" />
              <img src="src/assets/gallery/sl-six.jpg" alt="SL Image" />
              <img src="src/assets/gallery/sl-seven.jpg" alt="SL Image" />
              <img src="src/assets/gallery/sl-eight.jpg" alt="SL Image" />
              <img src="src/assets/gallery/sl-nine.jpg" alt="SL Image" />
              <img src="src/assets/gallery/sl-ten.png" alt="SL Image" />
              <img src="src/assets/gallery/sl-eleven.jpg" alt="SL Image" />
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="bg-[url('src/assets/sl-footer-mobile.jpg')] bg-cover bg-no-repeat h-[482px] px-9 py-12 mt-8">
          <div className="flex flex-col items-center gap-3">
            <h2 className="font-rubik font-semibold text-[1.25rem] text-[#F0EAD6] leading-[90%]">Contact Me</h2>
            <hr className="w-[65px] border-2" />
          </div>

          <form className="mt-8 flex flex-col gap-6">
            <div>
              <label htmlFor="email"></label>
              <input id="email" type="text" className="bg-transparent outline-none border-b w-full font-inter text-[0.813rem] text-[#F0EAD6] leading-[120%] pb-2" placeholder="Email Address" />
            </div>

            <div>
              <label htmlFor="subject"></label>
              <input id="subject" type="text" className="bg-transparent outline-none border-b w-full font-inter text-[0.813rem] text-[#F0EAD6] leading-[120%] pb-2" placeholder="Subject" />
            </div>

            <div>
              <label htmlFor="message"></label>
              <textarea id="message" className="bg-transparent outline-none border-b h-6 resize-none w-full font-inter text-[0.813rem] text-[#F0EAD6] leading-[120%] overflow-hidden" placeholder="Message" />
            </div>

            <button className="bg-[#008080] text-[#F0EAD6] w-[120px] h-[30px] rounded-[0.25rem] font-inter text-[0.813rem] leading-[120%] font-medium">SUBMIT</button>
          </form>

          <div className="flex flex-col gap-6 mt-7">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1383 29.2774C20.0383 29.2001 14.0869 28.3776 7.85394 22.1461C1.62248 15.9132 0.801438 9.96323 0.722688 7.86177C0.606021 4.65927 3.05894 1.54864 5.89248 0.333851C6.2337 0.186511 6.60736 0.130414 6.97679 0.171065C7.34623 0.211716 7.69876 0.347718 7.99977 0.565726C10.3331 2.26614 11.9431 4.83864 13.3256 6.86135C13.6298 7.30575 13.7598 7.84652 13.691 8.38064C13.6222 8.91475 13.3592 9.40487 12.9523 9.7576L10.1071 11.8707C9.9696 11.97 9.87284 12.1158 9.83476 12.281C9.79667 12.4462 9.81985 12.6196 9.89998 12.7691C10.5446 13.9401 11.6908 15.6843 13.0033 16.9968C14.3173 18.3093 16.1431 19.5314 17.3958 20.2489C17.5529 20.337 17.7378 20.3617 17.9124 20.3177C18.0871 20.2738 18.2383 20.1646 18.335 20.0126L20.1871 17.1936C20.5276 16.7413 21.0299 16.4383 21.5888 16.3481C22.1477 16.2578 22.7198 16.3873 23.1854 16.7095C25.2373 18.1299 27.6319 19.7122 29.3848 21.9566C29.6205 22.2598 29.7704 22.6207 29.8189 23.0017C29.8674 23.3826 29.8126 23.7696 29.6604 24.1222C28.4398 26.9703 25.351 29.3955 22.1383 29.2774Z" fill="#F0EAD6" />
              </svg>

              <p className="font-inter text-[0.813rem] text-[#F0EAD6] leading-[120%]">+2349073790222</p>
            </div>

            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.7084 0.833496H5.29169C4.13137 0.833496 3.01857 1.29443 2.19809 2.1149C1.37762 2.93538 0.916687 4.04817 0.916687 5.2085V19.7918C0.916687 20.9522 1.37762 22.0649 2.19809 22.8854C3.01857 23.7059 4.13137 24.1668 5.29169 24.1668H25.7084C26.8687 24.1668 27.9815 23.7059 28.8019 22.8854C29.6224 22.0649 30.0834 20.9522 30.0834 19.7918V5.2085C30.0834 4.04817 29.6224 2.93538 28.8019 2.1149C27.9815 1.29443 26.8687 0.833496 25.7084 0.833496ZM25.7084 3.75016L16.2292 10.2689C16.0075 10.3969 15.756 10.4643 15.5 10.4643C15.244 10.4643 14.9925 10.3969 14.7709 10.2689L5.29169 3.75016H25.7084Z" fill="#F0EAD6" />
              </svg>


              <p className="font-inter text-[0.813rem] text-[#F0EAD6] leading-[120%]">booksammylee@gmail.com</p>
            </div>

            <div className="flex gap-6">
              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.542 0C18.2294 0.0044999 19.0859 0.0134997 19.8253 0.0344992L20.1163 0.0449989C20.4523 0.0569986 20.7838 0.0719982 21.1843 0.0899978C22.7802 0.164996 23.8691 0.41699 24.8246 0.787482C25.8145 1.16847 26.6485 1.68446 27.4825 2.51694C28.2452 3.26677 28.8353 4.17379 29.2119 5.17488C29.5824 6.13036 29.8343 7.21933 29.9093 8.81679C29.9273 9.21578 29.9423 9.54728 29.9543 9.88477L29.9633 10.1758C29.9858 10.9137 29.9948 11.7702 29.9978 13.4577L29.9993 14.5767V16.5416C30.003 17.6357 29.9915 18.7298 29.9648 19.8235L29.9558 20.1145C29.9438 20.452 29.9288 20.7835 29.9108 21.1825C29.8358 22.78 29.5809 23.8674 29.2119 24.8244C28.8364 25.8261 28.2461 26.7333 27.4825 27.4824C26.7324 28.2448 25.8255 28.835 24.8246 29.2118C23.8691 29.5823 22.7802 29.8343 21.1843 29.9093C20.8284 29.9261 20.4724 29.9411 20.1163 29.9543L19.8253 29.9633C19.0859 29.9843 18.2294 29.9948 16.542 29.9978L15.4231 29.9993H13.4597C12.3651 30.0031 11.2706 29.9916 10.1763 29.9648L9.88536 29.9558C9.52929 29.9423 9.17331 29.9268 8.81741 29.9093C7.2215 29.8343 6.13255 29.5823 5.1756 29.2118C4.17466 28.8359 3.26802 28.2456 2.51924 27.4824C1.75584 26.7328 1.16514 25.8257 0.788325 24.8244C0.417844 23.8689 0.165857 22.78 0.0908608 21.1825C0.0741498 20.8266 0.0591505 20.4706 0.0458631 20.1145L0.0383637 19.8235C0.0107232 18.7298 -0.00177754 17.6357 0.000865457 16.5416V13.4577C-0.00332078 12.3636 0.00767983 11.2695 0.0338639 10.1758L0.0443633 9.88477C0.0563627 9.54728 0.0713619 9.21578 0.0893609 8.81679C0.164357 7.21933 0.416344 6.13186 0.786825 5.17488C1.16348 4.17276 1.75536 3.26546 2.52074 2.51694C3.26934 1.75417 4.17537 1.16395 5.1756 0.787482C6.13255 0.41699 7.22 0.164996 8.81741 0.0899978C9.21639 0.0719982 9.54938 0.0569986 9.88536 0.0449989L10.1763 0.0359991C11.2701 0.00934884 12.3641 -0.002152 13.4582 0.00149986L16.542 0ZM15.0001 7.49982C13.0111 7.49983 11.1035 8.28998 9.69707 9.69647C8.29062 11.103 7.50048 13.0106 7.50048 14.9996C7.50048 16.9887 8.29062 18.8963 9.69707 20.3028C11.1035 21.7093 13.0111 22.4995 15.0001 22.4995C16.9891 22.4995 18.8967 21.7093 20.3031 20.3028C21.7096 18.8963 22.4997 16.9887 22.4997 14.9996C22.4997 13.0106 21.7096 11.103 20.3031 9.69647C18.8967 8.28998 16.9891 7.49982 15.0001 7.49982ZM15.0001 10.4998C15.591 10.4997 16.1762 10.616 16.7221 10.842C17.2681 11.0681 17.7642 11.3994 18.1821 11.8172C18.6 12.235 18.9316 12.731 19.1578 13.2769C19.384 13.8228 19.5005 14.408 19.5006 14.9989C19.5007 15.5898 19.3844 16.175 19.1584 16.721C18.9323 17.267 18.601 17.7631 18.1832 18.181C17.7654 18.5989 17.2694 18.9305 16.7235 19.1567C16.1776 19.383 15.5925 19.4994 15.0016 19.4995C13.8082 19.4995 12.6637 19.0254 11.8198 18.1816C10.9759 17.3377 10.5018 16.1931 10.5018 14.9996C10.5018 13.8062 10.9759 12.6616 11.8198 11.8177C12.6637 10.9738 13.8082 10.4998 15.0016 10.4998M22.8762 5.24988C22.3789 5.24988 21.9021 5.44742 21.5504 5.79904C21.1988 6.15066 21.0013 6.62756 21.0013 7.12483C21.0013 7.6221 21.1988 8.09901 21.5504 8.45063C21.9021 8.80225 22.3789 8.99979 22.8762 8.99979C23.3734 8.99979 23.8503 8.80225 24.202 8.45063C24.5536 8.09901 24.7511 7.6221 24.7511 7.12483C24.7511 6.62756 24.5536 6.15066 24.202 5.79904C23.8503 5.44742 23.3734 5.24988 22.8762 5.24988Z" fill="#F0EAD6" />
              </svg>

              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30 30L18.2681 12.5154L18.2881 12.5318L28.8662 0H25.3313L16.7141 10.2L9.87103 0H0.600257L11.5531 16.3241L11.5518 16.3227L0 30H3.5349L13.1152 18.6518L20.7292 30H30ZM8.47042 2.72726L24.9311 27.2727H22.1298L5.65588 2.72726H8.47042Z" fill="#F0EAD6" />
              </svg>

              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 15.0919C30 6.75666 23.2846 0 15.0019 0C6.71541 0.00187477 0 6.75666 0 15.0937C0 22.6247 5.48556 28.8676 12.6547 30V19.4544H8.84889V15.0937H12.6584V11.766C12.6584 7.98463 14.8988 5.89614 18.324 5.89614C19.9663 5.89614 21.6817 6.19048 21.6817 6.19048V9.90251H19.79C17.9284 9.90251 17.3472 11.0667 17.3472 12.261V15.0919H21.5054L20.8418 19.4526H17.3453V29.9981C24.5144 28.8658 30 22.6228 30 15.0919Z" fill="#F0EAD6" />
              </svg>

              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.801 4.7C22.4932 3.39937 21.7724 1.72905 21.773 0H15.861V20.6667C15.8154 21.785 15.2733 22.8444 14.349 23.6216C13.4247 24.3988 12.1903 24.8332 10.9056 24.8333C8.18878 24.8333 5.93112 22.9 5.93112 20.5C5.93112 17.6333 9.10714 15.4833 12.3788 16.3667V11.1C5.77806 10.3333 0 14.8 0 20.5C0 26.05 5.28061 30 10.8865 30C16.8941 30 21.773 25.75 21.773 20.5V10.0167C24.1703 11.5164 27.0485 12.3211 30 12.3167V7.16667C30 7.16667 26.4031 7.31667 23.801 4.7Z" fill="#F0EAD6" />
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
