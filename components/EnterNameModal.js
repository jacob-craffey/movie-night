import React from "react";

export default function EnterNameModal({ submitName }) {
  const [name, setName] = React.useState("");

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-black">
        <div className="relative w-auto mx-auto max-w-3xl">
          <div className="border-0 rounded-lg relative flex flex-col w-full card">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Enter your name</h3>
            </div>
            <form>
              <div className="relative p-6 flex-auto">
                <input
                  type="text"
                  className="text-input"
                  required
                  minLength={1}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="button mx-auto"
                  type="button"
                  onClick={() => submitName(name)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40"></div>
    </>
  );
}
