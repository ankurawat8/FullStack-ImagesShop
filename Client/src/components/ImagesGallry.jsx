import ImageCard from "../components/ImageCard";
const ImagesGallry = () => {
  return (
    <div className="flex mx-4 sm:mx-8 justify-center items-center flex-col">
      <h3 className="text-2xl font-bold my-6 ">Photos</h3>
      {/* images list */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Image Card */}
        <ImageCard
          img={
            "https://images.pexels.com/photos/932261/pexels-photo-932261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          title={"The Cat Toy"}
          name={"anku"}
          price={25}
        />
        <ImageCard
          img={
            "https://images.pexels.com/photos/5266499/pexels-photo-5266499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          title={"Woman sitting and reading comic book"}
          name={"Darya Sannikova"}
          price={35}
        />
        <ImageCard
          img={
            "https://images.pexels.com/photos/932261/pexels-photo-932261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          title={"The Cat Toy"}
          name={"anku"}
          price={25}
        />
        <ImageCard
          img={
            "https://images.pexels.com/photos/5266499/pexels-photo-5266499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          title={"Woman sitting and reading comic book"}
          name={"Darya Sannikova"}
          price={35}
        />{" "}
        <ImageCard
          img={
            "https://images.pexels.com/photos/932261/pexels-photo-932261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          title={"The Cat Toy"}
          name={"anku"}
          price={25}
        />
        <ImageCard
          img={
            "https://images.pexels.com/photos/5266499/pexels-photo-5266499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          title={"Woman sitting and reading comic book"}
          name={"Darya Sannikova"}
          price={35}
        />{" "}
        <ImageCard
          img={
            "https://images.pexels.com/photos/932261/pexels-photo-932261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          title={"The Cat Toy"}
          name={"anku"}
          price={25}
        />
        <ImageCard
          img={
            "https://images.pexels.com/photos/5266499/pexels-photo-5266499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          title={"Woman sitting and reading comic book"}
          name={"Darya Sannikova"}
          price={35}
        />
      </div>
    </div>
  );
};

export default ImagesGallry;
