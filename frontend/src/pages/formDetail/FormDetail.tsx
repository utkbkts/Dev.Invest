import Hero from "../../components/hero/Hero";
import images from "../../assets/form.jpg";
import { useState } from "react";
const FormDetail = () => {
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");
  const handleReplyClick = (messageId, messageContent) => {
    setReplyingTo({ messageId, messageContent });
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    console.log("Cevaplanan Mesaj ID:", replyingTo?.messageId);
    console.log("Yanıt:", replyText);

    setReplyText("");
    setReplyingTo(null);
  };

  return (
    <div className="">
      <Hero title="Forum" titleMainClass="top-1/4" image={images} />
      <div className="container mx-auto mt-[120px] pb-4">
        <div className="flex items-start gap-4 flex-col">
          <div className="flex items-center w-full justify-between bg-gray-600 p-2">
            <span>Pazar saat 23:37 de</span>
            <span>
              <span
                onClick={() =>
                  handleReplyClick(
                    1,
                    "Merhaba, okulda artık defter kullanmak pek pratik olmadığı için..."
                  )
                }
                className="underline cursor-pointer"
              >
                Cevapla
              </span>{" "}
              #1
            </span>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 items-center w-1/5">
              <img
                src=""
                alt=""
                className="rounded-full w-24 h-24 border-blue-500 border"
              />
              <span>Name</span>
              <span>Asistan</span>
              <div className="flex items-center justify-between w-full">
                <span>katılım</span>
                <span>1 ocak 20419</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span>mesajlar</span>
                <span>408</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span>Puanları:</span>
                <span>50</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span>Yaş:</span>
                <span>21</span>
              </div>
            </div>
            <div className="w-full p-4 border-l-2">
              <h2 className="font-poppins text-sm ">
                Merhaba, okulda artık defter kullanmak pek pratik olmadığı için
                bir tablet arıyorum. Bütçem maksimum 7 bin ₺ ve dediğim gibi
                okulda kullanacağım için kalem ile uyumlu olması önemli. Tableti
                not almak, PDF'leri açmak ve video izlemek gibi hafif işler için
                kullanacağım, oyun kuracağımı bile düşünmüyorum. Bu doğrultuda
                önerileriniz var mı?
              </h2>
            </div>
          </div>
        </div>
        {/* section2 */}
        <div className="flex items-start gap-4 flex-col mt-12">
          <div className="flex items-center w-full justify-between bg-gray-600 p-2">
            <span>Pazar saat 23:37 de</span>
            <span>
              <span className="underline cursor-pointer">Cevapla</span> #1
            </span>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 items-center w-1/5">
              <img
                src=""
                alt=""
                className="rounded-full w-24 h-24 border-blue-500 border"
              />
              <span>Name</span>
              <span>Asistan</span>
              <div className="flex items-center justify-between w-full">
                <span>katılım</span>
                <span>1 ocak 20419</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span>mesajlar</span>
                <span>408</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span>Puanları:</span>
                <span>50</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span>Yaş:</span>
                <span>21</span>
              </div>
            </div>
            <div className="w-full p-4 border-l-2">
              {replyingTo && (
                <div className="border-l-2 border-l-yellow-400 bg-slate-50 text-black">
                  <div className="p-2">
                    <span>MTATURKEY dedi ki;</span>
                    <hr />
                    <p>
                      Merhaba, okulda artık defter kullanmak pek pratik olmadığı
                      için bir tablet arıyorum. Bütçem maksimum 7 bin ₺ ve
                      dediğim gibi okulda kullanacağım için kalem ile uyumlu
                      olması önemli. Tableti not almak, PDF'leri açmak ve video
                      izlemek gibi hafif işler için kullanacağım, oyun
                      kuracağımı bile düşünmüyorum. Bu doğrultuda önerileriniz
                      var mı?
                    </p>
                  </div>
                </div>
              )}
              <h2 className="font-poppins text-sm pt-4">
                Merhaba, okulda artık defter kullanmak pek pratik olmadığı için
                bir tablet arıyorum. Bütçem maksimum 7 bin ₺ ve dediğim gibi
                okulda kullanacağım için kalem ile uyumlu olması önemli. Tableti
                not almak, PDF'leri açmak ve video izlemek gibi hafif işler için
                kullanacağım, oyun kuracağımı bile düşünmüyorum. Bu doğrultuda
                önerileriniz var mı?
              </h2>
            </div>
          </div>
        </div>

        {/* Cevap formu */}
        {replyingTo && (
          <form onSubmit={handleReplySubmit} className="mt-4 w-full">
            <div className="bg-gray-100 p-4 border-l-4 border-yellow-400">
              <p className="text-sm text-gray-700 mb-2">
                {replyingTo.messageContent}
              </p>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="w-full border p-2"
                placeholder="Cevabınızı buraya yazın..."
              />
            </div>
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Gönder
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormDetail;
