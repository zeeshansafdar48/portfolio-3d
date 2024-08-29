/* eslint-disable react/prop-types */
const Icon = ({ icon, link, type, info }) => {
  const handleClick = () => {
    switch (type) {
      case "link":
        window.open(link, "_blank");
        break;
      case "email":
        window.location.href = `mailto:${info}`;
        break;
      case "phone":
        alert(`Phone: ${info}`);
        break;
      default:
        break;
    }
  };

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      {icon()}
    </div>
  );
};

export default Icon;
