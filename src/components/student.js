const Student = ({ studentInfo, history }) => {
  const { id, name, img } = studentInfo;
  const goToDetails = () => {
    history.push(`/students/${id}`);
  };

  if (studentInfo) {
    return (
      <div
        className="alert alert-dark d-flex align-items-center"
        style={{ cursor: "pointer" }}
        onClick={goToDetails}
      >
        <img
          src={img}
          class="img-fluid rounded-circle"
          alt=""
          style={{
            maxWidth: "85px",
            maxHeight: "85px",
            width: "85px",
            height: "85px",
            objectFit: "cover",
          }}
        />
        <h4 className="ml-3">{name}</h4>
      </div>
    );
  }
};
export default Student;
