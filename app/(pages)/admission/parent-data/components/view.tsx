import Parent from "@/pages/(dashboard)/admission-officer/admission/components/content/parent";

function view({ data, setEdit }: any) {
  const id = Number(localStorage.getItem("auth"));

  console.log(111, id, data);

  return (
    <div className="post">
      <br />
      <h3>Parent Information</h3>
      <h4>Make sure to keep your data up to date.</h4>
      <br />
      <Parent id={id} data={data} />

      <br />

      <button
        onClick={() => {
          setEdit(true);
        }}
        className="custom yellow"
      >
        Update
      </button>
    </div>
  );
}

export default view;
