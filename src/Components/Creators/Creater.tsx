const Creater = () => {

    function  handleFollow(event:any){

        if(event.target.classList.contains('active')){
            event.target.classList.remove('active');
            event.target.innerHTML = 'Follow';
        }else{
            event.target.classList.add('active');
            event.target.innerHTML = 'UnFollow';

        }
    }
  return ( 
    <div>
      <div>
        <h1 className="smallHeading text-center">Top Creators</h1>
        <p className="tagline textPara text-center w-64 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, velit?
        </p>
      </div>

      <div className="creators flex flex-wrap justify-center gap-5 lg:justify-between items-center my-3">



        <div className="creator grid grid-rows-2    glassbg rounded-xl">
          <img
            src="/Images/yatchClub/yatchClubCover.jpg"
            alt="cover"
            className="overflow-hidden rounded-xl  h-full"
          />
          <div className="content px-7">
            <div className="logo m-auto">
              <img src="/Images/yatchClub/yatchClubLogo.png" alt="" className="rounded-full" />
            </div>
            <span className="name">Yatch Club</span>
            <p className="tagline textPara text-center m-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              velit?
            </p>

            <button onClick={(e)=>handleFollow(e)} className="btn-primary m-auto my-5 w-1/2">Follow</button>
          </div>
        </div>





        <div className="creator grid grid-rows-2    glassbg rounded-xl">
          <img
            src="/Images/Bong/BongCover.png"
            alt="cover"
            className="overflow-hidden rounded-xl  h-full"
          />
          <div className="content px-7">
            <div className="logo m-auto">
              <img src="/Images/Bong/BongLogo.jpg" alt="" className="rounded-full" />
            </div>
            <span className="name">Bong</span>
            <p className="tagline textPara text-center m-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              velit?
            </p>

            <button  onClick={(e)=>handleFollow(e)}  className="btn-primary m-auto my-5 w-1/2">Follow</button>
          </div>
        </div>





        <div className="creator grid grid-rows-2  glassbg rounded-xl">
          <img
            src="/Images/illuminati/illuminatiCover.jpg"
            alt="cover"
            className="overflow-hidden rounded-xl h-full "
          />
          <div className="content px-7">
            <div className="logo m-auto">
              <img src="/Images/illuminati/illuminatiLogo.gif" alt="" className="rounded-full" />
            </div>
            <span className="name">Yatch Club</span>
            <p className="tagline textPara text-center m-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              velit?
            </p>

            <button  onClick={(e)=>handleFollow(e)}  className="btn-primary m-auto my-5 w-1/2">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creater;
