type StatusProps = {
  status: "success" | "loading" | "error";
};

const Status: React.FC<StatusProps> = ({ status }) => {
  let message;
  if (status === "loading") {
    message = "Loading";
  } else if (status === "success") {
    message = "Data Fetched Successfully";
  } else if (status === "error") {
    message = "Error Fetching Data";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Status;
