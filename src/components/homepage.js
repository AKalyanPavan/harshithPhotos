import logo from './../images/logo.jpeg'
import image1 from './../images/image1.JPG'
import image2 from './../images/image2.jpeg'
import image3 from './../images/image3.JPG'
import image5 from './../images/image5.jpg'
import image6 from './../images/image6.jpeg'
import image7 from './../images/image7.jpeg'
import image8 from './../images/image8.jpeg'
import image9 from './../images/image9.JPG'

function Homepage() {
  return (
    <>
      {/*header*/}
      <div className="h-[200px] bg-[#232323] content-center sticky top-[0px] opacity-[0.9] pb-[5px]">
        <div className="bg-[#232323] h-full w-[2000px] mx-auto px-[20px] flex justify-between items-center">
          <div className="h-[200px] cursor-pointer">
            <img src={logo} className="h-[100%]" />
          </div>
          <div className="text-[#f7c63f] text-[25px] font-sans tracking-[2px] cursor-pointer">
            CONTACT
          </div>
        </div>
      </div>

      {/*body*/}
      <div className="bg-[#232323]">
        <div className="w-[2000px] bg-[#232323] mx-[auto] px-[20px] pt-[100px] pb-[500px]">
          <div className="flex justify-around">
            <div className="w-[30%]">
              <img src={image1} className="rounded-[30px] ml-[100px] border-[solid] border-[#c99a17]" />
              <img src={image3} className="rounded-[30px] mt-[200px] border-[solid] border-[#c99a17]" />
            </div>
            <div className="w-[35%] pt-[10%]">
              <img src={image2} className="rounded-[30px] border-[solid] border-[#c99a17]" />
              <img src={image5} className="rounded-[30px] border-[solid] border-[#c99a17] mt-[200px] ml-[-100px]" />
            </div>
          </div>
          <div className="flex justify-around mt-[100px]">
            <div className="w-[30%]">
              <img src={image6} className="rounded-[30px] border-[solid] border-[#c99a17] ml-[50px]" />
              <img src={image8} className="rounded-[30px] mt-[250px] border-[solid] border-[#c99a17]" />
            </div>
            <div className="w-[35%] pt-[10%]">
              <img src={image7} className="rounded-[30px] border-[solid] border-[#c99a17] ml-[-50px]" />
              <img src={image9} className="rounded-[30px] border-[solid] border-[#c99a17] mt-[200px] ml-[-100px]" />
            </div>
          </div>
          <div className="w-[30%]">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;




// shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]
// fff0c8