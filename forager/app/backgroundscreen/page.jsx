import NavBar from '../../components/NavBar';
import BackgroundScreen from '../../components/BackgroundScreen';
export default function PhotoSearchPage() {
  return (
    <div className="page relative">
      {/* Background Image */}
      <a href="/mushroom">
  <div
    className="bg-cover bg-no-repeat bg-center w-[100%] h-[100%] cursor-pointer"
    style={{
      backgroundImage: `url(/images/urshroom.png)`,
    }}
  ></div>
</a>

      {/* BackgroundScreen on top of the photo */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <BackgroundScreen />
      </div>
    </div>
  );
}
