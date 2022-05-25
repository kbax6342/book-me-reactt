import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList d-flex  flex-column flex-md-row col-9">
      <div className="pListItem card">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt=""
          className="pListImg"
        />
        <div className="pListTitles p-3 blue darken-3">
          <h1 className="white-text font-weight-bold">Hotels</h1>
          <h2 className="white-text">233 hotels</h2>
        </div>
      </div>
      <div className="pListItem card">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles p-3 blue darken-3">
          <h1 className="white-text font-weight-bold">Apartments</h1>
          <h2 className="white-text">2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem card">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles p-3 blue darken-3">
          <h1 className="white-text font-weight-bold">Resorts</h1>
          <h2 className="white-text">2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem card">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles p-3 blue darken-3">
          <h1 className="white-text font-weight-bold">Villas</h1>
          <h2 className="white-text">2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem card blue lighten-4">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles p-3 blue darken-3">
          <h1 className="white-text font-weight-bold">Cabins</h1>
          <h2 className="white-text">2331 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
