const Form = () => {
  return (
    <div className="w-full mb-4">
      <h1 className="bg-white py-2 px-4 rounded-md text-black font-bold ">
        Forumda neler oluyor?
      </h1>
      <div className="flex gap-2 w-full justify-between pt-4">
        <div className="flex gap-2">
          <img src="" alt="" className="w-12 h-12 rounded-full bg-black" />
          <div className="flex flex-col">
            <span className="hover:underline cursor-pointer">
              Yazıcı aynı yazıları tekrarlıyor ?
            </span>
            <span>
              <span className="hover:underline cursor-pointer">Nickname</span>-{" "}
              <span className="hover:underline cursor-pointer">22:51 da</span> -{" "}
              <span className="hover:underline cursor-pointer"> category</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="flex items-center justify-between">
            Cevaplar: <span>1</span>
          </span>
          <span className="flex items-center justify-between gap-12">
            Görüntülenme:<span>190</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            55 dakika önce<span>FakeHero</span>
          </div>
          <img src="" alt="" className="w-12 h-12 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
};

export default Form;
