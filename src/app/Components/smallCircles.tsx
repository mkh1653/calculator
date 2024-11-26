import syles from "../style.module.css";

const SmallCircle = () => {
  return (
    <>
      <span
        className={`${syles.smallCircle} bg-sky-500 rounded-full absolute right-8 top-2/3`}></span>
      <span
        className={`${syles.smallCircle} bg-sky-500 rounded-full absolute left-16 top-1/4`}></span>
      <span
        className={`${syles.smallCircle} bg-sky-500 rounded-full absolute left-1/3 top-3/4`}></span>
    </>
  );
};

export default SmallCircle;
