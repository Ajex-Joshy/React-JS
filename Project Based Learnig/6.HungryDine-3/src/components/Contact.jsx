const Contact = () => {
  return (
    <div className="mt-34">
      <h1 className="text-center text-3xl font-bold p-4">Contact Us</h1>
      <form action="">
        <input
          className="border-2 m-4"
          type="text"
          placeholder="name"
          name=""
          id=""
        />
        <input
          className="border-2 m-4"
          type="text"
          placeholder="age"
          name=""
          id=""
        />
        <input
          className="bg-green-400 rounded-lg m-4 px-4 py-1"
          type="submit"
          name=""
          id=""
        />
      </form>
    </div>
  );
};

export default Contact;
