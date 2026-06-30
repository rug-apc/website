const Footer = () => {
  const buildTime = process.env.REACT_APP_BUILD_TIME;

  return (
    <div className="footer center flex">
      <p className="text-footer">
        Copyright © Algorithmic Programming Contests 2022-2026
      </p>

      <p className="text-footer">
        Last updated:{" "}
        {buildTime ? new Date(buildTime).toLocaleString() : "unknown"}
      </p>
    </div>
  );
};

export default Footer;
