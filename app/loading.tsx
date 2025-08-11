import Spinner from "./components/Spinner"



export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black backdrop-blur-sm">
      <Spinner />
    </div>
  );
}
