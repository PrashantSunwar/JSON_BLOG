function Pagination({ active, setActive, setSkip }) {
  return (
    <>
      <button
        className="w-16 h-16 text-[#121212] text-xl rounded-lg"
        style={{ border: active === 1 ? "1px solid" : "none" }}
        onClick={() => {
          setSkip({ left: 0, right: 5 });
          setActive(1);
        }}
      >
        1
      </button>
      <button
        className="w-16 h-16 text-[#121212] text-xl rounded-lg"
        style={{ border: active === 2 ? "1px solid" : "none" }}
        onClick={() => {
          setSkip({ left: 5, right: 10 });
          setActive(2);
        }}
      >
        2
      </button>
    </>
  );
}

export default Pagination;
