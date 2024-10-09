/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Inputs from "../../ui/Inputs";
import Textarea from "../../ui/Textarea";
import subjectAddValidation from "../../schemas/subjectAddValidation";
import { zodResolver } from "@hookform/resolvers/zod";

const SubjectAdd = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(subjectAddValidation),
    mode: "onChange",
  });
  const onSubmit = (value: any) => {
    console.log(value);
    reset();
  };
  return (
    <div className="mt-[200px] max-w-4xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-semibold text-black bg-white py-3 px-6 rounded-lg shadow-lg">
          Konularımızı Eklerken Özenli Olalım Lütfen.
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 text-md font-medium">
                Konu Başlığı
              </label>
              <Inputs
                {...register("subject")}
                type="text"
                name="subject"
                placeholder="Konu başlığı"
              />
              {errors.subject?.message && (
                <span className="text-white bg-red-400 py-2 px-4">
                  {errors.subject.message as any} !!
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 text-md font-medium">
                Konu İçeriği
              </label>
              <Textarea
                {...register("content")}
                placeholder="Konu içeriğini buraya yazın"
              />
              {errors.content?.message && (
                <span className="text-white bg-red-400 py-2 px-4">
                  {errors.content.message as any} !!
                </span>
              )}
            </div>
          </div>
          <div className="pt-6">
            <Button className="w-full">Ekle</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubjectAdd;
