const Contact = () => {
  return (
    <section>
          <div  className="bg-[#FBE4FF] text-black p-4 gap-4">
            <h2 className="text-2xl font-bold">Behance</h2>
            <p className="text-[#8491A0]">If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I’m an avid traveller and I capture the best moments that I would love to cherish with the world</p>
            <img src="/images/Rectangle.png" alt="" />
          </div>

          <div className="p-4 gap-4">
            <h2 className="text-2xl font-bold">Other technoligy</h2>
            <p className="text-[#8491A0]">Each dribbble shot is made with love and care. Do check out my work on Dribbble. Likes and comments are appreciated.</p>
            <img src="/images/mobile.png" alt="" />
          </div>

          <section className="bg-[#181823]">
            <div >
              <h2 className="p-4 font-bold">Camilo B.</h2>
              <section className="grid grid-cols-6 gap-1 justify-items-center relative " >
              <div><i className='bx bxl-github' ></i></div>
              <div><i className='bx bxl-linkedin-square ' ></i></div>
              <div><i className='bx bxl-instagram' ></i></div>
              </section>
              
            </div>
          
          </section>
    </section>
  
  )
}

export default Contact


