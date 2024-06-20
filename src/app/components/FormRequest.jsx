import React from "react";

const FormRequest = () => {
  return (
    <form className="mt-10 flex flex-col gap-6">
      {/* BLOCK */}
      <div className="flex flex-row gap-4">
        <div className="flex w-1/2 flex-col gap-1">
          <label htmlFor="" className="text-xs font-semibold">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Ex: John Doe"
            className="border-[1px] border-slate-500 px-2 py-1 text-xs"
          />
        </div>

        <div className="flex w-1/2 flex-col gap-1">
          <label htmlFor="" className="text-xs font-semibold">
            Contact
          </label>
          <input
            type="text"
            placeholder="Ex: 245 234 456 34"
            className="border-[1px] border-slate-500 px-2 py-1 text-xs"
          />
        </div>
      </div>

      {/* BLOCK */}
      <div className="flex flex-row gap-4">
        <div className="flex w-1/2 flex-col gap-1">
          <label htmlFor="" className="text-xs font-semibold">
            Country
          </label>
          <input
            type="text"
            placeholder="Ex: Côte d'Ivoire"
            className="border-[1px] border-slate-500 px-2 py-1 text-xs"
          />
        </div>

        <div className="flex w-1/2 flex-col gap-1">
          <label htmlFor="" className="text-xs font-semibold">
            City
          </label>
          <input
            type="text"
            placeholder="Ex: Abidjan"
            className="border-[1px] border-slate-500 px-2 py-1 text-xs"
          />
        </div>
      </div>

      {/* BLOCK */}
      <div className="flex flex-row gap-4">
        <div className="flex w-1/2 flex-col gap-1">
          <label htmlFor="" className="text-xs font-semibold">
            Email
          </label>
          <input
            type="text"
            placeholder="Ex: webdev@gmail.com"
            className="border-[1px] border-slate-500 px-2 py-1 text-xs"
          />
        </div>

        <div className="flex w-1/2 flex-col gap-1">
          <label htmlFor="" className="text-xs font-semibold">
            Address
          </label>
          <input
            type="text"
            placeholder="Ex: 01 BP ABJ 1234"
            className="border-[1px] border-slate-500 px-2 py-1 text-xs"
          />
        </div>
      </div>

      {/* BLOCK */}
      <div className="flex flex-row gap-4">
        <div className="flex w-full flex-col gap-1">
          <label htmlFor="" className="text-xs font-semibold">
            Waste Request
          </label>
          <input
            type="text"
            placeholder="Ex: one visit by year"
            className="border-[1px] border-slate-500 px-2 py-1 text-xs"
          />
        </div>
      </div>

      {/* BLOCK */}
      <div className="flex flex-row gap-4">
        <div className="flex w-full flex-col gap-1">
          <label htmlFor="" className="text-xs font-semibold">
            Request
          </label>
          <input
            type="textarea"
            placeholder=""
            className="border-[1px] border-slate-500 px-2 py-1 text-xs"
          />
        </div>
      </div>

      <button className="rounded-sm bg-black py-2 text-xs font-bold text-white">
        SEND YOUR REQUEST
      </button>
    </form>
  );
};

export default FormRequest;
