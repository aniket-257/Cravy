const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <h1 className="font-bold text-lg m-6">Contact Us Page 📃</h1>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          className="border border-black p-1 m-2"
        />
        <input
          type="text"
          placeholder="Your Message"
          className="border border-black p-1 m-2"
        />
        <button type="submit" className="border bg-green-50 p-1 m-4 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
