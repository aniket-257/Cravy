import { useRouteError,Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <img
        src="https://t3.ftcdn.net/jpg/03/56/19/18/360_F_356191845_Uf1HSScTIHcxXeK1UXuEn0rdAzMvTfxo.jpg"
        alt="error-img"
      />
      <i>{err.data}</i>
      <h3>
        {err.status} : {err.statusText}
      </h3>
      
      <button><Link to="/">Home Page</Link></button>
    </div>
  );
};

export default Error;
